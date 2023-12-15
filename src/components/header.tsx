'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import '@/styles/header.scss';
import { BsFileText, BsThermometerLow } from 'react-icons/bs'
import { CgMenuRightAlt } from "react-icons/cg"
import { PiSlidersHorizontal } from "react-icons/pi";
import { GiProtectionGlasses } from "react-icons/gi";
import { FaRegSquare } from "react-icons/fa";

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [isDropdownActive, setIsDropdownActive] = useState(false)

  function toggleMobileMenuView() {
    setIsMenuActive(!isMenuActive)
    
    document.querySelector('body')?.classList.toggle("mobile-menu-active")
  }

  function toggleDropdownMenuView() {
    setIsDropdownActive(!isDropdownActive)
  }

  return (
    <header id={isMenuActive ? 'mobile-menu-activated' : ''}>
      <nav className='container'>
        <div id='logo'>
          <Image
            priority
            src='/logo-halogenn.svg'
            alt='Halogenn logo'
            fill
          />
        </div>

        {/* Visible on tablet and larger screens */}
        <ul id='nav-links'>
          <li>Início</li>
          <li onClick={toggleDropdownMenuView}>Produtos</li>
          <li>Laudos</li>
          <li>Sobre nós</li>
          <li>Certificações</li>
          <li>Contato</li>
        </ul>

        <div id="nav-content">
          <div id="budget">
            {/* <h2>I</h2> */}
            <BsFileText id="budget-icon" />
            <p>Orçamento</p>
          </div>
            <CgMenuRightAlt
              id="mobile-menu-btn"
              onClick={toggleMobileMenuView}
            />
          {/* <div id="mobile-menu-btn">
          </div> */}
        </div>
      </nav>

      <div className={`container ${isDropdownActive ? 'dropdown-active' : 'dropdown-hidden'}`} id='dropdown-options'>
        <h2 className='' id='dropdown-title'>Catálogo completo de itens para você</h2>

        <div className='dropdown-block'>
          <h3 className='menu-subtitle'>Laboratório</h3>
          <div id="lab-list" className='dropdown-grid'>
            <p>
              <PiSlidersHorizontal className="dropdown-icon" />
              Equipamentos
            </p>
            <p>
              <BsThermometerLow clasName="dropdown-icon" />
              Termômetros
            </p>
            <p>
              <GiProtectionGlasses className="dropdown-icon" />
              Acessórios
            </p>
          </div>
        </div>

        <div className="dropdown-block">
          <h3 className="menu-subtitle">Utensílios</h3>
          <div id="utils-list" className='dropdown-grid'>
            <p>
              <FaRegSquare className="dropdown-icon" />
              Inox e Ferragens
            </p>
            <p>Vidrarias</p>
            <p>Plásticos</p>
            <p>Porcelanas</p>
          </div>
        </div>
      </div>

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
