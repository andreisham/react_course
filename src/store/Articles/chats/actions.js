import { API_URL } from "../../../utils/constants";

export const GET_ARTICLES_REQUEST = 'ARTICLES::GET_ARTICLES_REQUEST';
export const GET_ARTICLES_SUCCESS = 'ARTICLES::GET_ARTICLES_SUCCESS';
export const GET_ARTICLES_FAILED = 'ARTICLES::GET_ARTICLES_FAILED';

export const getArticlesRequest = () => ({
    type: GET_ARTICLES_REQUEST,
});

export const getArticlesSuccess = (data) => ({
    type: GET_ARTICLES_SUCCESS,
    payload: data,
});

export const getArticlesFail = (error) => ({
    type: GET_ARTICLES_FAILED,
    payload: error,
});

export const getArticles = () => async (dispatch) => {
    try {
        dispatch(getArticlesRequest())
        const response = await fetch(API_URL)
        if (!response.ok) {
            throw new Error(`Response failed with ${response.status}`)
        }
        console.log('response', response);

        const result = await response.json();
        dispatch(getArticlesSuccess(result))
    } catch (error) {
        dispatch(getArticlesFail(error.message))
    } 
}