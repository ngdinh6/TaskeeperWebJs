import { Action } from "redux";
import keys from "actions/ActionTypeKey";
import { IRegisterNewAccountState } from "models/IUserState";
//#region UserActions
export interface IRegisterNewAccountAction extends Action {
    readonly type: keys.REGISTER_NEW_ACCOUNT;
    payload: {
        registerInformation: IRegisterNewAccountState;
    };
}
