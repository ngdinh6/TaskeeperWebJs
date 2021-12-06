import { getJwtUserData } from "services/authentication/authentication.service";
import { JobType } from "enums/post.enum";
import { INewPostState, IEditPostState, IUploadImage } from "models/IPostState";
import {
    sendGetRequest,
    sendPostRequest,
    sendPutRequest,
    sendDeleteRequest,
} from "services/api.service";
import { PostsEndpoint, HttpStatus } from "enums/Http.enum";
import {
    mappingPost,
    mappingPostApplicants,
} from "services/posts/post.mapping.service";
import _ from "lodash";
import { getUsersByIds } from "services/users/users.service";

export const getPost = async (postId: string): Promise<Object | Error> => {
    const getPostResult = await sendGetRequest(buildGetPostQueryUrl(postId));

    if (getPostResult.status === HttpStatus.FOUND) {
        return mappingPost(getPostResult.data);
    }

    return new Error(getPostResult?.message);
};

export const getApplicants = async () => {
    const userData: any = getJwtUserData();

    const getMyOwnData = await sendPostRequest(PostsEndpoint.GET_WALL, {
        userId: _.get(userData, "_id"),
        limit: 100,
        offset: 0,
    });

    if (getMyOwnData.status === HttpStatus.FOUND) {
        const getApplicantIds = _.chain(getMyOwnData.data.wallPosts)
            .map((wallPost) => {
                return _.map(wallPost.candidates, (candidate) =>
                    _.get(candidate, "candidate._id")
                );
            })
            .flatMap()
            .uniq()
            .value();
        const usersData = await getUsersByIds(getApplicantIds);

        return mappingPostApplicants(getMyOwnData.data.wallPosts, usersData);
    }

    throw new Error(getMyOwnData?.message);
};

export const applyJob = async (
    postId: string,
    summaryMessage: string
): Promise<Object | Error> => {
    const applyPostResult = await sendPostRequest(PostsEndpoint.APPLY_JOB, {
        postId,
        summaryMessage,
    });

    if (applyPostResult.status === HttpStatus.ACCEPTED) {
        return mappingPost(applyPostResult.data);
    }

    throw new Error(applyPostResult?.message);
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

export const uploadImages = async (
    uploadImage: IUploadImage | Object
): Promise<Object | Error> => {
    const uploadImageResult = await sendPostRequest(
        PostsEndpoint.UPLOAD_IMAGE,
        uploadImage
    );

    if (uploadImageResult.status === HttpStatus.OK) {
        return uploadImageResult.data;
    }

    return new Error(uploadImageResult.message);
};

export const getUserWall = async (userId: string) => {
    const getUserWallResult = await sendPostRequest(PostsEndpoint.GET_WALL, {
        userId,
        limit: 100,
        offset: 0,
    });

    if (getUserWallResult.status === HttpStatus.FOUND) {
        return _.chain(getUserWallResult.data.wallPosts)
            .map((post) => {
                const ownerData = _.find(
                    getUserWallResult.data.owners,
                    (owner) => owner._id === _.head(post.owner)
                );

                return mappingPost(post, ownerData);
            })
            .orderBy("createdAt", "asc")
            .value();
    }

    return new Error(getUserWallResult?.message);
};

export const getUserNewsFeed = async () => {
    const getNewsFeedResult = await sendPostRequest(
        PostsEndpoint.GET_NEWS_FEED,
        {
            limit: 100,
            offset: 0,
        }
    );

    if (getNewsFeedResult.status === HttpStatus.FOUND) {
        return _.chain(getNewsFeedResult.data.newsFeeds)
            .map((post) => {
                const ownerData = _.find(
                    getNewsFeedResult.data.owners,
                    (owner) => owner._id === _.head(post.owner)
                );

                return mappingPost(post, ownerData);
            })
            .orderBy("createdAt", "asc")
            .value();
    }

    throw new Error(getNewsFeedResult?.message);
};

export const editPost = async (
    editPost: IEditPostState | Object
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

    return new Error(deletedPostResult.message);
};

export const searchJobs = async (
    searchString: string,
    offset: number,
    limit: number,
    jobType: string,
    location: string
): Promise<Object[] | any> => {
    const searchParams = {
        paging: {
            limit,
            offset,
        },
        filter: {
            location: {
                iLike: location,
            },
            or: [
                {
                    title: {
                        iLike: searchString,
                    },
                },
                {
                    description: {
                        iLike: searchString,
                    },
                },
            ],
        },
        sorting: [
            {
                direction: "DESC",
                field: "createdAt",
            },
        ],
    };

    if (jobType) {
        searchParams.filter = _.assign(searchParams.filter, {
            jobType: {
                is: jobType,
            },
        });
    }

    const searchJobsData = await sendPostRequest(
        PostsEndpoint.SEARCH_JOBS,
        searchParams
    );

    if (searchJobsData.status === HttpStatus.FOUND) {
        return _.map(searchJobsData.data, (post) => mappingPost(post));
    }

    throw new Error(searchJobsData?.message);
};

const buildGetPostQueryUrl = (postId: string): string => {
    return `${PostsEndpoint.GET_POST}?postId=${postId}`;
};
