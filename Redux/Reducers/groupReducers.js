import {GROUPS_LIST_FAILED, GROUPS_LIST_REQUESTS, GROUPS_LIST_SUCCESS} from "../Constants/groupConstants";


export const groupsListReducer = (state = {}, action) => {
    switch (action.type) {

        case GROUPS_LIST_REQUESTS:

            return {
                groupLoading: true
            }

        case GROUPS_LIST_SUCCESS:

            return {
                groupLoading: false,
                groups: action.payload
            }

        case GROUPS_LIST_FAILED:

            return {
                groupLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}
