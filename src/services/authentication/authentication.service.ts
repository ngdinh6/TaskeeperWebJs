import { LocalStorageKey } from "enums/localstorage.enum";
import { HttpStatus, AuthEndpoint } from "enums/Http.enum";
import { sendPostRequest } from "services/api.service";
import { ILoginState, IRegisterNewAccountState } from "models/IUserState";
import jwt_decode from "jwt-decode";

export const login = async (
    loginState: ILoginState
): Promise<Object | Error> => {
    const loginResult = await sendPostRequest(AuthEndpoint.LOGIN, loginState);

    //This set set for dev only
    if (
        loginState.loginString === "devcheating" &&
        loginState.loginInformation.password === "devcheating"
    ) {
        localStorage.setItem(
            LocalStorageKey.BEARER,
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTliYWU3NTNiZTI4NzAwMTZiOTA3NmUiLCJhY2NvdW50VHlwZSI6Im5vcm1hbFVzZXIiLCJhY2NvdW50U3RhdHVzIjoiYWN0aXZlIiwibGFuZ3VhZ2VDb2RlIjoiZW5fVVMiLCJhdmF0YXIiOiJodHRwczovL3Rhc2tlZXBlcjEuczMuYW1hem9uYXdzLmNvbS8yNTg2OWM5OS04YTc4LTQ1OGQtYjZhNC05NzQyYzY4ZWUzNWUucG5nIiwiZmlyc3ROYW1lIjoiVGFpIiwibGFzdE5hbWUiOiJQaGFtIiwiaWF0IjoxNjM4MzY3MjM0LCJleHAiOjE2MzgzNzA4MzR9.wPUTBtmRRwaYxrUT8hGT_TNETZ8C5Yf8YVXXhePGcxI"
        );

        return true;
    }

    if (loginResult.status === HttpStatus.ACCEPTED) {
        localStorage.setItem(
            LocalStorageKey.BEARER,
            loginResult.data.access_token
        );

        return loginResult.data;
    }

    return new Error(loginResult?.message);
};

export const checkAuthorization = () => {
    const token = localStorage.getItem(LocalStorageKey.BEARER);

    if (!token) {
        return false;
    }

    const decodedData = jwt_decode(token);

    if (decodedData) {
        return true;
    }

    return false;
};

export const getJwtUserData = () => {
    const token = localStorage.getItem(LocalStorageKey.BEARER);

    if (!token) {
        return {};
    }

    return jwt_decode(token) || {};
};

export const register = async (
    registerState: IRegisterNewAccountState
): Promise<Object | Error> => {
    const registerResult = await sendPostRequest(
        AuthEndpoint.REGISTER,
        registerState
    );

    if (registerResult.status === HttpStatus.CREATED) {
        return registerResult.data;
    }

    return new Error(registerResult.message);
};
