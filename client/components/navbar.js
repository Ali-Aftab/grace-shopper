import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../store'

const Navbar = ({ handleClick, isLoggedIn, name, cart }) => {
  // return (
  //   <nav className="navbar navbar-default">
  //     <div className="container-fluid">
  //       <div
  //         className="collapse navbar-collapse"
  //         id="bs-example-navbar-collapse-1"
  //       >
  //         <ul className="nav navbar-nav">
  //           <li className="active">
  //             <NavLink to="/" activeClassName="active">
  //               Home <span className="sr-only">(current)</span>
  //             </NavLink>
  //           </li>
  //           <li className="active">
  //             <NavLink to="/:userId/cart" activeClassName="active">
  //               Cart <span className="sr-only">(current)</span>
  //             </NavLink>
  //           </li>
  //           <li className="active">
  //             <NavLink to="/home" activeClassName="active">
  //               Logout <span className="sr-only">(current)</span>
  //             </NavLink>
  //           </li>
  //           <li className="active">
  //             <NavLink to="/login" activeClassName="active">
  //               Login <span className="sr-only">(current)</span>
  //             </NavLink>
  //           </li>
  //           <li className="active">
  //             <NavLink to="/signup" activeClassName="active">
  //               Signup <span className="sr-only">(current)</span>
  //             </NavLink>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // )
  console.log(cart)
  if (isLoggedIn === true) {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              <li className="active">
                <NavLink to="/" activeClassName="active">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="active">
                <NavLink to="/cart" activeClassName="active">
                  Your Cart <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="active">
                <NavLink
                  to="/login"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Logout <span className="sr-only">(current)</span>
                </NavLink>
              </li>
            </ul>
            <h3>Hi {name}</h3>
          </div>
        </div>
      </nav>
    )
  }
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
            <li className="active">
              <NavLink to="/" activeClassName="active">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="active">
              <NavLink to="/cart" activeClassName="active">
                Your Cart <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="active">
              <NavLink to="/login" activeClassName="active">
                Login <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="active">
              <NavLink to="/signup" activeClassName="active">
                Signup <span className="sr-only">(current)</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.userState.currUser.id,
    name: state.userState.currUser.name,
    cart: state.cartState.products
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
