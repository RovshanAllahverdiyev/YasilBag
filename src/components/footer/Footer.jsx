import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import './footer.css'

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
            

            <Col lg="2" md="4" sm="6">
              <h5 className="footer__link-title">Quick Links</h5>

              <ListGroup>
                {footerLinks.map((item, index) => (
                  <ListGroupItem key={index} className="link__item">
                    <a href={item.url}>{item.display}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer__link-title">Info Links</h5>

              <ListGroup>
                {footerLinks.map((item, index) => (
                  <ListGroupItem key={index} className="link__item">
                    <a href={item.url}>{item.display}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer__link-title">Contact</h5>

              <ListGroup>
                <ListGroupItem className=" link__item d-flex align-items-center gap-3 ">
                  <i class="ri-map-pin-line"></i> Bakı Şəhəri, Razin
                </ListGroupItem>

                <ListGroupItem className=" link__item d-flex align-items-center gap-3 ">
                <i class="ri-mail-line"></i> AllakhverdievRovshann@gmail.com
                </ListGroupItem>

                <ListGroupItem className=" link__item d-flex align-items-center gap-3 ">
                <i class="ri-phone-line"></i> +994554233353
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
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
