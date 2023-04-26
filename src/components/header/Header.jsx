import React, { useRef } from "react";
import "./header.css";
import { animateScroll as scroll } from "react-scroll";


import { Container } from "reactstrap";

// const navLinks = [
//   {
//     display: "Home",
//     url: "",
//   },
//   {
//     display: "About",
//     url: "ChooseUs",
//   },
//   {
//     display: "Menu",
//     url: "MenuPack",
//   },
//   {
//     display: "Recipes",
//     url: "#",
//   },
//   {
//     display: "Contact",
//     url: "#",
//   },
// ];

function Header() {

  const toggleHome = () => {
    scroll.scrollToTop();
  };



    const menuRef = useRef()

    // const menuToggle = ()=> menuRef.current.classList.toggle('active__menu')

  return (
    <header className="header">
      <Container>


        <div className="navigation">
          
          <div className="logo">
          <h2 className="d-flex align-items-center justify-content-center gap-1">
              <span onClick={toggleHome} style={{cursor: 'pointer'}}>
                <i  class="ri-restaurant-2-line"></i>
              Yasil Bag
              </span>{" "}
            
            </h2>
          </div>

          <div className="nav__menu"  ref={menuRef}>
            <div className="nav__list__wrapper d-flex align-items-center gap-5">
              {/* <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <a href={item.url} onClick={menuToggle}>{item.display}</a>
                  </li>
                ))}
              </ul> */}

              <div className="menu__right">
            {/* <div className="custom__search ">
              <input type="text" placeholder="Search item..." />
              <span>
                <i class="ri-search-line"></i>
              </span>
            </div> */}
          </div>

            </div>
          </div>

            {/* <div>
                <span className="cart__icon">
                <i class="ri-shopping-basket-line"></i>

                <span className="badge">2</span>
                </span>
            </div> */}
         

          {/* <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div> */}
        </div>
      </Container>
    </header>
  );
}

export default Header;
