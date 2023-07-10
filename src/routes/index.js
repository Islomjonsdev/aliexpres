import React from 'react'
import { Route } from 'react-router-dom'
import Cart from './cart/Cart'
import Home from './home/Home'
import Login from './login/Login'
import Orders from './orders/Orders'
import Pdp from './pdp/Pdp'
import Signup from './signup/Signup'

const index = () => {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pdp/:id">
          <Pdp />
      </Route>
      <Route exact path="/signup">
          <Signup />
      </Route>
      <Route exact path="/login">
          <Login />
      </Route>
      <Route exact path="/cart">
          <Cart />
      </Route>
      <Route exact path="/orders">
          <Orders />
      </Route>
    </div>
  )
}

export default index