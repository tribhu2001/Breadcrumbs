import React, {useState, useEffect} from 'react';
import { Link } from 'react-router';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  
      useEffect(() => {
          fetch('https://dummyjson.com/products').then(res => res.json()).then((data) => {
              const products = data.products;
              setProducts(products)
          });
      }, [])
      return (
          <div className='home-page'>
              <h2>All Products</h2>
              <div className='products-grid'>
                  {products?.map((item) => {
                      return (<div className='products-item' key={item.id}>
                          <Link to={`/products/${item.id}`}>
                              <img src={item.thumbnail} />
                              <h3>{item.title}</h3>
                              <h3>${item.price}</h3>
                          </Link>
                      </div>)
                  })}
              </div>
          </div>
      )
}

export default ProductsList
