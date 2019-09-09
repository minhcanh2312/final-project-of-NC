export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM"
export const CHECKOUT = "CHECKOUT"
export const CHANGE_QUANTITY = "CHANGE_QUANTITY"
export const SET_PRODUCTS = "SET_PRODUCTS"
export const NAVIGATE = "NAVIGATE"
export const INCREASEMENT = "INCREASEMENT"
export const DECREASEMENT = "DECREASEMENT"
export const SET_PRODUCT_DETAIL = "SET_PRODUCT_DETAIL"
export const SHOW_IOS = "SHOW_IOS"
export const SHOW_ANDROID = "SHOW_ANDROID"
export const CHANGE_MIN_PRICE = "CHANGE_MIN_PRICE"
export const CHANGE_MAX_PRICE = "CHANGE_MAX_PRICE"
export const SET_DISPLAY_PRODUCTS = "SET_DISPLAY_PRODUCTS"

export function setProducts(products) {
    return {
        type: SET_PRODUCTS,
        products
    }
}

export function navigate(page) {
    return {
        type: NAVIGATE,
        page
    }
}

export function addToCart(product, event) {
    return {
        type: ADD_TO_CART,
        payload: {product, event}
    }
}

export function increasement(product) {
    return {
        type: INCREASEMENT,
        product
    }
}
export function decreasement(product) {
    if(product.quantity === 1) {
        return removeCartItem(product.id)
    }
    return {
        type: DECREASEMENT,
        product
    }
}

export function removeCartItem(cartId) {
    return {
        type: REMOVE_CART_ITEM,
        cartId
    }
}

export function changeQuantity(cartId, newQuantity) {
    if(newQuantity === 0) {
        return removeCartItem(cartId)
    }
    return {
        type: CHANGE_QUANTITY,
        payload: {cartId, newQuantity}
    }
}

export function setProductDetail(product) {
    return {
        type: SET_PRODUCT_DETAIL,
        product
    }
}

export function showIos() {
    return {
        type: SHOW_IOS
    }
}
export function showAndroid() {
    return {type: SHOW_ANDROID}
}

export function changeMinPrice(value) {
    
    return{type: CHANGE_MIN_PRICE, value}
}
export function changeMaxPrice(value) {
    return{type: CHANGE_MAX_PRICE, value}
}

export function setDisplayProducts(products) {
    return {
        type: SET_DISPLAY_PRODUCTS,
        products
    }
}