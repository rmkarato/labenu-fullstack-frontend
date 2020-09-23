import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import Logo from "../../assets/images/logo-soundlabe.png"

const PageHeader = () => {
    return (
        <header class="page-header">
            <Link to="/">
                <img class="img" src={Logo} alt="Logo"/>
            </Link>

            <div class="top-bar-container">

                <Link to="/">
                    Home
                </Link>

                <Link to="/user/signup">
                    Cadastrar
                </Link>

                <Link to="/user/login">
                    Login
                </Link>

                <Link to="/soundlabe/about">
                    Sobre
                </Link>

                <Link to="/soundlabe/contact">
                    Contato
                </Link>
                
            </div>
        </header>
    )
}

export default PageHeader;