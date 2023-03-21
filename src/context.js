import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

export const AppContext= createContext();

 const initialState= {
    loading: true,
    products: [],
    cart: []
 };
 

const AppProvider= ({ children })=>{

    const [state, dispatch]= useReducer(reducer, initialState);
    
    const fetchData= ()=>{
        fetch('https://dummyjson.com/products')
            .then(response=> response.json())
            .then(data=>{
                dispatch({ type: 'LOADING_COMPLETE', payload: false});
                dispatch({ type: 'SET_PRODUCTS', payload: data.products });
            });
     };

    const addToCart= (product)=>{
        dispatch({ type: 'ADD_TO_CART', payload: product });
    }

    const removeFromCart= (id)=>{
        dispatch({ type: 'REMOVE_FROM_CART', payload: id});
    }

    useEffect(()=>{
        fetchData();
    }, []);    
    
    return(
        <AppContext.Provider value={{ state, dispatch, addToCart, removeFromCart }}>
            { children }
        </AppContext.Provider>
    );
};
export default AppProvider;

export const useGlobalContext= ()=>{
    return useContext(AppContext);
}