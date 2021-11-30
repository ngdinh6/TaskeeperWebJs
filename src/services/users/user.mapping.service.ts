import _ from "lodash";

export const mappingUser = (userData: any) => {
    return {
        languageCode: userData.languageCode,
        avatar: userData.avatar,
        gender: userData.gender,
        dayOfBirth: userData.dayOfBirth,
        monthOfBirth: userData.monthOfBirth,
        yearOfBirth: userData.yearOfBirth,
        phoneNumber: `${userData.phoneNumber.ISD_CodeId || ""} ${
            userData.phoneNumber.phoneNumber || ""
        }`,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        numberOfFollower: _.size(userData.follower),
        numberOfFollowing: _.size(userData.following),
        tags: userData.tags,
    };
};
