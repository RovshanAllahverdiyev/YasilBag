import React, { Fragment } from 'react'
import ChooseUs from '../components/choose-us/ChooseUs'

import Header from '../components/header/Header'
import HeroSlider from '../components/hero-slider/HeroSlider'
import PopularMenu from '../components/popular-menu/PopularMenu'
import MenuPack from '../components/menu-pack/MenuPack'

import Footer from '../components/footer/Footer'

function Home() {
  return (
   <Fragment>
        <Header />
        <HeroSlider />
        <PopularMenu />
        {/* <ChooseUs /> */}
        <MenuPack />
       <Footer />
   </Fragment>
  )
}

export default Home