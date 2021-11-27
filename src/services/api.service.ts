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

    return content;
};

export const sendGetRequest = async (urlSubLink: string) => {
    const headers = buildHeaders();
    const responseData = await fetch(buildUrl(urlSubLink), {
        method: HttpMethod.GET,
        headers,
    });
    const content = await responseData.json();

    return content;
};

export const sendDeleteRequest = async (urlSubLink: string, body: Object) => {
    const headers = buildHeaders();
    const responseData = await fetch(buildUrl(urlSubLink), {
        method: HttpMethod.DELETE,
        headers,
        body: JSON.stringify(body),
    });
    const content = await responseData.json();

    return content;
};

const buildHeaders = () => {
    const bearerToken = store.getState().bearerToken;

    return {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + bearerToken,
    };
};

const buildUrl = (urlSubLink: string): string => {
    return `${host}/${urlSubLink}`;
};
