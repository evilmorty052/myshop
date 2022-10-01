import React from 'react';
// import Link from 'next/link';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { urlFor,client } from '../lib/client';

let products =''
const Product =  () =>{
  products ?( {  products: { image, name, slug, price } }) => {
    const stuff =[];
    const query = '*[_type == "product"][0]{image,name,details,price}';
    const [products, SetProducts] = useState(null);
    
    
    
    useEffect(()=>{
      
    
      client.fetch(
        query
        .then(data =>(SetProducts(data)))

        
        
      )
      
      console.log(query)
    
      // products ? console.log(products) : console.log('notfound')
    
    
    
    },)
       
      return (
        <div>
          {products ? 
            <div className="product-card">
              {/* <img 
                src={products?(urlFor(products.image && products.image[0])):{}}
                width={250}
                height={250}
                className="product-image"
              /> */}
              <p className="product-name">{products.name}</p>
              <p className="product-price">${products.price}</p>
            </div>
          : "okay"}
        </div>
      )
    } : () =>{
    
      return(
        <div>
          <h1>yes</h1>
        </div>
      )
    }
} 

export default Product