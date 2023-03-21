import React from 'react'
import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { FaShoppingCart } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Header = () => {

  const { state, removeFromCart } = useGlobalContext();
  return (
    <div className='header'>
      <Navbar bg='dark' variant='dark' style={{ height: 80 }} className='navbar'>
        <Container>
          <Navbar.Brand>
            <Link to="/"><h2>E-Shop</h2></Link>
          </Navbar.Brand>

          <Navbar.Text className='search'>
            <FormControl style={{ width: 500 }}
              placeholder='Search a product'
              className='m-auto' />
          </Navbar.Text>

          <Nav>
            <Dropdown >
              <Dropdown.Toggle variant='success' >
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge bg='success' style={{ fontSize: '18px', backgroundColor: 'transparent' }}>{state.cart.length}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: 350 }} className='cart-dropdown px-2'>
                {
                  state.cart.length ?
                    < div style={{ maxHeight: 400, overflow: 'auto' }}>
                      {
                        state.cart.map((item) => {
                          return (<Dropdown.Item key={item.product.id} className='d-flex align-items-center'>
                            <img src={item.product.thumbnail} alt={item.product.title} style={{ width: 70, height: 70, borderRadius: '50%', margin: '10px 0' }} />
                            <div className="item-info px-5" style={{ width: '80%'}}>
                              <h5>{item.product.title}</h5>
                              <span>$ {item.product.price}</span>
                            </div>
                            <AiFillDelete style={{ fontSize: '25'}} onClick={()=> removeFromCart(item.product.id)}/>
                          </Dropdown.Item>)
                        })
                      }
                      
                    </div> :
                    <p className='text-center mt-2'>No Items yet in your cart</p>
                }
                <Button variant='success' className='go-to-cart-btn mt-2' style={{ width: "100%" }}>
                        <Link to='/cart'>Go To Cart</Link>
                </Button>
              </Dropdown.Menu>
              
            </Dropdown>
          </Nav>

        </Container>
      </Navbar>
    </div>
  )
}

export default Header
