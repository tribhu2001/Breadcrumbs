import React, { useState, useEffect } from 'react'
import { data, useParams } from 'react-router'

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`).then(res => res.json()).then((data) => {
            setProduct(data);
            console.log(data);
        });
    }, [])

    return (
        <>
        <h2>Product Details</h2>
        <div className='product-details' style={{ display: "flex" }}>
            <img src={product.thumbnail}></img>
            <div>
                <div>{product.title}</div>
                <p>${product.price}</p>
                <p>{product.description}</p>
                <p>Warranty: {product.warrantyInformation}</p>
                <p>Delivery Info: {product.shippingInformation}</p>
            </div>
        </div>
        </>
    )
}

export default ProductDetails
