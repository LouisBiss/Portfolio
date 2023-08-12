import React from "react";
import LogoImage from "../../assets/logo.png";
import { ImageContainer,
        Wrapper,
        TextContainer
          } from "../../styles/blocks/Block_type1.style";
import "../../styles/blocks/Block_type1.style.css";
function Block_type2({
                      Header,
                      Title,
                      DescriptionType2,
                      Footer,
                      Link
                    }) {
    return (
        <div>
            <Wrapper>
                <ImageContainer>
                    <img src={LogoImage} alt="logo"  height="100vh" />
                </ImageContainer>
                <TextContainer>
                    <div>{Header}</div>
                    <h1>{Title}</h1>
                    <div className="DescriptionType2" >{DescriptionType2}</div> 
                    <div>{Footer}</div>
                    <div>{Link}</div>
                </TextContainer>
            </Wrapper>
        </div>
    
    );
}
export default Block_type2;