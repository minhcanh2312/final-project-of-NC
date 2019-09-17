import {
    SET_PRODUCTS,
    NAVIGATE,
    ADD_TO_CART,
    INCREASEMENT,
    DECREASEMENT,
    REMOVE_CART_ITEM,
    CHANGE_QUANTITY,
    SET_PRODUCT_DETAIL,
    SHOW_IOS,
    SHOW_ANDROID,
    CHANGE_MIN_PRICE,
    CHANGE_MAX_PRICE,
    SET_DISPLAY_PRODUCTS,
    STAR_RATING
} from './actions'

const initialState = {
    activePage: 'home',
    products: [],
    shoppingCarts: [],
    productDetail: {},
    filter: {
        showOs: {
            ios: true,
            android: true
        },
        price: {
            min: 0,
            max: Number.MAX_SAFE_INTEGER
        },
        price_with_input: {
            min: 0,
            max: Number.MAX_SAFE_INTEGER
        }
    },
}

function setProducts(state, action) {
    return { ...state, products: action.products }
}

function setDisPlayProducts(state, action) {
    // let displayProducts = action.products.filter(product => {
    //     let {min, max} = state.filter.price
    //     let showOs = state.filter.showOs[product.os]

    //     return  product.price > min && product.price <= max && showOs
    //     // return product.price > min 
    // })
    // return {...state, displayProducts: displayProducts}
    return {
        ...state,
        filter: {
            ...state.filter,
            price: {
                ...state.filter.price,
                min: state.filter.price_with_input.min,
                max: state.filter.price_with_input.max
            }
        }
    }
}

function navigate(state, action) {
    return { ...state, activePage: action.page }
}

function addToCart(state, action) { 
    let { product } = action.payload
    let newCartItem
    let newShoppingCarts
    let productIndex = state.shoppingCarts.findIndex(item => item.id === product.id)
    if(state.activePage === 'home') {
        action.payload.event.stopPropagation()
        action.payload.event.persist()
        if (productIndex === -1) {
            newCartItem = { ...product, quantity: 1 }
            newShoppingCarts = [...state.shoppingCarts, newCartItem]
        } else {
            newShoppingCarts = [...state.shoppingCarts]
            newShoppingCarts[productIndex].quantity++
        }
        return { ...state, shoppingCarts: newShoppingCarts }
    }else if(state.activePage === 'product-detail') {
        if(productIndex === -1) {
            newCartItem = {...product}
            newShoppingCarts = [...state.shoppingCarts,  newCartItem]
            return {...state, shoppingCarts: newShoppingCarts}
        }else {
            alert('Your cart has this product already')
            return {...state}
        }
    }

}

function increasement(state, action) {
    if (state.activePage === 'checkout') {
        let newShoppingCarts
        let productIndex = state.shoppingCarts.findIndex(item => item.id === action.product.id)
        newShoppingCarts = [...state.shoppingCarts]
        newShoppingCarts[productIndex].quantity++
        return { ...state, shoppingCarts: newShoppingCarts }
    } else if (state.activePage === 'product-detail') {
        let newProductDetail = {...state.productDetail}
        newProductDetail.quantity++
        return{...state, productDetail: newProductDetail}
    }
}
function decreasement(state, action) {
    if (state.activePage === 'checkout') {
        let newShoppingCarts
        let productIndex = state.shoppingCarts.findIndex(item => item.id === action.product.id)
        newShoppingCarts = [...state.shoppingCarts]
        newShoppingCarts[productIndex].quantity--
        return { ...state, shoppingCarts: newShoppingCarts }
    } else if (state.activePage === 'product-detail') {
        let newProductDetail = {...state.productDetail}
        newProductDetail.quantity--
        return{...state, productDetail: newProductDetail}
    }
}
function removeCartItem(state, action) {
    let newShoppingCarts
    let productIndex = state.shoppingCarts.findIndex(item => item.id === action.cartId)
    state.shoppingCarts.splice(productIndex, 1)
    newShoppingCarts = [...state.shoppingCarts]
    return { ...state, shoppingCarts: newShoppingCarts }
}
function changeQuantity(state, action) {
    // let productIndex = state.shoppingCarts.findIndex(product => product.id === action.payload.cartId)
    // let newShoppingCarts = [...state.shoppingCarts]
    // newShoppingCarts[productIndex].quantity = action.payload.newQuantity
    // return {...state, shoppingCarts: newShoppingCarts}
    if (state.activePage === 'checkout') {
        let productIndex = state.shoppingCarts.findIndex(product => product.id === action.payload.cartId)
        let newShoppingCarts = [...state.shoppingCarts]
        newShoppingCarts[productIndex].quantity = action.payload.newQuantity
        return { ...state, shoppingCarts: newShoppingCarts }
    }else if (state.activePage === 'product-detail') {
        return {
            ...state,
            productDetail: {
                ...state.productDetail,
                quantity: action.payload.newQuantity
            }
        }
    }
}
function setProductDetail(state, action) {
    let newProduct
    newProduct = { ...action.product, star_rating: 3, quantity: 1 }
    return { ...state, productDetail: newProduct }
}
function showIos(state, action) {
    let showIos = state.filter.showOs.ios
    return {
        ...state,
        filter: {
            ...state.filter,
            showOs: {
                ...state.filter.showOs,
                ios: !showIos
            }
        }
    }
}
function showAndroid(state, action) {
    let showAndroid = state.filter.showOs.android
    return {
        ...state,
        filter: {
            ...state.filter,
            showOs: {
                ...state.filter.showOs,
                android: !showAndroid
            }
        }
    }
}

function changeMinPrice(state, action) {
    if (action.value === '') {
        console.log('hello')
        return {
            ...state,
            filter: {
                ...state.filter,
                price_with_input: {
                    ...state.filter.price_with_input,
                    min: 0
                }
            }
        }
    } else {
        return {
            ...state,
            filter: {
                ...state.filter,
                price_with_input: {
                    ...state.filter.price_with_input,
                    min: action.value
                }
            }
        }
    }
}
function changeMaxPrice(state, action) {
    if (action.value === '') {
        console.log('hello')
        return {
            ...state,
            filter: {
                ...state.filter,
                price_with_input: {
                    ...state.filter.price_with_input,
                    max: Number.MAX_SAFE_INTEGER
                }
            }
        }
    } else {
        return {
            ...state,
            filter: {
                ...state.filter,
                price_with_input: {
                    ...state.filter.price_with_input,
                    max: action.value
                }
            }
        }
    }
}

function starRating(state, action) {
    return {
        ...state,
        productDetail: {
            ...state.productDetail,
            star_rating: action.star_number
        }
    }
}

export default function appState(state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return setProducts(state, action)
        case NAVIGATE:
            return navigate(state, action)
        case ADD_TO_CART:
            return addToCart(state, action)
        case INCREASEMENT:
            return increasement(state, action)
        case DECREASEMENT:
            return decreasement(state, action)
        case REMOVE_CART_ITEM:
            return removeCartItem(state, action)
        case CHANGE_QUANTITY:
            return changeQuantity(state, action)
        case SET_PRODUCT_DETAIL:
            return setProductDetail(state, action)
        case SHOW_IOS:
            return showIos(state, action)
        case SHOW_ANDROID:
            return showAndroid(state, action)
        case CHANGE_MIN_PRICE:
            return changeMinPrice(state, action)
        case CHANGE_MAX_PRICE:
            return changeMaxPrice(state, action)
        case SET_DISPLAY_PRODUCTS:
            return setDisPlayProducts(state, action)
        case STAR_RATING:
            return starRating(state, action)
        default:
            return state
    }

}