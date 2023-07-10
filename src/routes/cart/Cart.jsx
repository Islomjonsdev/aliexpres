import React from 'react'
import "./Cart.scss"
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CgMathPlus, CgMathMinus, CgHeart, CgTrash } from "react-icons/cg"

const Cart = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const selector = useSelector(state => state)
  return (
    <div className='cart'>
        <div className='container'>
            <div className='cart__container'>
                <div className='cart__wrapper'>
                    <h3 className='cart__heading'>{t("cart")}</h3>
                </div>

                <div className='cart__body'>
                    {
                        selector?.cart?.cart.map((product, id) => 
                          <div className='cart__item' key={id}>
                              <div className='cart__item__left'>
                                  <img className='cart__item__img' src={product.image} alt="" />
                                  <div className='cart__item__left__wrapper'>
                                      <Link className='cart__item__left__title'>{product.title}</Link>
                                      <Link className='cart__item__left__price'>{product.price}</Link>
                                  </div>
                              </div>

                              <div className='cart__item__right'>
                                  <div className='cart__right__product'>
                                      <button className='cart__right__minus__btn' onClick={() => {
                                        dispatch({
                                          type: "increment",
                                          data: {
                                            id: product.id,
                                            count: product.count
                                          }
                                        })
                                      }}>
                                          <CgMathMinus style={{width: "20px", height: "20px"}}/>
                                      </button>
                                      <span className='cart__right__text__count'>{product.count}</span>
                                      <button className='cart__right__minus__btn cart__right__minus__btn1' onClick={() => {
                                        dispatch({
                                          type: "increment",
                                          data: product
                                        })
                                      }}>
                                          <CgMathPlus style={{width: "20px", height: "20px"}}/>
                                      </button>
                                  </div>
                                  <div className='cart__right__icon__wrapper'>
                                      <CgHeart style={{width: "20px", height: "20px", cursor: "pointer"}}/>
                                      <CgTrash style={{width: "20px", height: "20px", cursor: "pointer"}} onClick={() => {
                                        dispatch({
                                            type: "remove__product",
                                            data: product
                                        })
                                      }}/>
                                  </div>
                              </div>
                          </div>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart