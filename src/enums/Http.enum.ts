export enum HttpStatus {
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    FOUND = 302,
    BAD_REQUEST = 400,
    NO_PERMISSION = 403,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
}

export enum AuthEndpoint {
    LOGIN = "auth/login",
    REGISTER = "users/create",
}

export enum PostsEndpoint {
    ADD_NEW_POST = "posts/addNewPost",
    UPLOAD_IMAGE = "posts/uploadImages",
    EDIT_POST = "posts/editPost",
    DELETE_POST = "posts/deletePost",
    GET_POST = "posts/getPost",
    GET_WALL = "posts/getWall",
    GET_NEWS_FEED = "posts/getNewsFeed",
}

export enum UsersEndpoint {
    GET_USER = "users/getUser",
    UPLOAD_AVATAR = "users/avatar",
}
