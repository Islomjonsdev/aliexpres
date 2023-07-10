import React from 'react'
import { Link } from 'react-router-dom'
import "./HeaderBottom.scss"
import aliExpressLogo from "../../assets/images/logo-aliexpress.svg"
import { AiOutlineUser } from "react-icons/ai"
import { BiBorderAll } from "react-icons/bi"
import { FiShoppingCart } from "react-icons/fi"
import { useTranslation } from 'react-i18next'

const HeaderBottom = () => {
  const { t } = useTranslation()
  return (
    <div className='header__bottom'>
        <div className='container'>
            <div className='header__bottom__container'>
                <Link to="/">
                    <img className='header__bottom__img' src={aliExpressLogo} alt="" />
                </Link>
                <input className='header__bottom__input' type="text" placeholder='keyboard'/>

                <ul className='header__bottom__list'>
                    <li className='header__bottom__item'>
                        <Link className='header__bottom__link' to="/signup">
                            <AiOutlineUser className='header__bottom__icon'/>
                            <p className='header__bottom__text'>{t("signin")}</p>
                        </Link>
                    </li>
                    <li className='header__bottom__item'>
                        <Link className='header__bottom__link' to="/orders">
                            <BiBorderAll className='header__bottom__icon'/>
                            <p className='header__bottom__text'>{t("orders")}</p>
                        </Link>
                    </li>
                    <li className='header__bottom__item'>
                        <Link className='header__bottom__link' to="/cart">
                            <FiShoppingCart className='header__bottom__icon'/>
                            <p className='header__bottom__text'>{t("cart")}</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default HeaderBottom