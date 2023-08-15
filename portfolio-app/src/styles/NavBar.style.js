import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.nav`
    width: 100%;
    /* Si le state de extendNavbar est true, l'afficher sur toute la longueur de l'écran, sinon affichage normal */
    height: ${props => props.extendNavbar ? "100vh" : "80px"};
    //Texte Style
    background-color: #03001C;
    font-weight: bold;
    font-family: Roboto;

    display: flex;
    flex-direction: column;
    position: fixed; // la barre de navigation est fixe. 

`;
export const LogoContainer = styled.div`
    display: flex;
    //background-color: red;
`;
export const Logo = styled.img`
    margin: 10px;
    max-width: 100px;
    height: auto;
    align-items: center;  
`;

export const LeftContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 2%;
/*     background-color: red;*/
`;

export const RightContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
    align-items: center;
   /*  background-color: blue; */
`;
export const NavBarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;


export const NavBarLinkContainer = styled.div`
    display: flex;


`;

export const NavBarLink = styled(Link)`
    color: white;
    font-size: x-large;
    text-decoration: none;
    margin: 10px;
    /* Dès que la taille de l'écran est supérieur à 700px, les liens ne sont plus affichés  */
    @media (max-width: 700px) {
        display: none;
    }
    //change color when hoover
    &:hover {
        color: #8c80ff;
    }
`;



export const OpenLinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;
    /* Dès que la taille de l'écran est supérieur à 700px, le logo du menu à 3 bars n'est pas affiché  */
    @media (min-width: 700px) {
        display: none;
    }
`;
export const NavBarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: none;
    }
`;

export const NavBarLinkExtended = styled(Link)`
    color: white;
    font-size: x-large;
    text-decoration: none;
    margin: 10px;
`;	