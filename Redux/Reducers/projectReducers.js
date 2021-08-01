import {
    PROJECTS_LIST_REQUESTS, PROJECTS_LIST_SUCCESS, PROJECTS_LIST_FAILED,
    PROJECT_CREATE_REQUESTS,
    PROJECT_CREATE_SUCCESS,
    PROJECT_CREATE_FAILED, PROJECT_CREATE_REFRESH
} from "../Constants/projectConstants";


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
                error: action.payCREATE
            }
        default:
            return state
    }
}


export const projectCreateReducer = (state = {}, action) => {
    switch (action.type) {

        case PROJECT_CREATE_REQUESTS:


            return {
                projectLoading: true
            };

        case PROJECT_CREATE_SUCCESS:

            return {
                projectLoading: false,
                project: action.payload
            }

        case PROJECT_CREATE_FAILED:

            return {
                projectLoading: false,
                error: action.payload
            }

        case PROJECT_CREATE_REFRESH:
            return {
                project: undefined,
                error: undefined
            }
        default:
            return state
    }
}