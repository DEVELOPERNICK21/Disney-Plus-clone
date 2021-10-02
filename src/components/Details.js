import React from "react";
import styled from "styled-components";

function Details() {
  return (
    <Container>
      <BackImage>
        <img alt="Details" src="/assets/images/bao.jpg" />
      </BackImage>
      <ImageTitle>
        <img alt="Details" src="/assets/images/viewers-marvel.png" />
      </ImageTitle>
      <Action>
        <Play>
          <img alt="Details" src="/assets/images/play-icon-black.png" />
          <span>PLAY</span>
        </Play>
        <Trailer>
          <img alt="Details" src="/assets/images/play-icon-white.png" />
          <span>TRAILER</span>
        </Trailer>
        <Add>
          <span>+</span>
        </Add>
        <WatchInGroup>
          <img alt="Details" src="/assets/images/group-icon.png" />
        </WatchInGroup>
      </Action>
      <SubTitle>2018 • 7m • Family, Fantasy, Kids, Animation</SubTitle>
      <Discription>
        The film is about an aging and lonely Chinese-Canadian mother, suffering
        from empty nest syndrome, who receives an unexpected second chance at
        motherhood when she makes a steamed bun (baozi) that comes to life.
      </Discription>
    </Container>
  );
}

export default Details;

const Container = styled.div`
  height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const BackImage = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Action = styled.div`
  display: flex;
  align-items: center;
`;

const Play = styled.button`
  background-color: black(249, 249, 249, 249);
  display: flex;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-right: 25px;
  height: 50px;
  border: none;
  padding: 0 20px;
  cursor: pointer;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;

const Trailer = styled(Play)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const Add = styled.button`
  background-color: rgba(0, 0, 0, 0.6);
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #fff;
  color: rgb(249, 249, 249);
  border-radius: 50%;
  margin: 0 22px 0 0;
  cursor: pointer;

  span {
    color: #fff;
    height: 30px;
    width: 30px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const WatchInGroup = styled(Add)`
  background-color: rgba(0, 0, 0);
  border: 2px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  border-radius: 50%;
  margin: 0 22px 0 0;
`;

const SubTitle = styled.div`
margin: 20px 0;
line-height: 1.4;
font-size: 15px;
font-weight:500;
color: rgb(249, 249, 249);
`;

const Discription = styled.div`
font-size: 20px;
font-weight:500;
color: rgb(249, 249, 249);
margin: 20px 0;
font-weight:500 ;
letter-spacing:1px;
width: 45vw;
`;
