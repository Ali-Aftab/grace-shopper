import React from 'react'
import {connect} from 'react-redux'
import {fetchCartProducts} from '../store/cart'
import {NavLink} from 'react-router-dom'

function twoDecimals(price) {
  return price.toFixed(2)
}

const Cart = props => {
  const products = props.products
  return (
    <div className="ui items">
      {Object.keys(products).length ? (
        <React.Fragment>
          <h1>Your Cart</h1>
          {Object.keys(products).map(key => {
            return (
              <div className="item" key={products[key].id}>
                <div className="ui small image">
                  <img src={products[key].imageUrl} />
                </div>
                <div className="content">
                  <div className="header">{products[key].name}</div>
                  <div className="meta">
                    <span className="price">
                      Price: ${twoDecimals(products[key].price)}
                    </span>
                  </div>
                  <div className="meta">
                    <span className="quantity">
                      Quantity: {products[key].quantity}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
          <NavLink to="/checkout">Go to Checkout</NavLink>
        </React.Fragment>
      ) : (
        <h2>No products currently in cart.</h2>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    products: state.cartState.products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadCartProducts: () => {
      dispatch(fetchCartProducts(ownProps.match.params.userId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
