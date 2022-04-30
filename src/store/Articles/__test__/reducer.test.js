import { FETCH_STATUSES } from "../../utils/constants";
import { getArticlesRequest } from "../actions"
import { articlesReducer } from "../reducer";

describe('articles_reducer', () => {
    it('is error null when case is get_articles_request', () => {
        const result = articlesReducer(
        {
            data: [],
            status: FETCH_STATUSES.IDLE,
            error: 'something',
        },
        getArticlesRequest()
    )

    expect(result.error).toBeNull();
    })
})