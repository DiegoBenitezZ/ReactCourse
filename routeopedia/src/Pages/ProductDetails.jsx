import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      ProductDetails<br/>
      <p>ID: {id}</p>
    </div>
  )
}

export default ProductDetails