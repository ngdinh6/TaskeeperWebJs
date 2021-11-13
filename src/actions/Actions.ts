import keys from "actions/ActionTypeKey";
import * as IActions from "actions/IActions";
import { IRegisterNewAccountState } from "models/IUserState";
//#region User Actions

export function registerNewAccount(
    registerInformation: IRegisterNewAccountState
): IActions.IRegisterNewAccountAction {
    return {
        type: keys.REGISTER_NEW_ACCOUNT,
        payload: {
            registerInformation,
        },
    };
}

//#endregion
