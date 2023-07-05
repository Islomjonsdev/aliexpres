import React from 'react'
import "./Hero.scss"
import heroJson from "../../api/dummiy-data.heroLinks.json"
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            <div className='hero__container'>
                <ul className='hero__left__side'>
                    {
                        heroJson.map(herojson => 
                          <li className='hero__left__item' key={uuidv4()}>
                              <Link className='hero__left__link'>{herojson.heroLinks}</Link>
                          </li>  
                        )
                    }
                </ul>

                <div className='hero__right__side'>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero