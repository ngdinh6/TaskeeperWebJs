import { LocalStorageKey } from "enums/localstorage.enum";
import { store } from "store/configStore";
import moduleConfig from "module.config";
import _ from "lodash";

enum HttpMethod {
    POST = "POST",
    GET = "GET",
    DELETE = "DELETE",
    PUT = "PUT",
}
const host = moduleConfig.server.host;

export const sendPostRequest = async (urlSubLink: string, body: Object) => {
    const headers = buildHeaders();
    const responseData = await fetch(buildUrl(urlSubLink), {
        method: HttpMethod.POST,
        headers,
        body: JSON.stringify(body),
    });
    const content = await responseData.json();

    return _.assign(content, { status: responseData.status });
};

export const sendPutRequest = async (urlSubLink: string, body: Object) => {
    const headers = buildHeaders();
    const responseData = await fetch(buildUrl(urlSubLink), {
        method: HttpMethod.PUT,
        headers,
        body: JSON.stringify(body),
    });
    const content = await responseData.json();

    return _.assign(content, { status: responseData.status });
};

export const sendGetRequest = async (urlSubLink: string) => {
    const headers = buildHeaders();
    const responseData = await fetch(buildUrl(urlSubLink), {
        method: HttpMethod.GET,
        headers,
    });
    const content = await responseData.json();

    return _.assign(content, { status: responseData.status });
};

export const sendDeleteRequest = async (urlSubLink: string, body: Object) => {
    const headers = buildHeaders();
    const responseData = await fetch(buildUrl(urlSubLink), {
        method: HttpMethod.DELETE,
        headers,
        body: JSON.stringify(body),
    });
    const content = await responseData.json();

    return _.assign(content, { status: responseData.status });
};

const buildHeaders = () => {
    localStorage.setItem(
        LocalStorageKey.BEARER,
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTliYWU3NTNiZTI4NzAwMTZiOTA3NmUiLCJhY2NvdW50VHlwZSI6Im5vcm1hbFVzZXIiLCJhY2NvdW50U3RhdHVzIjoiYWN0aXZlIiwibGFuZ3VhZ2VDb2RlIjoiZW5fVVMiLCJpYXQiOjE2MzgwNjk5MTcsImV4cCI6MTYzODA3MzUxN30.OyRBEvuQaBGjrgUwr10MXjjVE7HMs66WrGqyN4dfAcE"
    );
    const bearerToken = localStorage.getItem(LocalStorageKey.BEARER);

    return {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + bearerToken,
    };
};

const buildUrl = (urlSubLink: string): string => {
    return `${host}/${urlSubLink}`;
};
