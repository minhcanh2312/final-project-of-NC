import React from 'react'
import { connect } from 'react-redux'
import { FaStar } from 'react-icons/fa'
import './ProductDetail.css'
import { starRating, addToCart } from '../../redux/actions'
import QuantityChange from '../QuantityChange'

class ProductDetail extends React.Component {
    render() {
        let arr = [1, 2, 3, 4, 5]
        let {productDetail, location} = this.props
        return (
            <div className="product-detail">
                <div className="img-container left-box">
                    <img src={this.props.productDetail.img_url} alt="" />
                </div>
                <div className="right-box">
                    <div className="title-and-rating">
                        <h3 className="name-product">{this.props.productDetail.name}</h3>
                        <div className="star-rating">
                            {arr.map(number => {
                                return (
                                    <span
                                        className={`icon-star ${productDetail.star_rating >= number ? 'active' : ''}`}
                                        onClick={() => this.props.starRating(number, productDetail)}
                                        key={number}
                                    >
                                        <FaStar />
                                    </span>
                                )
                            })}                    
                        </div>
                        <ul className="description-list">
                            <li className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur enim architecto corporis exercitationem. Libero sed minima ut nihil architecto quae doloremque atque nam accusantium deleniti ipsa quis, tempora aliquid optio iusto tempore, enim, sit consequatur.</li>
                            <li className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ex nihil esse sunt aliquam. Quisquam recusandae necessitatibus a ratione sapiente dolor esse distinctio ipsa repellat quidem illo vitae tempora repellendus corporis, veritatis omnis laboriosam. Delectus rerum quae et ut earum.</li>
                        </ul>
                    </div>
                    <div className="entry-product-info">
                        <span className="price">${this.props.productDetail.price}.00</span>
                        <div className="quantiy-and-addToCartBtn">
                            <QuantityChange product={this.props.productDetail} location={location} />
                        </div>
                        <button className="single-addToCart-btn" onClick={(e)=>this.props.addToCart(productDetail, e, location)}>Add to cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = appState => {
    return {
        productDetail: appState.productDetail,
        // shoppingCarts: appState.shoppingCarts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        starRating: (star_number, product) => dispatch(starRating(star_number, product)),
        // increasement: product => dispatch(increasement(product)),
        // decreasement: product => dispatch(decreasement(product)),
        // changeQuantity: (id, newQuantity, location) => dispatch(changeQuantity(id, newQuantity, location)),
        addToCart: (product, e, location) => dispatch(addToCart(product, e, location))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)