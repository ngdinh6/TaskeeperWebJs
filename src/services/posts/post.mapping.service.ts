import _ from "lodash";

export const mappingPost = (postData: any, ownerData?: any): any => {
    return {
        _id: postData._id,
        title: postData.title,
        description: postData.description,
        createdAt: postData.createdAt
            ? new Date(postData.createdAt).toDateString()
            : "",
        updatedAt: postData.updatedAt
            ? new Date(postData.updatedAt).toDateString()
            : "",
        jobType: postData.jobType,
        impressions: postData.impressions,
        expiredDate: postData.expiredDate
            ? new Date(postData.expiredDate).toDateString()
            : "",
        isClosed: postData.isClosed,
        benefits: postData.benefits,
        requirement: postData.requirement,
        responsibilities: postData.responsibilities,
        experience: postData.experience,
        industries: postData.industries,
        skills: postData.skills,
        candidates: postData.candidates,
        tags: postData.tags,
        salaryType: postData.salaryType,
        minSalary: postData.minSalary,
        maxSalary: postData.maxSalary,
        positions: postData.positions,
        location: postData.location,
        image: _.head(postData.images),
        owner: postData.owner,
        ownerFirstName: ownerData?.firstName || "",
        ownerLastName: ownerData?.lastName || "",
        ownerAvatar: ownerData?.avatar || "",
    };
};
