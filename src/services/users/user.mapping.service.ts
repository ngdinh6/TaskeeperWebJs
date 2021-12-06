import { femaleDefaultAvatar, maleDefaultAvatar } from "enums/user.enum";
import _ from "lodash";

export const mappingUser = (userData: any) => {
    return {
        _id: userData._id,
        languageCode: userData.languageCode,
        avatar:
            userData.avatar || userData.gender === "male"
                ? maleDefaultAvatar
                : femaleDefaultAvatar,
        gender: userData.gender,
        description: userData.description,
        location: userData.location,
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
        tags: _.join(userData.tags, ", "),
        numberOfJobs: userData.numberOfJobs || 0,
    };
};
