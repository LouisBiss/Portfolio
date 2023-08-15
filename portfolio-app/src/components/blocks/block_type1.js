import React from "react";
import LogoImage from "../../assets/logo.png";
import { ImageContainer,
        Wrapper,
        TextContainer,
        DescriptionContainer
        } 
        from "../../styles/blocks/Block_type1.style";

import "../../styles/blocks/Block_type1.style.css";
function Block_type1({
                      Header,
                      Title,
                      Description,
                      Footer,
                      Link
                    }) {
    return (
        <div>
            <Wrapper>
                <TextContainer>
                    <div>{Header}</div>
                    <h1>{Title}</h1>
                    <DescriptionContainer>{Description}</DescriptionContainer>
                    <div>{Footer}</div>
                    <div>{Link}</div>
                </TextContainer>
                <ImageContainer>
                    <img src={LogoImage} alt="logo"  height="100%" />
                </ImageContainer>
            </Wrapper>
        </div>
    
    );
}
export default Block_type1;