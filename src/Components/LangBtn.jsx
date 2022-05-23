import React, { useState, Component } from "react";
import { useTranslation } from "react-i18next";
import '../CssFolder/NoBorder.css';
const Button = (props) => {
    const { i18n, t } = useTranslation();
  const what = props.name;
  const lang = props.title;
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
    return <button className='button' onClick={() => changeLanguage(what)}>{lang}</button>;
  }
  
  export default Button;