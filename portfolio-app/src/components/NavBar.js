import React, { useState } from "react";
import "./NavBar.css";
 
import {
    NavBarContainer
    , LeftContainer
    , RightContainer
    , NavBarInnerContainer
    , NavBarExtendedContainer
    , NavBarLinkContainer
    , NavBarLink
    , Logo
    , OpenLinksButton,
    NavBarLinkExtended,
    LogoContainer
} from '../styles/NavBar.style';

import { styled } from "styled-components";
import LogoImage from "../assets/logo.png";

function NavBar() {
    /* Afficher les liens de navigation lorsque l'on clique sur le logo &#8801; (apparaissant quand l'écran est trop petit) */
    const [extendNavbar, setExtendNavbar] = useState(false)

    return (
        <NavBarContainer extendNavbar={extendNavbar}>
            <NavBarInnerContainer>  {/* Ce container est uniquement utilisé pour que la divison entre Left Container et Right Container soit verticale et non horizontale */}
                <LogoContainer><Logo src={LogoImage} alt="logo" /></LogoContainer>
                <LeftContainer>
                    <NavBarLinkContainer>
                        <NavBarLink to="/">Acceuil</NavBarLink>
                        <NavBarLink to="/Experience">Experience</NavBarLink> 
                        <NavBarLink to="/Projets">Projets</NavBarLink>
                        <NavBarLink to="/Compétences">Competénces</NavBarLink> 
                        <OpenLinksButton
                            onClick={() => {
                                setExtendNavbar((curr)=> !curr);
                            }}
                        >
                            {/* change le logo après changment d'état: par défaut "false"(&#8801;) |après clique 'true' (&#10005;) */}
                            {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
                        </OpenLinksButton>
                    </NavBarLinkContainer>
                </LeftContainer>
                <RightContainer >
                    <NavBarLink className="NavBarContact" to="/Contact">
                        <div  style={{color: "#8c80ff"}} >Contact</div>
                     </NavBarLink>
                </RightContainer>
            {/* Only if extend navbar is true, show NavBarExtendedContainer */}
            </NavBarInnerContainer>
            {extendNavbar && (
                 <NavBarExtendedContainer>
                        <NavBarLinkExtended to="/">Home</NavBarLinkExtended>
                        <NavBarLinkExtended to="/Experience">Experience</NavBarLinkExtended> 
                        <NavBarLinkExtended to="/Projets">Projets</NavBarLinkExtended>
                        <NavBarLinkExtended to="/Compétences">Competénces</NavBarLinkExtended> 
                        <NavBarLinkExtended to="/Contact">Contact</NavBarLinkExtended> 

                 </NavBarExtendedContainer>
            )}
           
        </NavBarContainer>
    )
}  
export default NavBar;
