import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../store/Articles/chats/actions";
import { selectArticles, selectArticlesError, selectArticlesStatus } from "../../store/Articles/chats/selectors";
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
        <h3>This is just a joke, but it's still extremely dumb :)</h3>
        <button onClick={sendRequest}>Get Yo mamma joke</button>
        {status === FETCH_STATUSES.REQUEST && <CircularProgress />}
        <p>{articles.joke}</p>
        {error && <h4>{error}</h4>}

    </>
    )
}
