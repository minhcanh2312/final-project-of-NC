import React, { Component } from 'react'
import './Sidebar.css'
import {connect} from 'react-redux'
import {showIos, showAndroid, changeMinPrice, changeMaxPrice, setDisplayProducts} from '../../redux/actions'
class Sidebar extends Component {
    render() {
        return (
            <div className="side-bar">
                <div className="filter-with-os">
                    <h2>Filtered by operating system</h2>
                    <button 
                        className={this.props.filter.showOs.ios ? 'showOsBtn active' : ''}
                        onClick={this.props.showIos}
                    >
                        Show ios
                    </button>
                    <button 
                        className={this.props.filter.showOs.android ? 'showOsBtn active' : ''}
                        onClick={this.props.showAndroid}
                    >
                        Show android
                    </button>
                </div>
                <div className="filter-with-price">
                    <h2>Filtered by price</h2>
                    <div className="filter-form">
                        <div className="left-form">
                            <label>Min</label>
                            <input type="number" className="price-input" placeholder="Min" onChange={(e) => this.props.changeMinPrice(e.target.value)}></input>
                        </div>
                        <div className="right-form">
                            <label>Max</label>
                            <input type="number" className="price-input" placeholder="Max" onChange={(e) => this.props.changeMaxPrice(e.target.value)}></input>
                        </div>
                    </div>
                    <button className="filterBtn" onClick={()=>this.props.setDisplayProducts(this.props.displayProducts)}>Filter</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = appState => {
    return {
        filter: appState.filter,
        products: appState.products,
        displayProducts: appState.displayProducts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showIos: () => dispatch(showIos()),
        showAndroid: () => dispatch(showAndroid()),
        changeMinPrice: value => dispatch(changeMinPrice(value)),
        changeMaxPrice: value => dispatch(changeMaxPrice(value)),
        setDisplayProducts: products => dispatch(setDisplayProducts(products))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)