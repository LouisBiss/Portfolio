import React, { useState } from "react";
import { HomeContainer,
         HeaderContainer,
         TitleContainer,
         FooterContainer,
         ButtonContainer


} from "../styles/Home.style";

function Acceuil() {
    return (
        <HomeContainer>
             <HeaderContainer>
                <div>Header</div>
            </HeaderContainer>

            <TitleContainer>
                <h1>Title</h1>
            </TitleContainer>

            <FooterContainer>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</div>
            </FooterContainer>

            <ButtonContainer>
                <button>Button</button   >
            </ButtonContainer>
        </HomeContainer>
    );
}
export default Acceuil;
