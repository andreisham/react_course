import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { signUp, signIn } from "../../services/firebase";

export const Home = ({ isSignUp }) => {
    const [error, setError] = useState('')
    const handleSubmit = async ({ login, pass }) => {
        try {
            if (isSignUp) {
                await signUp(login, pass);
            } else {
                await signIn(login, pass);
            }
        } catch (e) {
            setError(e.message); // сделать чтоб при переходе ошибка сбрасывалась юзефект
        }
    }
    return (
    <>
        <h1>Тут могла быть ваша реклама, но пока тут только домашняя страница</h1> 
        <LoginForm onSubmit={handleSubmit} />
        {error && <h4>{error}</h4>}
        <Link to={isSignUp ? "/" : "/signup"}>
            {isSignUp ? "to login" : "to signup"}
        </Link>
    </>
    )};