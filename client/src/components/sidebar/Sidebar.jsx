import "./sidebar.css"
import { useState } from "react"
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">SOBRE NÓS</span>
                <img src="/about.jpg" alt="" />
                <p>Este site é um projeto acadêmico do curso de ánalise e desenvolvimento de sistemas, foi desenvolvido utilizando HTML, CSS, React, JS e como banco de dados foi utilizado o MongoDB Cloud, as imagens utilizadas no Blog foram todas retiradas do PixaBay e são de licensa gratuita tanto para uso comercial quanto para uso não comercial, o favicon da página foi criado utilizando o site IconArchive e os icones do FontAwesome.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CONTATO</span>
                <p>Você pode entrar em contato para fazer perguntas ou por outros motivos através do email ou número de telefone disponibilizado abaixo.</p>
                <p>Endereço: Patos de Minas, MG. <br/>
                Telefone: 9999-9999 <br/>
                Email: techsync@email.com</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">SOCIAL</span>
                <div className="sidebarSocial">
                    <a href="https://facebook.com/" target="_blank"><i className="sidebarIcon fa-brands fa-facebook-square"></i></a>
                    <a href="https://twitter.com/" target="_blank"><i className="sidebarIcon fa-brands fa-twitter-square"></i></a>
                    <a href="https://youtube.com/" target="_blank"><i className="sidebarIcon fa-brands fa-youtube"></i></a>
                    <a href="https://instagram.com/" target="_blank"><i className="sidebarIcon fa-brands fa-instagram-square"></i></a>
                </div>
            </div>
        </div>
    )
}