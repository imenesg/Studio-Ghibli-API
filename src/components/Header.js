import React , {useState} from "react";

import logo from "../assets/img/logo.png"

import About from "../components/About"

function Header(){
    const[open, setOpen] = useState(null)

    function openBigCard(){
        setOpen(1)
    }

    function closeAbout(){
        setOpen(false)
    }

    return(
        <>
        <header>
            <img src={logo} alt="Studio Ghibli's logo" onClick={()=> openBigCard()}></img>
        </header>

        {open? (<About closeAbout={closeAbout}> </About>) : null }
        
        </>
    );
}

export default Header;