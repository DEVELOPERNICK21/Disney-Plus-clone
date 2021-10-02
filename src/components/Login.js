import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
        <Content>        
            <ThreeLogo src="/assets/images/cta-logo-one.svg" />
            <GetButton>Get All There</GetButton>
            <PremierDetails>
                Get Premier Acess to Raya and Last Dragon for an additional fee with a
                Disney Plus subscription. As after that the price of the Disney and al
                the Disney bundel will increases by $1
            </PremierDetails>
            <Sponsers src="/assets/images/cta-logo-two.png" />
        </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: top;

  &:before {
    background-position: top;
    background-image: url("/assets/images/login-background.jpg");
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: -1;
    opacity: 0.7;
    background-repeat: no-repeat;
    background-size: cover;
}
`;

const Content = styled.div`
max-width: 650px;
display: flex;  
padding: 80px 40px;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 20px;

`

const ThreeLogo = styled.img`
/* width:70% ; */
padding: 10px;
background-size: cover;
`

const GetButton = styled.a`
background-color: #0063e5;
text-align: center;
padding: 17px 0;
text-transform: uppercase;
letter-spacing: 1.5px;
border: none;
width:100% ;
border-radius: 4px;
font-weight:bold;
transition: all 250ms;
cursor: pointer;

&:hover{
    background-color: #0483ee;
}

`

const PremierDetails = styled.div`
padding: 10px;
font-size: 12px;
letter-spacing: 1.5px;

`

const Sponsers = styled.img`
padding: 20px 0;
width: 90%;
`
