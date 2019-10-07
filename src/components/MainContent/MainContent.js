import React, {Component} from 'react'
import {Route,Switch} from 'react-router-dom'
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
            <div className="wrapper">
                <div className="main-content">
                    {/* {this.props.activePage === 'home' ? <Home /> : ''}
                    {this.props.activePage === 'about' ? <About /> : ''}
                    {this.props.activePage === 'contact' ? <Contact /> : ''}
                    {this.props.activePage === 'checkout' ? <Checkout /> : ''}
                    {this.props.activePage === 'product-detail' ? <ProductDetail /> : ''} */}

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/product-detail" component={ProductDetail} />
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = appState => {
    return {
        activePage: appState.activePage,
    }
}

export default connect(mapStateToProps, null) (MainContent)