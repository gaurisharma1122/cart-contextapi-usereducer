export const reducer= (state, action)=>{

    switch(action.type){
        case 'SET_PRODUCTS':
            {
                return { ...state, products: action.payload };
            };
            break;
        case 'LOADING_COMPLETE':
            {
                return { ...state, loading: action.payload };
            };
            break;
        case 'ADD_TO_CART':
            {
                return { ...state, cart: [...state.cart, action.payload]};
            };
            break;
        case 'REMOVE_FROM_CART':
            {
                let newCart= state.cart.filter((item)=> item.product.id != action.payload);
                return { ...state, cart: newCart };
            }
            break;
       /* case 'CHANGE_QTY':
            {
                let newItem= state.cart.filter((c) => c.id === action.payload.id ? (c.quantity = action.payload.value) : c.quantity)
                return { ...state, cart: [...state.cart, newItem ] };
            }*/
    }
};