import "./topbar.css";
import "./mobile-navbar.js"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";



export default function TopBar() {
    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleLogout = () => {
        dispatch({type:"LOGOUT"});
    }


    return (
        <div className="top">
                <div className="mobile-menu">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                
                <div className="topLeft">
                    <a href="https://pt-br.facebook.com/" target="_blank"><i className="topIcon fa-brands fa-facebook-square"></i></a>
                    <a href="https://twitter.com/" target="_blank"><i className="topIcon fa-brands fa-twitter-square"></i></a>
                    <a href="https://www.youtube.com/" target="_blank"><i className="topIcon fa-brands fa-youtube"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"><i className="topIcon fa-brands fa-instagram-square"></i></a>
                </div>
                <div className="topCenter">
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/">HOME</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/about">SOBRE</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/write">ESCREVA</Link>
                        </li>
                        <li className="topListItem" onClick={handleLogout}>
                            {user && "LOGOUT"}
                        </li>
                    </ul>
                </div>
                <div className="topRight">
                    {
                        user ? (
                            <Link to="/settings">
                                <img className="topImg" src={PF + user.profilePicture} alt="" />
                            </Link>
                        ) : (
                                <ul className="topLoginList">
                                    <li className="topListItem">
                                        <Link className="link" to="/login">LOGIN</Link>
                                    </li>
                                    <li className="topListItem">
                                        <Link className="link" to="/register">REGISTRAR</Link>
                                    </li>
                                </ul>
                            )
                    }
                </div>
            </div>
    )
}