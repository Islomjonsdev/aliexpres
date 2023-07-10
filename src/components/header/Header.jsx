import React, { useState } from 'react'
import "./Header.scss"
import { MdLocationPin } from "react-icons/md"
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid';
import { changeLanguage } from 'i18next';

const Header = () => {
  const { t } = useTranslation()
  const [changeLang, setIsChangeLang] = useState(localStorage.getItem("lang"))
  const { i18n } = useTranslation()
  const changeWebSideLang = (evt) => {
      i18n.changeLanguage(evt.target.value || "uz")
  }
  localStorage.getItem("lang")
  const langs = [
    "UZ",
    "RU",
  ]
  return (
    <div className='header'>
        <div className='container'>
            <div className='header__container'>
                <button className='header__btn__uzs header__btn__lang1'>{t("money")}</button>
                <select className='header__btn__lang1' onChange={changeWebSideLang}>
                  {
                      langs.map(langsItem => 
                        <option  key={uuidv4()} selected={localStorage.getItem("lang") === langsItem ? true : false} value={langsItem}>{langsItem}</option>  
                      )
                  }
                </select>
                <button className='header__btn__loc header__btn__lang1'>
                    <MdLocationPin className='header__btn__loc__icon'/>
                    <p className='header__btn__text'>{t("country")}</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header