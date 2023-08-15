import styled from "styled-components";
import { Link } from "react-router-dom";


export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 5ch;
    font-family: Roboto;



`;

export const TextContainer = styled.div`
    width: 50%;
    //background-color: green;
    z-index: 1;  /* to display the text cointainer in front of the image container */
`;

export const DescriptionContainer = styled.div`
    width: 110%;
    border-radius: 8px; 
    //position: relative;
    background-color: #03001C;
    //background-color: #7566ff; 
    border-style: solid;
    border-color: white;  
    box-shadow: 1px 1px 12px black;
    padding: 1.5ch;

`;

export const ImageContainer = styled.div`
    height: 20vh;
    margin: auto;
    padding-left: 10ch;
    box-sizing: border-box;
    width: 50%;
    background-color: blue;
    z-index: 0;
`;