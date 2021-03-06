import React from 'react'
import styled from 'styled-components'

function Viewer() {
    return (
        <Container>
            <Wrap>
                <img alt="ViewerImage" src="/assets/images/viewers-disney.png" />
            </Wrap>
            <Wrap>
                <img alt="ViewerImage" src="/assets/images/viewers-pixar.png" />
            </Wrap>
            <Wrap>
                <img alt="ViewerImage" src="/assets/images/viewers-marvel.png" />
            </Wrap>
            <Wrap>
                <img alt="ViewerImage" src="/assets/images/viewers-starwars.png" />
            </Wrap>
            <Wrap>
                <img alt="ViewerImage" src="/assets/images/viewers-national.png" />
            </Wrap>
        </Container>
    )
}           

export default Viewer

const Container = styled.div`
margin-top: 20px;
display: grid;
grid-template-columns: repeat(5, minmax(0,1fr));
grid-gap: 25px;
padding: 30px 0  25px;
`

const Wrap = styled.div`
border-radius: 10px;
border: 3px solid rgba(249, 249, 249, 0.1);
cursor: pointer;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94 ) 0s ;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

&:hover{
    box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
    rgb(0 0 0 / 72%) 0 16px 10px -10px;
    transform: scale(1.05);
    border:  3px solid rgba(249, 249, 249, 0.8);
    
}
`