import { useState } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

// Importação individual das 7 camadas exatas do hambúrguer
import paoTopo from '../assets/01_pao_de_cima.png'
import bacon from '../assets/02_bacon.png'
import cebola from '../assets/03_cebola.png'
import tomate from '../assets/04_tomate.png'
import salada from '../assets/05_salada.png'
import carneQueijo from '../assets/06_carne_com_queijo.png'
import paoBase from '../assets/07_pao_de_base.png'

function Hero() {
  const [isExploded, setIsExploded] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // Efeito Parallax suave ao mover o rato
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width - 0.5) * 20
    const y = ((e.clientY - top) / height - 0.5) * 20
    setMousePos({ x, y })
  }

  return (
    <section 
      className="hero" 
      id="inicio"
      style={{
        position: 'relative',
        overflow: 'hidden', // Garante que nenhuma camada sai para fora da secção ao fazer scroll
        width: '100%',
        minHeight: '100vh',
      }}
    >
      <div className="hero-glow" />

      <div className="hero-content">

        <h1>
          O sabor que
          <br />
          desperta os
          <br />
          <span>sentidos.</span>
        </h1>

        <p>
          Ingredientes selecionados, sabores intensos
          e uma experiência feita para surpreender.
        </p>

        <div className="hero-actions">
          <a href="#cardapio" className="primary-button">
            Explorar cardápio
            <ArrowUpRight size={18} />
          </a>

          <a href="#destaques" className="secondary-button">
            Descobrir sabores
          </a>
        </div>

      </div>

      <div 
        className="hero-visual" 
        aria-label="Apresentação do Hambúrguer Gourmet"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          setMousePos({ x: 0, y: 0 })
          setIsExploded(false)
        }}
        onMouseEnter={() => setIsExploded(true)}
      >
        <div 
          className="burger-container"
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Efeito Glow Dourado de Fundo */}
          <div className="burger-ambient-glow" />

          {/* 7 Camadas Explodidas Individualmente */}
          <div className={`burger-layers-wrapper ${isExploded ? 'exploded' : ''}`}>
            <img src={paoTopo} alt="Pão Topo" className="burger-layer layer-pao-topo" />
            <img src={bacon} alt="Bacon Crocante" className="burger-layer layer-bacon" />
            <img src={cebola} alt="Cebola Roxa" className="burger-layer layer-cebola" />
            <img src={tomate} alt="Tomate Fresco" className="burger-layer layer-tomate" />
            <img src={salada} alt="Salada Fresca" className="burger-layer layer-salada" />
            <img src={carneQueijo} alt="Carne e Queijo" className="burger-layer layer-carne" />
            <img src={paoBase} alt="Pão Base" className="burger-layer layer-pao-base" />
          </div>
        </div>
      </div>

      <a href="#destaques" className="scroll-indicator">
        <ArrowDown size={17} />
        <span>ROLE PARA DESCOBRIR</span>
      </a>
    </section>
  )
}

export default Hero