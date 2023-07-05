import React from 'react'
import { Route } from 'react-router-dom'
import Cart from './cart/Cart'
import Home from './home/Home'
import Signin from './signin/Signin'

const index = () => {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/cart">
          <Cart />
      </Route>
      <Route exact path="/signin">
          <Signin />
      </Route>
    </div>
  )
}

export default index