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
    background-color: green;
`;

export const DescriptionContainer = styled.div`
    width: 110%;
    border-radius: 4px;
    //position: relative;
    background-color: aqua;    
    padding: 1.5ch;

`;

export const ImageContainer = styled.div`
    margin: auto;
    padding-left: 10ch;
    box-sizing: border-box;
    width: 50%;
    background-color: blue;
`;