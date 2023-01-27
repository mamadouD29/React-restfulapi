import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from "./Rating";





const Product = ({data}) =>{
    return (
        <div>      
        <div className='media'>
                <img width={64} height={64} className = "mr-3" src={data.imageUrl} alt="imag" />
            
                <div className='media-body'>
                    <h5> {data.releasedDate} </h5>
                    <Rating rating = {data.rating} numOfReviews={data.numOfReviews} />
                    <p>{data.description}</p>
                </div>
            </div>
            </div>
    )
}


export default Product;