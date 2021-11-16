export interface IRegisterAccountState {
    isInitialized: boolean;
    error?: any;
    registerNewAccount: IRegisterNewAccountState;
}

export interface IRegisterNewAccountState {
    firstName: string;
    lastName: string;
    email: string;
    dayOfBirth: number;
    monthOfBirth: number;
    yearOfBirth: number;
    phoneNumber: IUserPhoneNumberState;
    gender: string;
    avatar: string;
    loginInformation: ILoginInformationState;
}

interface IUserPhoneNumberState {
    ISD_CodeId: string;
    phoneNumber: string;
}
export interface ILoginState {
    loginInformation: ILoginInformationState;
    loginString: string;
}
interface ILoginInformationState {
    password?: string;
    facebookToken?: string;
    googleToken?: string;
}
