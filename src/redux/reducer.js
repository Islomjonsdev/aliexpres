const initialCart = {
    cart: []
}

const cartReducer = (state = initialCart, action) => {
    console.log(action);
    switch(action.type){
        case "add_to_cart":
            return {
                cart: [...state.cart, action.data]
            }
            case "remove__product":
                if (action.data) {
                    state.cart.splice(state.cart.indexOf(action.data), 1)
                }
                return {
                    cart: [...state.cart]
                }
                case "increment":
                    state.cart.map((product) => {
                        return product.id === action.data.id ? product.count + (product.count < 10 ? 1 : 0) : product.count
                    })
                    return {
                        cart: [...state.cart]
                    }
                    default:
                        return state
    }
}

export { cartReducer }