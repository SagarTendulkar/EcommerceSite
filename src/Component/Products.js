import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Products() {
  const [productDetails, setProductDetails] = useState([]);

  const getProductDetails = async() => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    setProductDetails(data)
    // console.log(data);
  }

  useEffect(() => {
    getProductDetails()
  },[])

  console.log(productDetails);

  return (
    <>
      <h2 className="d-flex justify-content-center my-3">Products</h2>
      <div className="row">
        {productDetails.map((product) =>(
          <div key={product.id} className="col-md-3 my-3 d-flex justify-content-center">
            <Link to={`/product/${product.id}`}>
            <div className="card" style={{width: "20rem"}}>
              <img src={product.image} className="img-fluid card-img-top p-3" style={{height:"20rem"}} alt="User"/>
              <div className="card-body">
                <h5 className="productName card-title">{product.title}</h5>
                <h3 className="card-text">${product.price}</h3>
                {/* <p className="card-text">{product.description}</p> */}
              </div>
              {/* <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul> */}
            </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Products