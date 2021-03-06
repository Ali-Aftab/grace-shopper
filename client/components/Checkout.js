import React, {Component} from 'react'
import UserForm from './UserForm'
import {Elements, StripeProvider} from 'react-stripe-elements'
import Stripe from './Stripe'
import {emptyCart} from '../store/cart'
import {connect} from 'react-redux'

const Checkout = props => {
  const products = props.products
  let totalCost = 0
  for (let key in products) {
    if (products[key].id) {
      totalCost += products[key].price * products[key].quantity
    }
  }
  return (
    <React.Fragment>
      <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR">
        <div className="example">
          <h1>Place your billing info below</h1>
          <Elements>
            <Stripe
              totalCost={totalCost}
              user={props.user}
              products={products}
              emptyCart={props.emptyCart}
            />
          </Elements>
        </div>
      </StripeProvider>
    </React.Fragment>
  )
}
const mapStateToProps = state => {
  return {
    user: state.userState.currUser,
    products: state.cartState.products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    emptyCart: () => {
      dispatch(emptyCart())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
