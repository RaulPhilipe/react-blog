import "./register.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
        }
    };
    return(
        <div className="register">
            <span className="registerTitle">Registrar</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input type="text" className="registerInput" placeholder="Digite seu nome" onChange={e=>setUsername(e.target.value)}/>
                <label>Email:</label>
                <input type="text" className="registerInput" placeholder="Digite seu email" onChange={e=>setEmail(e.target.value)}/>
                <label>Senha:</label>
                <input type="password" className="registerInput" placeholder="Digite sua senha" onChange={e=>setPassword(e.target.value)}/>
                <button className="registerButton" type="submit">Registrar</button>              
            </form>
            <button className="registerLoginButton">
            <Link className="link" to="/login">Login</Link>
            </button>
            {error && <span style={{color: "red", marginTop: "10px" }}>Algo deu errado!</span>}
        </div>
    )
    
}