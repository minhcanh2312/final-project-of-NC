import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.png';
import './Navbar.css'
import { connect } from 'react-redux';
import { navigate } from '../../redux/actions'
class Navbar extends Component {
    render() {
        let quantity = this.props.shoppingCarts.reduce((sum, item) => {
            return sum + item.quantity
        }, 0)
                
        return (
            <div className="header">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <div className="nav-bar">
                    <ul className="nav-menu">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="cart">
                    <Link to="/checkout">Cart({quantity})</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = appState => {
    return {
        activePage: appState.activePage,
        shoppingCarts: appState.shoppingCarts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        navigate: page => dispatch(navigate(page))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)