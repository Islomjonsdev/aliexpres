import React, { useEffect, useState } from 'react'
import "./Pdp.scss"
import { GrFormNext } from "react-icons/gr"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Pdp = () => {
  const { id } = useParams()
  const [activeImg, setActiveImg] = useState(0)
  const [singleProductData, setSingleProductData] = useState(null)
  useEffect(() => {
      fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
          .then(response => response.json())
          .then(data => setSingleProductData(data))
  }, [])
  return (
    <div className='pdp'>
        <div className='container'>
            <div className='pdp__container'>
                <div className='pdp__wrapper'>
                    <Link className='pdp__link'>
                      AliExpress
                      <GrFormNext className='pdp__icon'/>
                    </Link>
                    <Link className='pdp__link'>
                      Pet Products
                      <GrFormNext className='pdp__icon'/>
                    </Link>
                    <Link className='pdp__link'>
                    Fish & Aquatic Pet Supplies
                      <GrFormNext className='pdp__icon'/>
                    </Link>
                    <Link className='pdp__link'>Cleaning Tools</Link>
                </div>

                <div className='pdp__wrapper__list'>
                    <div className='pdp__wrapper__left'>
                          {
                              singleProductData !== null && singleProductData ? 
                              <>
                                <div className='pdp__wrapper__left__item'>
                                    <h3 className='pdp__wrapper__left__heading'>{singleProductData.description}</h3>
                                    <div className='pdp__wrapperss'>
                                        <div className='pdp__wrapper__left__img__wrapper'>
                                            {
                                                singleProductData.images.map((imagess, index) => 
                                                  <img className='pdp__wrapper__imges'key={imagess.id} style={index === activeImg ? {boxShadow: "0px 0px 3px 3px orange"} : null} onClick={() => {setActiveImg(index)}} src={imagess} alt="" />
                                                )
                                            }
                                        </div>
                                        <img className='pdp__wrapper__left__img' src={singleProductData.category.image} alt="" />
                                    </div>
                                </div>
                              </>
                              :
                              <></>
                          }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pdp