import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addToCart } from './redux/types/ProductAction'

function Product() {
  const [product, setProduct] = useState({})
  const [isProductAdded, setIsProductAdded] = useState(false)
  const { id } = useParams()
  const dispatch = useDispatch()

  const getProductData = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setProduct(response.data)
  }
  console.log(product)
  useEffect(() => {
    getProductData();
  })

  return (
    <>
      <div className='container'>
        <h2>Product Page</h2>
        {
          Object.keys(product).length > 0 ? (
            <div className='row border border-primary mt-2'>
              <div className='col-md-6'>
                <img src={product.image} alt={product.title} className='img-fluid' />
              </div>
              <div className='col-md-6'>
                <div className='product_title'>
                  <h2>{product.title}</h2>
                </div>
                <div className='product_category'>
                  <h2>{product.category}</h2>
                </div>
                <div className='product_price'>
                  <span className='bg-primary text-white py-1 px-3'>Price : {product.price}</span>
                </div>
                <div className='product_price'>
                  <span className='my-2'>Description : {product.description}</span>
                </div>

                <div className='my-4'>
                  <button className='btn btn-primary' 
                  onClick={()=>{ 
                    dispatch(addToCart(product))
                    setIsProductAdded(true)
                  }}
                  >{isProductAdded ? 'Added':'Add to cart'}</button>
                </div>
              </div>
            </div>
          ) : ''
        }
      </div>
    </>
  )
}

export default Product