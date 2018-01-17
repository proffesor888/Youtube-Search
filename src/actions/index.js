import {ADD_VIDEO, CLEAR_STORE} from '../constants/';

export const add_video = (input) => {
    return {
        type: ADD_VIDEO,
        videos: input 
    }
}

export const clear_store = (input) => {
    return {
        type: CLEAR_STORE,
        store: input
    }
}

