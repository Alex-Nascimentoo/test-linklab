'use client'

import React, { useState } from 'react'
import '@/styles/header.scss';

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false)

  function toggleMenuView() {
    setIsMenuActive(!isMenuActive)
  }

  return (
    <header id={isMenuActive ? 'mobile-menu-activated' : ''}>
      <nav className='container'>
        <h1 id='logo'>Logo</h1>

        {/* Visible on tablet and larger screens */}
        <ul id='nav-links'>
          <li>Início</li>
          <li>Produtos</li>
          <li>Laudos</li>
          <li>Sobre nós</li>
          <li>Certificações</li>
          <li>Contato</li>
        </ul>

        <div id="nav-content">
          <div id="budget">
            <h2>I</h2>
            <p>Orçamento</p>
          </div>
          <div id="mobile-menu-btn">
            <h1 onClick={toggleMenuView}>=</h1>
          </div>
        </div>
      </nav>

      <section id="hero" className='container'>
        <h1>Qualidade e expertise em produtos <span>químicos e acessórios</span></h1>

        <p>
        Estamos preparados para te entender e atender da melhor forma para suprir todas as suas demandas em químicos e similares.
        </p>
      </section>

      <section id="mobile-menu-content" className='menu-activated'>
        <div className="container">
          <h1 className='mobile-menu-title'>Navegue por nosso site</h1>
          <nav id='mobile-menu-links'>
            <a href="">Início</a>
            <a href="">Laudos</a>
            <a href="">Sobre nós</a>
            <a href="">Certificações</a>
            <a href="">Contato</a>
          </nav>
          <h1 className='mobile-menu-title' id='itens-catalog-title'>Catálogo completo de itens para você</h1>
          <h2 className='mobile-menu-subtitle'>Laboratório</h2>
          <div id="lab-list" className='mobile-menu-grid'>
            <p>Equipamentos</p>
            <p>Termômetros</p>
            <p>Acessórios</p>
          </div>
          <h2 className="mobile-menu-subtitle">Utensílios</h2>
          <div id="utils-list" className='mobile-menu-grid'>
            <p>Inox e Ferragens</p>
            <p>Vidrarias</p>
            <p>Plásticos</p>
            <p>Porcelanas</p>
          </div>
        </div>

      </section>
    </header>
  )
}

export default Header
