import React from 'react'
import {decreasement, increasement, changeQuantity} from '../redux/actions'
import {connect} from 'react-redux'

class QuantityChange extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="cart-item_quantity">
                    <button onClick={() => this.props.decreasement(this.props.product)}>-</button>
                    <input type="number" value={this.props.product.quantity} onChange={(e) => this.props.changeQuantity(this.props.product.id, Number(e.target.value))} />
                    <button onClick={() => this.props.increasement(this.props.product)}>+</button>
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
        decreasement: product => dispatch(decreasement(product)),
        increasement: product => dispatch(increasement(product)),
        changeQuantity: (id, newQuantity) => dispatch(changeQuantity(id, newQuantity))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuantityChange)