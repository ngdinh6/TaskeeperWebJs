import { IRegisterAccountState } from "models/IUserState";

export default interface IStore {
    registerAccount: IRegisterAccountState;
    bearerToken?: string;
}
