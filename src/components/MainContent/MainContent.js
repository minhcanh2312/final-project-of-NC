import React, {Component} from 'react'
import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import Checkout from '../Checkout/Checkout'
import './MainContent.css'
import {connect} from 'react-redux'
import ProductDetail from '../ProductDetail/ProductDetail';
class MainContent extends Component {
    render() {
        return (
            <div className="main-content">
                {this.props.activePage === 'home' ? <Home /> : ''}
                {this.props.activePage === 'about' ? <About /> : ''}
                {this.props.activePage === 'contact' ? <Contact /> : ''}
                {this.props.activePage === 'checkout' ? <Checkout /> : ''}
                {this.props.activePage === 'product-detail' ? <ProductDetail /> : ''}
            </div>
        )
    }
}

const mapStateToProps = appState => {
    return {activePage: appState.activePage}
}

export default connect(mapStateToProps, null) (MainContent)