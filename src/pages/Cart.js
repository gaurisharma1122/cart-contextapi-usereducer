import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import CartItem from '../components/CartItem';
import { useGlobalContext } from '../context'

const Cart = () => {
  const { state, removeFromCart } = useGlobalContext();
  const [cartTotal, setCartTotal]= useState(0)

  useEffect(()=>{
    if(state.cart.length===0){
      setCartTotal(0)
    }
    else{
      let totalAmount= state.cart.reduce((prev, curr)=> prev + Number(curr.product.price)*curr.quantity, 0);
      setCartTotal(totalAmount)
    }
    
  }, [state.cart])

  return (
    <div className='cart'>
      <div className="cart-container">
        <div className="cart-items">
          {
            state.cart.length ?
              <>
                <h2>Items- {state.cart.length}</h2>
                <ListGroup className='my-4'>
                  {
                    state.cart.map((item) => {
                      return <ListGroup.Item key={item.product.id}>
                        <CartItem id={item.product.id}
                          title={item.product.title}
                          description={item.product.description}
                          price={item.product.price}
                          rating={item.product.rating}
                          thumbnail={item.product.thumbnail} 
                          item={item}/>
                      </ListGroup.Item>
                    })
                  }
                </ListGroup>
                <h2 className='text-end mx-2'>Total Amount: $ {cartTotal}</h2>
              </>
              :
              <h1>No items in your cart</h1>
          }
        </div>
      </div>

    </div>
  )
}

export default Cart
