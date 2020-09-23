import React from "react";
import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import { MainContainer, Title, Subtitle, ButtonBox, ButtonRegister, Footer, Name } from "./styled";

function Landing() {
    let history = useHistory();
    
    const goToSignupPage = () => {
        history.push("/user/signup");
    }

    const goToLoginPage = () => {
        history.push("/user/login");
    }

    return (
        <div>
            <PageHeader title="Header Page" />

            <MainContainer>

                <Title>Conecte-se à SoundLabe</Title>
                <Subtitle>Descubra, faça streaming e compartilhe um mix em constante expansão de músicas de artistas estabelecidos e emergentes de todo o mundo.</Subtitle>
                <ButtonBox>
                    <ButtonRegister onClick={goToSignupPage}>Cadastrar-se</ButtonRegister>
                    <ButtonRegister onClick={goToLoginPage}>Fazer Login</ButtonRegister>
                </ButtonBox>

            </MainContainer>
        </div>
    )
}

export default Landing;