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
              <Dropdown.Menu style={{ minWidth: 300 }} className='cart-dropdown'>
                {
                  state.cart.length ?
                    <>
                      {
                        state.cart.map((item) => {
                          return (<Dropdown.Item key={item.id} className='d-flex align-items-center'>
                            <img src={item.thumbnail} alt={item.title} style={{ width: 70, height: 70, borderRadius: '50%', margin: '10px 0' }} />
                            <div className="item-info px-5" style={{ width: '80%'}}>
                              <h5>{item.title}</h5>
                              <span>$ {item.price}</span>
                            </div>
                            <AiFillDelete style={{ fontSize: '25'}} onClick={()=> removeFromCart(item.id)}/>
                          </Dropdown.Item>)
                        })
                      }
                      <Button variant='success' className='go-to-cart-btn' style={{ width: "95%", margin: "10px 10px" }}>
                        <Link to='/cart'>Go To Cart</Link>
                      </Button>
                    </> :
                    <p className='text-center mt-2'>No Items yet in your cart</p>
                }

              </Dropdown.Menu>
            </Dropdown>
          </Nav>

        </Container>
      </Navbar>
    </div>
  )
}

export default Header
