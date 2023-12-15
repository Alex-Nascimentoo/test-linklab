import React from 'react'
import '@/styles/productCard.scss'
import Image from 'next/image'

type ProductCardProps = {
  title: string;
  grade: number;
  price: number;
}

const Money = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function ProductCard({ title, grade, price }: ProductCardProps) {
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
          <h2>{ title }</h2>
          <p>Nota { grade.toFixed(1) }</p>
        </div>

        <h2 id='price'>{ Money.format(price) }</h2>
      </div>
    </div>
  )
}

export default ProductCard