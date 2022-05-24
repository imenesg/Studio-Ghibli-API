import React from "react";

import logo from "../assets/img/logo.png"

function Header(){
    return(
        <header>
            <img src={logo} alt="Studio Ghibli's logo"></img>
        </header>
    );
}

export default Header;