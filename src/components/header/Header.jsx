import React from "react";
import { Link } from "react-router-dom";
import "../../App.scss";
import LogoMono from "../../assets/logos/logo-mono.svg";
import "./header.scss";

const Header = () => {
  const headerItems = [
    { title: "Work", href: "/work/" },
    { title: "Services", href: "/services/" },
    { title: "About", href: "/about/" },
    { title: "News", href: "/news/" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact/" },
  ];

  const priorityMenuItems = [
    {
      image: "",
      heading: "",
      subheading: "",
      year: "",
      descripton: "",
      linkText: "",
      linkHref: "",
    },

    {
      image: "",
      heading: "",
      subheading: "",
      year: "",
      descripton: "",
      linkText: "",
      linkHref: "",
    },

    {
      image: "",
      heading: "",
      subheading: "",
      year: "",
      descripton: "",
      linkText: "",
      linkHref: "",
    },

    {
      image: "",
      heading: "",
      subheading: "",
      year: "",
      descripton: "",
      linkText: "",
      linkHref: "",
    },

    {
      image: "",
      heading: "",
      subheading: "",
      year: "",
      descripton: "",
      linkText: "",
      linkHref: "",
    },
  ];

  const renderMenuItems = () => {
    return headerItems.map((item) => (
      <li key={item.href} className="header__menu__item">
        <Link to={item.href}>{item.title}</Link>
      </li>
    ));
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={LogoMono} alt="Logo" />
        </Link>
      </div>

      <div className="header__menu">{renderMenuItems()}</div>

      <div className="header__submenu">
        <p>submenu</p>
      </div>
    </header>
  );
};

export default Header;
