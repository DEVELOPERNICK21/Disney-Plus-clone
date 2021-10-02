import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

function Movies() {
    return (
        <Container>
            <h4>Reccomended For You</h4>
            <Content>    
                <Wrap>
                    <Link to={`/details`} >
                    <img alt="MoviesImage" src="/assets/images/black-widow.jpg" />
                    </Link>
                </Wrap>
                <Wrap>
                     <Link to={`/details`} >
                    <img alt="MoviesImage" src="/assets/images/BP.jpg" />
                    </Link>
                </Wrap>
                <Wrap>
                     <Link to={`/details`} >
                    <img alt="MoviesImage" src="/assets/images/5742459.jpg" />
                    </Link>
                </Wrap>
                <Wrap>
                     <Link to={`/details`} >
                    <img alt="MoviesImage" src="/assets/images/avg.jpg" />
                    </Link>
                </Wrap>
                <Wrap>
                     <Link to={`/details`} >
                    <img alt="MoviesImage" src="/assets/images/car.jpg" />
                    </Link>
                </Wrap>
                <Wrap>
                     <Link to={`/details`} >
                    <img alt="MoviesImage" src="/assets/images/carsSOS.jpg" />
                    </Link>
                </Wrap>
                <Wrap>
                     <Link to={`/details`} >
                    <img alt="MoviesImage" src="/assets/images/ice.jpg" />
                    </Link>
                </Wrap>
                <Wrap>
                     <Link to={`/details`} >
                    <img alt="MoviesImage" src="/assets/images/black-widow.jpg" />
                    </Link>
                </Wrap>
                <Wrap>
                     <Link to={`/details`} >
                    <img alt="MoviesImage" src="/assets/images/mov1.png" />
                    </Link>
                </Wrap>
                <Wrap>
                     <Link to={`/details`} >
                    <img alt="MoviesImage" src="/assets/images/mov2.jpg" />
                    </Link>
                </Wrap>
                <Wrap>
                     <Link to={`/details`} >
                    <img alt="MoviesImage" src="/assets/images/mov3.jpg" />
                    </Link>
                </Wrap>
                <Wrap>
                     <Link to={`/details`} >
                    <img alt="MoviesImage" src="/assets/images/mov4.jpg" />
                    </Link>
                </Wrap>
                <Wrap>
                     <Link to={`/details`} >
                    <img alt="MoviesImage" src="/assets/images/mov5.jpg" />
                    </Link>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0,1fr));
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94 ) 0s ;

`

const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
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