import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
    background-color: #e6f5ff;
    font-family: Roboto;
    // occupe tout l'espace de l'écran
    height: 100vh; 
    // centre verticalement les divs
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    font-family: Courier New;
    font-weight: bold;
    box-sizing: border-box;
    padding-left: 5ch;


`;

export const TitleContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding-left: 5ch;

`;

export const FooterContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding-left: 5ch;


`;

export const ButtonContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding-left: 5ch;


`;