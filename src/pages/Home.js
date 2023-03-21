import React from 'react'
import Filter from '../components/Filter';
import Product from '../components/Product';
import { useGlobalContext } from '../context'

const Home = () => {
  const { state, dispatch } = useGlobalContext();
  const { products, loading } = state;
  return (
    <div className='home'>
      {
        loading ? <h1>Loading...</h1> :
          <div className="home-container">
            <Filter />
            <div className="products">
              {
                products.map((item) => {
                  return <Product key={item.id}
                    id={item.id}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    description={item.description}
                    price={item.price}
                    rating={item.rating}
                    product={item} />
                })
              }
            </div>
          </div>
      }
    </div>
  )
}

export default Home
