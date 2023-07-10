import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./ProductCards.scss"
import { BsMinecart } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'

const ProductCards = () => {
  const dispatch = useDispatch()
  const selector = useSelector(state => state)
  const dispatchProducts = (data) => {
      const action = {
          type: "add_to_cart",
          data: data
      }
      dispatch(action)
  }
  const [productCardsJson, setProductCardsJson] = useState([])
  useEffect(() => {
      fetch("https://api.escuelajs.co/api/v1/products")
           .then(response => response.json())
           .then(data => setProductCardsJson(data.slice(0, 50)))
  }, [])
  return (
    <div className='product__cards'>
        <div className='product__cards__container'>
            <div className='product__cards__wrapper'>
                <Link className='product__cards__link1'>Top-products</Link>
                <Link className='product__cards__link2'>Picked for you</Link>
            </div>

            <ul className='product__cards__list'>
                {
                    productCardsJson.map(({id, image, title, price}) => 
                        <li className='product__cards__item' key={id}>
                            <Link to={`/pdp/${id}`} style={{textDecoration: "none"}}>
                                <img className='product__cards__img' src={image} alt="" />
                                <div className='product__cards__span__wrapper'>
                                    <span className='product__cards__span'></span>
                                    <span className='product__cards__span'></span>
                                    <span className='product__cards__span'></span>
                                    <span className='product__cards__span'></span>
                                    <span className='product__cards__span'></span>
                                    <span className='product__cards__span'></span>
                                    <span className='product__cards__span'></span>
                                </div>
                                <p className='product__cards__title'>{title}</p>
                                <h4 className='product__cards__price'>UZS {price}</h4>
                            </Link>
                            <button className='product__cards__btn' onClick={() => {
                                dispatchProducts({id, image, title, price})
                            }}>
                                <BsMinecart className='product__cards__icon'/>
                            </button>
                        </li>    
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default ProductCards