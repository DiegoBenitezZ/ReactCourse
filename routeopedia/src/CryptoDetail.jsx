import React from 'react'
import { useParams } from 'react-router-dom'

function CryptoDetail() {
  const { cripto, id } = useParams();

  return (
    <div>
      <span>Cripto: {cripto}</span><br/>
      <span>Id: {id}</span>
    </div>
  )
}

export default CryptoDetail