import React from 'react'
import '@/styles/productCard.scss'
import Image from 'next/image'

function ProductCard() {
  return (
    <div className='product-card'>
      <div className="img-wrapper">
        <Image
          src={'/lab.jpg'}
          alt='Lab picture'
          fill
          className='product-img'
        />
      </div>

      <div className="product-content">
        <div>
          <h2>Name here</h2>
          <p>Nota 9.0</p>
        </div>

        <h2>R$ 200,00</h2>
      </div>
    </div>
  )
}

export default ProductCard