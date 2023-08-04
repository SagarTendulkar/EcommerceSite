import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveFromCart } from './redux/types/ProductAction'


const Cart = () => {
    // we have a hook to get data from store
    // useSelector
    const cartData = useSelector((state) => state.productsData.cartData)
  const dispatch = useDispatch()
  const totalPrice = cartData.reduce((prevsValue, currentValue) => {
      return prevsValue + currentValue.price
    }, 0)

  return (
    <> 
    <h2 className='text-center py-4'>Cart</h2>
    <div className='product_total text-center'>
      <h6>Total Price: {totalPrice}</h6>
    </div>
    {
      cartData && cartData.length>0 ? (
       cartData.map((product) => (
        <div className='row mt-2 border p-4'>
            <div className='col-md-4'>
              <img src={product.image} className='img-fluid' alt={product.title} />
            </div>
            <div className='col-md-6'>
              <h3>Title : {product.title}</h3>
              <h5>{product.category}</h5>
              <p>{product.description}</p>
            </div>
            <div className='col-md-2'>
              <h5>Price: {product.price}</h5>
              <button className='btn btn-danger'
              onClick={()=>{
                dispatch(RemoveFromCart(product.id))
              }}
              >Remove</button>
            </div>

            
        </div>
       ))
      ): <p>please add some products to the cart</p>
    }
    </>
  )
}
export default Cart