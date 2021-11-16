export enum HttpStatus {
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    BAD_REQUEST = 400,
    NO_PERMISSION = 403,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
}

export enum AuthEndpoint {
    LOGIN = "auth/login",
    REGISTER = "users/create",
}
