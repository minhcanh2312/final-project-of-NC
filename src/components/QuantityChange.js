import React from 'react'
import {decreasement, increasement, changeQuantity} from '../redux/actions'
import {connect} from 'react-redux'

class QuantityChange extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="cart-item_quantity">
                    <button onClick={() => this.props.decreasement(this.props.product, this.props.location)}>-</button>
                    <input type="number" value={this.props.product.quantity} onChange={(e) => this.props.changeQuantity(this.props.product.id, Number(e.target.value), this.props.location)} />
                    <button onClick={() => this.props.increasement(this.props.product, this.props.location)}>+</button>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = appState => {
    return {
        shoppingCarts: appState.shoppingCarts,
        productDetail: appState.productDetail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        decreasement: (product, location) => dispatch(decreasement(product, location)),
        increasement: (product, location) => dispatch(increasement(product, location)),
        changeQuantity: (id, newQuantity, location) => dispatch(changeQuantity(id, newQuantity, location))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuantityChange)