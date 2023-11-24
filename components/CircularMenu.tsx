import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBars,
  // faFacebook,
  // faTwitter,
  // faLinkedin,
  // faGithub,
  faRss,
  faAsterisk,
} from "@fortawesome/free-solid-svg-icons";

const CircularMenuWrapper = styled.nav`
  width: 250px;
  height: 250px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  margin: 0 auto;

  .circle {
    width: 250px;
    height: 250px;
    opacity: 0;
    transform: scale(0);
    transition: all 0.4s ease-out;
    position: relative;

    &.open {
      opacity: 1;
      transform: scale(1);
    }

    a {
      text-decoration: none;
      color: white;
      display: block;
      height: 40px;
      width: 40px;
      line-height: 40px;
      position: absolute;
      text-align: center;
    }

    a:hover {
      color: #eef;
    }
  }

  .menu-button {
    position: absolute;
    top: calc(50% - 30px);
    left: calc(50% - 30px);
    text-decoration: none;
    text-align: center;
    color: #444;
    border-radius: 50%;
    display: block;
    height: 40px;
    width: 40px;
    line-height: 40px;
    padding: 10px;
    background: #dde;

    &:hover {
      background-color: #eef;
    }
  }
`;

const CircularMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { href: "", icon: faHome },
    { href: "", icon: faRss },
    { href: "", icon: faAsterisk },
  ];

  return (
    <CircularMenuWrapper>
      <div className={`circle ${isOpen ? "open" : ""}`}>
        {menuItems.map((item, index) => {
          const angle =
            -0.5 * Math.PI - 2 * (1 / menuItems.length) * index * Math.PI;
          const x = (50 - 35 * Math.cos(angle)).toFixed(4) + "%";
          const y = (50 + 35 * Math.sin(angle)).toFixed(4) + "%";
          return (
            <a href={item.href} style={{ left: x, top: y }} key={index}>
              <FontAwesomeIcon icon={item.icon} size="2x" />
            </a>
          );
        })}
      </div>
      <a href="#" className="menu-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </a>
    </CircularMenuWrapper>
  );
};

export default CircularMenu;
