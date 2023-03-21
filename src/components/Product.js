import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useGlobalContext } from '../context';
import Rating from './Rating';

const Product = ({ id, title, description, price, rating, thumbnail, product }) => {

  const { state, addToCart, removeFromCart }= useGlobalContext();
  

  return (
    <div className='product'>
        <Card style={{ height: 700}}>
            <Card.Img variant='top' src={thumbnail} style={{ height: '22rem' }}/>
            <Card.Body>
                <Card.Title> <h3>{title}</h3> </Card.Title>
                <Card.Title> <h4>$ {price}</h4> </Card.Title>
                <Card.Text> {description}</Card.Text>
                <Card.Text> <Rating rating={ Math.floor(rating) }/> </Card.Text>
                
                {
                  state.cart.includes(product)?
                  <Button variant="danger" onClick={()=> removeFromCart(id)}>Remove from Cart</Button>:
                  <Button variant="primary" onClick={()=> addToCart(product)}>Add to Cart</Button>
                }
                
            </Card.Body>
            
        </Card>
      
    </div>
  )
}

export default Product
