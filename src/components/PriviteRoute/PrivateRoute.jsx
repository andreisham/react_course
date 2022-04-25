import { Outlet } from "react-router-dom";
import { Error401 } from "../../screens/Errors/Error401";

export const PrivateRoute = ({ authed }) => (
    authed ? <Outlet /> : <Error401 />
)