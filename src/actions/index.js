import {ADD_VIDEO, CLEAR_STORE} from '../constants/';

//action that adds video to the Store
export const add_video = (input) => {
    return {
        type: ADD_VIDEO,
        videos: input 
    }
}

//action that clears the store for a new search
export const clear_store = (input) => {
    return {
        type: CLEAR_STORE,
        store: input
    }
}

