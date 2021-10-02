import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Caraousel {...settings}>
      <Wrap>
        <img alt="ImageSlider" src="/assets/images/slider-badging.jpg" />
      </Wrap>
      <Wrap>
        <img alt="ImageSlider" src="/assets/images/slider-badag.jpg" />
      </Wrap>
      <Wrap>
        <img alt="ImageSlider" src="/assets/images/slider-scale.jpg" />
      </Wrap>
      <Wrap>
        <img alt="ImageSlider" src="/assets/images/slider-scales.jpg" />
      </Wrap>
    </Caraousel>
  );
}

export default ImageSlider;

const Caraousel = styled(Slider)`
  margin-top: 20px;
  ul li button {
    &:before {
      font-size: 10px;
      color: white;
    }
  }

  li.slick-active button:before {
    color: #fff;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    transition-duration: 300ms;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0 16px 10px -10px;

      &:hover{
          border: 4px solid rgba(249, 249, 249, 0.8);
      }
  }
`;
