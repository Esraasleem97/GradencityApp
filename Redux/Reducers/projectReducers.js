import {PROJECTS_LIST_REQUESTS, PROJECTS_LIST_SUCCESS , PROJECTS_LIST_FAILED} from "../Constants/projectConstants";


export const projectsListReducer = (state = {}, action) => {
    switch (action.type) {

        case PROJECTS_LIST_REQUESTS:


            return {
                projectLoading: true
            };

        case PROJECTS_LIST_SUCCESS:

            return {
                projectLoading: false,
                projects: action.payload
            }

        case PROJECTS_LIST_FAILED:

            return {
                projectLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}
