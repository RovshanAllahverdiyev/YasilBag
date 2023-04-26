import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import './footer.css'

import Xerite from '../../assets/images/xerite2.png'

import Tiktok from '../../assets/images/tiktok.svg'


const footerQuickLinks = [
  {
    display: "Terms & Conditions",
    url: "#",
  },
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Recioes",
    url: "#",
  },
  {
    display: "Contact",
    url: "#",
  },
];

const footerLinks = [
  {
    display: "About",
    url: "#",
  },
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Return & Refund",
    url: "#",
  },
  {
    display: "Payment Methood",
    url: "#",
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <Container>
          <Row>
            

            <Col lg='3'>       
              <h5 style={{color: '#fff'}}>
                Əlaqə
                </h5>
             
              <ListGroup>
                <ListGroupItem className=" link__item d-flex align-items-center gap-3 ">
                 <a href="https://goo.gl/maps/rSSJgnMBJyUcX6sp8" target='_blank'> <i class="ri-map-pin-line"></i> Bakı Şəhəri, Razin</a> 
                </ListGroupItem>

                <ListGroupItem className=" link__item d-flex align-items-center gap-3 ">
                <a href="tel:+994503272279" target="_blank"> <i class="ri-phone-line"></i> Əlaqə Nömrəmiz </a> 
                </ListGroupItem>

                <ListGroupItem className=" link__item d-flex align-items-center gap-3 mb-5 ">
                <a href="https://wa.me/+994503272279" target='_blank'> <i class="ri-whatsapp-line"></i> Whatsapp </a> 
                </ListGroupItem>

              </ListGroup>


              
            </Col>

            <Col >       
              <h5 style={{color: '#fff'}}>
                Bizi izleyin
                </h5>
             
              <ListGroup>

                <ListGroupItem className=" link__item d-flex align-items-center gap-3 ">
                 <a href="https://www.tiktok.com/@yasilbag" target='_blank'> <span><img src={Tiktok} alt=""  style={{backgroundColor: "white"}} /></span> Tiktok </a> 
                </ListGroupItem>

                <ListGroupItem className=" link__item d-flex align-items-center gap-3 mb-5">
                 <a href="https://www.instagram.com/yasilbag_restoran/" target='_blank'> <i class="ri-instagram-line" ></i> Instagram </a> 


                </ListGroupItem>
              </ListGroup>

              
            </Col>
          </Row>
        </Container>
      </div>

      
            <div className="slider__wrapper d-flex align-items-center justify-content-center ">
             

              <div className="slider__img ">
               <a href="https://goo.gl/maps/koKVsZtDf4NvVRwd7" target='_blank' > <img src={Xerite} alt="" className="w-100 " /> </a> 
              </div>
            </div>

      <div className="footer__bottom">
        <Container>
            <Row>
                <Col lg='12'>
                    <p>copyright 2023, developed by <a  target='_blank' className="dev__instagram" href="https://www.linkedin.com/in/rovshan-allakhverdiev-667803255/">Rovshan</a>, All right reserved</p>
                </Col>
            </Row>

        </Container>
      </div>
    </footer>
  );
}

export default Footer;
