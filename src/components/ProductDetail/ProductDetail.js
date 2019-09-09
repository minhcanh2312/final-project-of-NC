import React from 'react'
import {connect} from 'react-redux'
class ProductDetail extends React.Component {
    render() {
        return(
        <div className="product-detail">
            <div className="img-container left-box">
                <img src={this.props.productDetail.img_url} alt="" />
            </div>
            <div className="right-box">
                <div className="title-and-rating">
                    <h3 className="name-product">{this.props.productDetail.name}</h3>
                    <span className="price">{this.props.productDetail.price}</span>
                </div>
                <div className="quantiy-and-addToCartBtn">
                    
                </div>

            </div>
        </div>
        )
    }
}

const mapStateToProps = appState => {
    return {
        productDetail: appState.productDetail
    }
}

export default connect(mapStateToProps, null)(ProductDetail)