import { mappingUser } from "services/users/user.mapping.service";
import { HttpStatus, UsersEndpoint } from "enums/Http.enum";
import { sendGetRequest, sendPostRequest } from "services/api.service";
import _ from "lodash";

export const getUser = async (userId: string): Promise<Object | Error> => {
    const getUserData = await sendGetRequest(buildGetUserQueryUrl(userId));
    if (getUserData.status === HttpStatus.FOUND) {
        return mappingUser(getUserData.data);
    }

    return new Error(getUserData?.message);
};

export const getTopRecruiters = async (): Promise<Object[] | any> => {
    const getUserData = await sendGetRequest(UsersEndpoint.GET_TOP_RECRUITERS);

    if (getUserData.status === HttpStatus.OK) {
        return _.map(getUserData.data, (recruiter) => mappingUser(recruiter));
    }

    return new Error(getUserData?.message);
};

export const searchUsers = async (
    searchString: string,
    offset: number,
    limit: number
): Promise<Object[] | any> => {
    const searchParams = {
        paging: {
            limit,
            offset,
        },
        filter: {
            or: [
                {
                    lastName: {
                        iLike: searchString,
                    },
                },
                {
                    firstName: {
                        iLike: searchString,
                    },
                },
            ],
        },
        sorting: [
            {
                direction: "ASC",
                field: "createdAt",
            },
        ],
    };

    const searchUsersData = await sendPostRequest(
        UsersEndpoint.SEARCH_USERS,
        searchParams
    );

    if (searchUsersData.status === HttpStatus.OK) {
        return _.map(searchUsersData.data, (user) => mappingUser(user));
    }

    throw new Error(searchUsersData?.message);
};

export const getUsersByIds = async (userIds: string[]) => {
    const searchParams = {
        paging: {
            limit: 1000,
            offset: 0,
        },
        filter: {
            _id: {
                in: userIds,
            },
        },
        sorting: [],
    };

    const searchUsersData = await sendPostRequest(
        UsersEndpoint.SEARCH_USERS,
        searchParams
    );

    if (searchUsersData.status === HttpStatus.OK) {
        return _.map(searchUsersData.data, (user) => mappingUser(user));
    }

    throw new Error(searchUsersData?.message);
};

export const uploadAvatar = async (file: any): Promise<Object | Error> => {
    const uploadAvatarResult = await sendPostRequest(
        UsersEndpoint.UPLOAD_AVATAR,
        { file }
    );

    if (uploadAvatarResult.status === HttpStatus.OK) {
        return mappingUser(uploadAvatarResult.data);
    }

    return new Error(uploadAvatarResult?.message);
};

export const followUser = async (userId: string): Promise<Object | Error> => {
    const uploadAvatarResult = await sendPostRequest(
        UsersEndpoint.FOLLOW_USER,
        { userId }
    );

    if (uploadAvatarResult.status === HttpStatus.OK) {
        return true;
    }

    return new Error(uploadAvatarResult?.message);
};

const buildGetUserQueryUrl = (userId: string): string => {
    return `${UsersEndpoint.GET_USER}?userId=${userId}`;
};
