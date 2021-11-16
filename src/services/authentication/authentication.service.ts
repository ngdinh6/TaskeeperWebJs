import { HttpStatus, AuthEndpoint } from "enums/http.enum";
import { sendPostRequest } from "services/api.service";
import { ILoginState, IRegisterNewAccountState } from "models/IUserState";

export const login = async (
    loginState: ILoginState
): Promise<Object | Error> => {
    const loginResult = await sendPostRequest(AuthEndpoint.LOGIN, loginState);

    if (loginResult.status === HttpStatus.ACCEPTED) {
        return loginResult.data;
    }

    throw new Error(loginResult.message);
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

    throw new Error(registerResult.message);
};
