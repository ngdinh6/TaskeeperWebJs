import { JobType } from "enums/post.enum";
export interface INewPostState {
    title: string;
    description: string;
    requirement: string;
    jobType: JobType;
    tags: string[];
    industries: string[];
    positions: string[];
    skills: string[];
    expiredDate: Date;
}

export interface IUploadImage {
    postId: string;

    //This this multer buffer file
    file: any;
}

export interface IEditPostState {
    _id: string;
    title: string;
    description: string;
    jobType: JobType;
    tags: string[];
    industries: string[];
    skills: string[];
}
