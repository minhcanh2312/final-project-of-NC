import React from 'react'
import { increasement, decreasement, removeCartItem, changeQuantity} from '../../redux/actions'
import { connect } from 'react-redux'
import './Checkout.css'

function EmptyMessage() {
    return <h2>You've bought nothing, go shopping now !</h2>
}

class Checkout extends React.Component {
    render() {
        let cartEmpty = this.props.shoppingCarts.length === 0
        let total = this.props.shoppingCarts.reduce((sum, item) => (sum + (item.quantity * item.price)), 0)
        return (
            <React.Fragment>
                {cartEmpty ?
                    <EmptyMessage /> :
                    (
                        <div className="cart-items">
                            {this.props.shoppingCarts.map(cartItem => {
                                // let subtotal = cartItem.quantity * cartItem.price

                                return (
                                    <div className="cart-item" key={cartItem.id}>
                                        <div className="cart-item_overview">
                                            <div className="img-container">
                                                <img src={cartItem.img_url} alt=""></img>
                                            </div>
                                            <div className="cart-item_name">
                                                <p>{cartItem.name}</p>
                                            </div>
                                        </div>
                                        <div className="cart-item_price">
                                            <p>${cartItem.price}</p>
                                        </div>
                                        <div className="cart-item_quantity">
                                            <button onClick={() => this.props.decreasement(cartItem)}>-</button>
                                            <input type="number" value={cartItem.quantity} onChange={(e) => this.props.changeQuantity(cartItem.id, Number(e.target.value))} />
                                            <button onClick={() => this.props.increasement(cartItem)}>+</button>
                                        </div>
                                        <div className="remove-cart-item">
                                            <button onClick={() => this.props.removeCartItem(cartItem.id)}>Delete item</button>
                                        </div>
                                    </div>
                                )
                            }
                            )}
                            <div className="totalPrice">
                                <h3>Total: ${total}</h3>
                            </div>
                        </div>
                    )

                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = appState => {
    return {
        shoppingCarts: appState.shoppingCarts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increasement: product => dispatch(increasement(product)),
        decreasement: product => dispatch(decreasement(product)),
        removeCartItem: product => dispatch(removeCartItem(product)),
        changeQuantity: (cardId, newQuantity) => dispatch(changeQuantity(cardId, newQuantity))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)