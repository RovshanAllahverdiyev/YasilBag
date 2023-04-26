import React, { Fragment, useEffect, useState } from "react";
import ChooseUs from "../components/choose-us/ChooseUs";

import Header from "../components/header/Header";
import HeroSlider from "../components/hero-slider/HeroSlider";
import PopularMenu from "../components/popular-menu/PopularMenu";
import MenuPack from "../components/menu-pack/MenuPack";

import Footer from "../components/footer/Footer";
import "./home.css";

import Gif2 from "../assets/images/georgian2.gif";

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      {loading ? (
        <img src={Gif2} alt="" className="spinner__content" />
      ) : (
        <Fragment>
          <Header />
          <HeroSlider />
          {/* <PopularMenu /> */}
          {/* <ChooseUs /> */}
          <MenuPack />

          <Footer />
        </Fragment>
      )}
    </div>
  );
}

export default Home;
