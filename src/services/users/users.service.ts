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
