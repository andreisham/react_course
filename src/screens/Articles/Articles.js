import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../store/Articles/actions";
import { selectArticles, selectArticlesError, selectArticlesStatus } from "../../store/Articles/selectors";
import { FETCH_STATUSES } from "../../utils/constants"

export const Articles = () =>  {
    const dispatch = useDispatch()
    const articles = useSelector(selectArticles)
    const error = useSelector(selectArticlesError)
    const status = useSelector(selectArticlesStatus)

    const sendRequest = () => {
        dispatch(getArticles())
    }
    
    useEffect(() => {
      sendRequest();
    }, [])
    
    return (
    <>
        <h3>Random fact about doge</h3>
        <button onClick={sendRequest}>Get fact</button>
        {status === FETCH_STATUSES.REQUEST && <CircularProgress />}
        <p>{articles.facts}</p>
        {error && <h4>{error}</h4>}
    </>
    )
}
