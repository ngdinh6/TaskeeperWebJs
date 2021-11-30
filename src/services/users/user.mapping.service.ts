import _ from "lodash";

export const mappingUser = (userData: any) => {
    return {
        _id: userData._id,
        languageCode: userData.languageCode,
        avatar:
            userData.avatar ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        gender: userData.gender,
        dayOfBirth: userData.dayOfBirth,
        monthOfBirth: userData.monthOfBirth,
        yearOfBirth: userData.yearOfBirth,
        phoneNumber: `${userData.phoneNumber?.ISD_CodeId || ""} ${
            userData.phoneNumber?.phoneNumber || ""
        }`,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        numberOfFollower: _.size(userData.follower),
        numberOfFollowing: _.size(userData.following),
        tags: userData.tags,
        numberOfJobs: userData.numberOfJobs || 0,
    };
};
