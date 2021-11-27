import { INewPostState, IEditPostState } from "models/IPostState";
import {
    sendGetRequest,
    sendPostRequest,
    sendPutRequest,
    sendDeleteRequest,
} from "services/api.service";
import { PostsEndpoint, HttpStatus } from "enums/Http.enum";

export const getPost = async (postId: string): Promise<Object | Error> => {
    const getPostResult = await sendGetRequest(buildGetPostQueryUrl(postId));

    if (getPostResult.status === HttpStatus.FOUND) {
        return getPostResult.data;
    }

    throw new Error(getPostResult.message);
};

export const createPost = async (
    newPost: INewPostState | Object
): Promise<Object | Error> => {
    const newPostResult = await sendPostRequest(
        PostsEndpoint.ADD_NEW_POST,
        newPost
    );

    if (newPostResult.status === HttpStatus.CREATED) {
        return newPostResult.data;
    }

    throw new Error(newPostResult.message);
};

export const editPost = async (
    editPost: IEditPostState
): Promise<Object | Error> => {
    const editPostResult = await sendPutRequest(
        PostsEndpoint.EDIT_POST,
        editPost
    );

    if (editPostResult.status === HttpStatus.OK) {
        return editPostResult.data;
    }

    throw new Error(editPostResult.message);
};

export const deletePost = async (
    deletedPostId: string
): Promise<Object | Error> => {
    const deletedPostResult = await sendDeleteRequest(PostsEndpoint.EDIT_POST, {
        _id: deletedPostId,
    });

    if (deletedPostResult.status === HttpStatus.OK) {
        return deletedPostResult.data;
    }

    throw new Error(deletedPostResult.message);
};

const buildGetPostQueryUrl = (postId: string): string => {
    return `${PostsEndpoint.GET_POST}?postId=${postId}`;
};
