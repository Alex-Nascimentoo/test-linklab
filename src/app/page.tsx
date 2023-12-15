'use client'

import ProductCard from '@/components/productCard';
import '@/styles/page.scss';
import { useQuery } from '@tanstack/react-query';
import { MdOutlineScience } from "react-icons/md";
import { GiWaterBottle } from "react-icons/gi";
import { LiaToolsSolid } from "react-icons/lia";

type Product = {
  title: string;
  grade: number;
  price: number;
}

async function getProducts(): Promise<Product[]> {
  const result = await fetch('http://localhost:7000/products')
    .then(res => res.json())

  return result
}

export default function Home() {
  const { data } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: getProducts
  })

  return (
    <main>
      <section className="container" id='section-list'>
        <div className='section-card'>
          <p className="section-card-class">produtos</p>
          <div>
            {/* <h1>I</h1> */}
            <MdOutlineScience className="section-card-icon" />
            <h2>Vidrarias e Equipamentos</h2>
          </div>
        </div>
        
        <div className='section-card orange'>
          <p className="section-card-class">químicos</p>
          <div>
            {/* <h1>I</h1> */}
            <GiWaterBottle className="section-card-icon" />
            <h2>Materiais Químicos</h2>
          </div>
        </div>
        
        <div className='section-card'>
        <p className="section-card-class">laboratórios</p>
          <div>
            {/* <h1>I</h1> */}
            <LiaToolsSolid className="section-card-icon" />
            <h2>Ferramentas e utensílios</h2>
          </div>
        </div>
      </section>

      <section className="container">
        <h1 id="product-list-title">produtos</h1>

        <div id="product-list">
          { data?.map((p, index) => (
            <ProductCard
              key={index}
              title={p.title}
              grade={p.grade}
              price={p.price}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
