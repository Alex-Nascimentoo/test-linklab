import ProductCard from '@/components/productCard';
import '@/styles/page.scss';

export default function Home() {
  return (
    <main>
      <section className="container" id='section-list'>
        <div className='section-card'>
          <p className="section-card-class">produtos</p>
          <div>
            <h1>I</h1>
            <h2>Vidrarias e Equipamentos</h2>
          </div>
        </div>
        
        <div className='section-card orange'>
          <p className="section-card-class">químicos</p>
          <div>
            <h1>I</h1>
            <h2>Materiais Quimicos</h2>
          </div>
        </div>
        
        <div className='section-card'>
        <p className="section-card-class">laboratórios</p>
          <div>
            <h1>I</h1>
            <h2>Ferramentas e utensilios</h2>
          </div>
        </div>
      </section>

      <section className="container">
        <h1 id="product-list-title">produtos</h1>

        <div id="product-list">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </main>
  )
}
