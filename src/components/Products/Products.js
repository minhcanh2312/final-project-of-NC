import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { setProducts, addToCart, navigate, setProductDetail, setDisplayProducts, getProducts } from '../../redux/actions'
import './Products.css'

class Products extends Component {
    componentDidMount() {
        // axios.get('http://localhost:3000/phone_products')
        //     .then(res => {
        //         console.log(res)

        //         const products = res.data.data.map(item => ({
        //             name: item.name,
        //             id: item.id,
        //             price: item.final_price,
        //             img_url: item.img_url
        //         }))
        //         const products = res.data
        //         this.props.setProducts(products)
        //         this.props.setDisplayProducts(products)
        //     })
        this.props.getProducts()
    }
    render() {
        let {products, filter} = this.props
        let displayProducts = products.filter(product => {
            let {min, max} = filter.price
            let showOs = filter.showOs[product.os]
            return  product.price > min && product.price <= max && showOs
        })
        return (
            <div className="products">
                 {displayProducts.map(product =>
                    // <div className="single-product" key={product.id} onClick={() => {this.props.navigate('product-detail'); this.props.setProductDetail(product)}}>
                    <Link to="/product-detail" className="single-product" key={product.id}>
                        <div className="img-container">
                            <img src={product.img_url} alt="" />
                            <button className="addToCart-btn" onClick={(e) => this.props.addToCart(product,e)}>Add to cart</button>
                            <div className="for-hover" />
                        </div>
                        <div className="product-info">
                            <h3 className="name-product">{product.name}</h3>
                            <span className="price">${product.price}</span>
                        </div>
                    </Link>
                    // </div>
                )}
                
            </div>
        )
    }
}

const mapStateToProps = appState => {
    return { 
        products: appState.products,
        filter: appState.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setProducts: products => dispatch(setProducts(products)),
        addToCart: (product, e) => dispatch(addToCart(product, e)),
        navigate: page => dispatch(navigate(page)),
        setProductDetail: product => dispatch(setProductDetail(product)),
        setDisplayProducts: products => dispatch(setDisplayProducts(products)),
        getProducts: () => dispatch(getProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)