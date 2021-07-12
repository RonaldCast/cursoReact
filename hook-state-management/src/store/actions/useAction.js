import { userActions } from './userActions';
import { counterActions } from './counterActions'

export const useAction = (state, dispatch) => {

    return {
        userActions: userActions({ state, dispatch }),
        counterActions: counterActions({ state, dispatch })
    }
}

