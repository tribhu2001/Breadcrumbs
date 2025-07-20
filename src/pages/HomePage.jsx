import React, { useEffect, useState } from 'react'
import "../App.css"
import { Link } from 'react-router';

const HomePage = () => {
    const [trendingproducts, setTrendingProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products').then(res => res.json()).then((data) => {
            const trendingProducts = data.products.slice(0, 6);
            setTrendingProducts(trendingProducts)
        });
    }, [])
    return (
        <div className='home-page'>
            <h2>Home Page</h2>
            <h3>Trending products 🔥</h3>
            <div className='products-grid'>
                {trendingproducts?.map((item) => {
                    return (<div className='products-item' key={item.id}>
                        <Link to={`/products/${item.id}`}>
                            <img src={item.thumbnail} />
                            <h3>{item.title}</h3>
                            <h3>${item.price}</h3>
                        </Link>
                    </div>)
                })}
            </div>
            <Link to="/products">
                <button style={{ width: "100%", height: "30px" }}>View All Products</button>
            </Link>
        </div>
    )
}

export default HomePage
