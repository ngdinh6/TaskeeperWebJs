import { Reducer } from "redux";
import ActionTypeKeys from "actions/ActionTypeKey";
import ActionTypes from "actions/ActionTypes";
import { IRegisterNewAccountAction } from "actions/IActions";
import { IRegisterAccountState } from "models/IUserState";
import initialState from "store/initialState";

export const registerAccountReducer: Reducer<
    IRegisterAccountState,
    ActionTypes
> = (
    state: IRegisterAccountState = initialState.registerAccount,
    action: ActionTypes
): IRegisterAccountState => {
    switch (action.type) {
        case ActionTypeKeys.REGISTER_NEW_ACCOUNT:
            return onRegisterNewAccount(state, action);
        default:
            return state;
    }
};

function onRegisterNewAccount(
    currentState: IRegisterAccountState,
    action: IRegisterNewAccountAction
): IRegisterAccountState {
    return {
        ...currentState,
        isInitialized: true,
        registerNewAccount: action.payload.registerInformation,
    } as IRegisterAccountState;
}
