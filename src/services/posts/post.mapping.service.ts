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

export const mappingPostApplicants = (
    postsData: any,
    candidatesData?: any
): any => {
    const uniqApplicants = _.chain(postsData)
        .map((postData) => {
            return _.map(postData.candidates, (candidate) => {
                candidate.applicantsId = `${candidate.candidate._id}.${postData._id}`;
                candidate.title = postData.title;
                candidate.postId = postData._id;

                return candidate;
            });
        })
        .flatMap()
        .uniqBy("applicantsId")
        .value();

    return _.map(uniqApplicants, (applicant) => {
        const post = _.find(
            postsData,
            (postData) => postData._id === applicant.postId
        );
        const candidate = _.find(
            candidatesData,
            (candidate) => applicant.candidate._id === candidate._id
        );

        applicant.candidateFirstName = candidate.firstName;
        applicant.candidateLastName = candidate.lastName;
        applicant.yearOfBirth = candidate.yearOfBirth;
        applicant.email = candidate.email;
        applicant.phoneNumber = candidate.phoneNumber;
        applicant.gender = candidate.gender;
        applicant.avatar = candidate.avatar;

        return applicant;
    });
};
