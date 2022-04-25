import { async } from "@firebase/util";
import { getArticles, getArticlesRequest, getArticlesSuccess, GET_ARTICLES_REQUEST } from "../actions";

describe('getArticlesReq', () => {
    it('returns obj with pretended type', () => {
        const expected = {
            type: GET_ARTICLES_REQUEST,
        };

        const received = getArticlesRequest();

        expect(received).toEqual(expected);
    })
})

describe('getArticles', () => { 
    it('dispatches getArticlesReq', () => {
        const mockDispathc = jest.fn();
        fetch.mockResponse(JSON.stringify(''));
        getArticles()(mockDispathc);

        expect(mockDispathc).toHaveBeenCalledWith(getArticlesRequest());
    });

    it('dispatch getArticleSuccess with fetch result', async () => {
        const test = 'some'
        fetch.mockResponse(JSON.stringify(test));
        const mockDispathc = jest.fn();

        await getArticles()(mockDispathc)
        expect(mockDispathc).toHaveBeenLastCalledWith(getArticlesSuccess(test));
    })
 })