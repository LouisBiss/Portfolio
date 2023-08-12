import styled from "styled-components";
import { Link } from "react-router-dom";


export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 5ch;

`;

export const TextContainer = styled.div`
    width: 50%;
    background-color: green;
    z-index: 10;

`;

export const ImageContainer = styled.div`
    margin: auto;
    padding-left: 10ch;
    box-sizing: border-box;
    width: 50%;
    background-color: blue;
`;