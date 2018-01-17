import {ADD_VIDEO, CLEAR_STORE} from '../constants/';

export const VideoMas = (state = [], action) => {
    switch (action.type) {
        case (ADD_VIDEO):
            return (
                [...state, action.videos]
            )
            break;
        case (CLEAR_STORE):
            return (
                action.store
            )
        default:
            return state;
    }
}