import "./login.css"
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching} = useContext(Context)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({type:"LOGIN_START"});
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({type:"LOGIN_SUCESS", payload: res.data });
        } catch (err) {
            dispatch({type:"LOGIN_FAILURE"});     
        }
    }

    return (
        <div className="login">
            <span className="loginTitle">login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Nome de usuário:</label>
                <input type="text" className="loginInput" placeholder="Digite seu nome" ref={userRef} />
                <label>Senha:</label>
                <input type="password" className="loginInput" placeholder="Digite sua senha"  ref={passwordRef} />
                <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">Registrar</Link>
            </button>
        </div>
    )

}