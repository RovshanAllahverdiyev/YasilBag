import React from "react";
import { Container } from "reactstrap";

import { sliderData } from "../../assets/fake-data/slider";
import "./slider.css";

import BgImgSerab from '../../assets/images/yemek-bg.jpg'
import BgImgSerab2 from '../../assets/images/serab.jpg'






const HeroSlider = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidersToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 3000,
  }

  return (
    <section >
      <Container>
        <div>
         
           
            <div className="slider__wrapper d-flex align-items-center justify-content-between ">
              <div className="slider__content w-50 ps-2">
                {/* <h2 className="hero__slider-title mb-3">{item.title}</h2>
                <p>{item.desc}</p>
              <button className="btn">Explore Food</button> */}
              </div>

              <div className="slider__img ">
                <img src={BgImgSerab2} alt="" className="w-100 " /> 
              </div>
            </div>
            
        </div>
      </Container>
    </section>
  );
};

export default HeroSlider;
