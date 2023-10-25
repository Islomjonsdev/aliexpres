import React from 'react'
import "./Footer.scss"
import { MdTextsms } from "react-icons/md"
import { PiGooglePlayLogoBold } from "react-icons/pi"
import { BsApple } from "react-icons/bs"
import { SiHuawei } from "react-icons/si"
import { Link } from 'react-router-dom'
import FooterBottom from '../footerBottom/FooterBottom'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='container'>
            <div className='footer__container'>
                <ul className='footer__list'>
                    <li className='footer__item'>
                        <div className='footer__item__wrapper'>
                            <MdTextsms />
                            <p className='footer__item__wrapper__text'>Great value</p>
                        </div>
                        <div className='footer__item__wrapper__1'>
                            <p className='footer__item__text'>We sell over 100 million products with discounts and promotional codes</p>
                        </div>
                    </li>
                    <li className='footer__item'>
                        <div className='footer__item__wrapper'>
                            <MdTextsms />
                            <p className='footer__item__wrapper__text'>Safe payment</p>
                        </div>
                        <div className='footer__item__wrapper__1'>
                            <p className='footer__item__text'>Pay with the world’s most popular and secure payment methods</p>
                        </div>
                    </li>
                    <li className='footer__item'>
                        <div className='footer__item__wrapper'>
                            <MdTextsms />
                            <p className='footer__item__wrapper__text'>Shop with confidence</p>
                        </div>
                        <div className='footer__item__wrapper__1'>
                            <p className='footer__item__text'>Our Buyer Protection policy covers your entire purchase journey</p>
                        </div>
                    </li>
                    <li className='footer__item'>
                        <div className='footer__item__wrapper'>
                            <MdTextsms />
                            <p className='footer__item__wrapper__text'>Help center</p>
                        </div>
                        <div className='footer__item__wrapper__1'>
                            <p className='footer__item__text'>Round-the-clock assistance for a smooth shopping experience</p>
                        </div>
                    </li>
                </ul>
                
                <div className='footer__main'>
                    <a href='https://play.google.com/store/games' target="_blanck" className='footer__main__item'>
                        <PiGooglePlayLogoBold className='footer__main__icon'/>

                        <div className='footer__main__text__wrapper'>
                            <p className='footer__main__text'>Google play</p>
                            <p className='footer__main__text1'>Google play</p>
                        </div>
                    </a>
                    <a href='https://www.apple.com/mac/' target="_blanck" className='footer__main__item'>
                        <BsApple className='footer__main__icon'/>

                        <div className='footer__main__text__wrapper'>
                            <p className='footer__main__text'>Apple</p>
                            <p className='footer__main__text1'>Apple</p>
                        </div>
                    </a>
                    <a href='https://www.huawei.com/uz/' target="_blanck" className='footer__main__item'>
                        <SiHuawei className='footer__main__icon'/>

                        <div className='footer__main__text__wrapper'>
                            <p className='footer__main__text'>Huawei</p>
                            <p className='footer__main__text1'>Huawei</p>
                        </div>
                    </a>
                </div>
                <FooterBottom />
            </div>
        </div>
    </footer>
  )
}

export default Footer