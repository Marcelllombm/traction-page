import { useState } from "react";
import { Container, ResponsiveNav } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

export function Nav() {
    const [navbarState, setNavbarState] = useState(false);

    return (
        <Container>
            <div className="toggle ">
                {navbarState ? (
                    <VscChromeClose size={25} onClick={()=>{ setNavbarState(false)}} />
                )
                :(
                    <GiHamburgerMenu size={25} onClick={()=>{ setNavbarState(true)}} />
                )}
            </div>
            <ul className="mainNav">
                <a href="#home"><li> MANUTENÇÃO PREDITIVA </li> </a>
                <a href="#home"><li> MAIS SEGURO </li></a>
                <a href="#home"><li>DEPOIMENTOS </li></a>
                <a href="#home"><li> POR QUE NÓS </li></a>
                <a href="#home"><li> CONTATO </li></a>
            </ul>

            <ResponsiveNav navbarState={navbarState}>
                <ul className="secondaryNav">
                    <a href="#home" onClick={()=>{setNavbarState(false)}}><li> MANUTENÇÃO PREDITIVA </li> </a>
                    <a href="#home" onClick={()=>{setNavbarState(false)}}><li> MAIS SEGURO </li></a>
                    <a href="#home" onClick={()=>{setNavbarState(false)}}><li>DEPOIMENTOS </li></a>
                    <a href="#home" onClick={()=>{setNavbarState(false)}}><li> POR QUE NÓS </li></a>
                    <a href="#home" onClick={()=>{setNavbarState(false)}}><li> CONTATO </li></a>
                </ul>
            </ResponsiveNav>
        </Container>
    )
}
