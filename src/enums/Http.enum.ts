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
    APPLY_JOB = "postsManage/apply",
    UPLOAD_IMAGE = "posts/uploadImages",
    EDIT_POST = "posts/editPost",
    DELETE_POST = "posts/deletePost",
    GET_POST = "posts/getPost",
    GET_WALL = "posts/getWall",
    GET_NEWS_FEED = "posts/getNewsFeed",
    SEARCH_JOBS = "posts/searchJobs",
    GET_RECOMMEND = "posts/getRecommendPost",
}

export enum UsersEndpoint {
    SEARCH_USERS = "users/searchUsers",
    GET_TOP_RECRUITERS = "users/getTopRecruiters",
    GET_USER = "users/getUser",
    UPLOAD_AVATAR = "users/avatar",
    FOLLOW_USER = "users/follow",
}
