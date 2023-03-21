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
                let newCart= state.cart.filter((item)=> item.id != action.payload);
                return { ...state, cart: newCart };
            }
            break;
    }
};