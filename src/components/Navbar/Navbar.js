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
                    <img src={logo} alt="" />
                </div>
                <div className="nav-bar">
                    <ul className="nav-menu">
                        {/* <li
                            className={this.props.activePage === 'home' ? 'active' : ''}
                            onClick={() => this.props.navigate('home')}
                        >
                            Home
                        </li>
                        <li
                            className={this.props.activePage === 'about' ? 'active' : ''}
                            onClick={() => this.props.navigate('about')}
                        >
                            About
                        </li>
                        <li
                            className={this.props.activePage === 'contact' ? 'active' : ''}
                            onClick={() => this.props.navigate('contact')}
                        >
                            Contact
                        </li> */}
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
                {/* <div className="cart" onClick={() => this.props.navigate('checkout')}>Cart({quantity})</div> */}
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