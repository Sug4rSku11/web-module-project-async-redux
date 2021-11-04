import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

function randomId(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
export const getMemes = () => {
    return dispatch => {
        dispatch(fetchStart());
       
        axios.get('https://api.imgflip.com/get_memes')
        .then(res => {
            const memes = res.data.memes[randomId(0,10)]
            dispatch(fetchSuccess(memes));
        }).catch(err => {
            dispatch(fetchFail("Sorry! Couldn't load the Meme!"));
        })
    }
}
export const fetchStart = () => {
    return ({ type: FETCH_START });
}
export const fetchSuccess = () => {
    return ({ type: FETCH_SUCCESS, payload: memes });
}
export const fetchFail = () => {
    return ({ type: FETCH_FAIL, payload: error });
}