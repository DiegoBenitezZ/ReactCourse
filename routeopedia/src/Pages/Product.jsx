import { useState } from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom'

function Product() {
  const [goToDetails, setGoToDetails] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      { goToDetails === true && <Navigate to={'/product/details/3'}/> }
      Product
      <button
        onClick={() => {
          navigate("/product/create");
        }}
      > Add Product</button>  
      <Link to={'/product/details/5'}>
        <button>Navigate to Product Detail - 5</button>
      </Link>
      <button
        onClick={() => setGoToDetails(() => true)}
      >Navigate to Product Detail - 3</button>
    </div>
  )
}

export default Product