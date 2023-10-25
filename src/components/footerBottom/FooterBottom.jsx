import React from 'react'
import "./FooterBottom.scss"
import { v4 as uuidv4 } from 'uuid';
import footerBottomApi from "../../api/dummiy-data.footerBottom.json"
import { Link } from 'react-router-dom';

const FooterBottom = () => {
  return (
    <div className='footer__bottom'>
        <ul className='footer__bottom__list'>
            {
                footerBottomApi.map(footerBottomJson => 
                  <li className='footer__bottom__item' key={uuidv4()}>
                      <h3 className='footer__bottom__heading'>{footerBottomJson.footerBottomHeading}</h3>
                      <Link className='footer__bottom__link'>{footerBottomJson.footerBottomLink1}</Link>
                      <Link className='footer__bottom__link'>{footerBottomJson.footerBottomLink2}</Link>
                      <Link className='footer__bottom__link'>{footerBottomJson.footerBottomLink3}</Link>
                      <Link className='footer__bottom__link'>{footerBottomJson.footerBottomLink4}</Link>
                  </li>  
                )
            }
        </ul>
        
        <div className='footer__main__bottom'>
            <div className='footer__main__bottom__wrapper'>
                <Link className='footer__main__bottom__link'>Privacy Policy</Link>
                <Link className='footer__main__bottom__link'>User Agreements</Link>
            </div>
            <p className='footer__main__bottom__text'>2010-2023 © AliExpress Russia</p>
        </div>
    </div>
  )
}

export default FooterBottom