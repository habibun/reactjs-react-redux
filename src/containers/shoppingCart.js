import React from 'react';
import { connect } from 'react-redux';
import ShoppingCart from '../components/shoppingCart';

function getProductsInCart(products, shoppingCart){
    return products.filter(product => shoppingCart.includes(product.id))
}

function mapStateToProps(state) {
    return {
        products: getProductsInCart(state.products, state.shoppingCart)
    }
}

function mapDispatchToProps(dispatch){
    return {
        handleClick(id) {
            dispatch({
                type: 'REMOVE_FROM_CART',
                payload: {
                    id: id
                }
            })
        }
    }
}

let ShoppingCartContainer = connect(mapStateToProps)(ShoppingCart)

export default ShoppingCartContainer;