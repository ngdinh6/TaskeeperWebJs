import IStore from "store/IStore";

export const initialState: IStore = {
    registerAccount: {
        isInitialized: false,
        registerNewAccount: {
            firstName: "",
            lastName: "",
            email: "",
            dayOfBirth: 0,
            monthOfBirth: 0,
            yearOfBirth: 0,
            phoneNumber: {
                ISD_CodeId: "",
                phoneNumber: "",
            },
            gender: "",
            avatar: "",
            loginInformation: {},
        },
    },
    bearerToken: "",
};

export default initialState;
