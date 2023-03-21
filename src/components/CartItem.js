import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { AiFillDelete } from "react-icons/ai"
import { useGlobalContext } from '../context'
import Rating from './Rating'

const CartItem = ({ id, title, description, price, rating, thumbnail, item }) => {
    const { state, removeFromCart, changeQty }= useGlobalContext();
    const [value, setValue]= useState(item.quantity)

    const changeQuantity=(e)=>{
        setValue(e.target.value)
       // changeQty(id, value)
    }
    
    return (
        <div className='cart-item d-flex align-items-start justify-content-between my-2' >
            <img src={thumbnail} alt={title} style={{ width: 140, height: 80 }} className='pe-5' />
            <div className="cart-item-info pe-5" style={{ width: '40%'}}>
                <h3>{title}</h3>
                <p>$ {price}</p>
            </div>
            <Rating rating={ Math.floor(rating) } />
            <Form.Select style={{ width: '10%'}} className="mx-5" value={value} onChange={(e)=> changeQuantity(e)} >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Form.Select>
            <AiFillDelete style={{ fontSize: '25' }} onClick={()=> removeFromCart(id)} />
        </div>
    )
}

export default CartItem
