import { useState } from 'react'
import { Flame, ShoppingBag, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <header 
      className="site-header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        background: 'rgba(9, 9, 9, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '16px 7%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logotipo */}
      <a href="#inicio" className="brand" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
        <span className="brand-icon" style={{ color: 'var(--gold, #d8aa66)', display: 'flex', alignItems: 'center' }}>
          <Flame size={25} />
        </span>

        <span style={{ display: 'flex', flexDirection: 'column', color: '#fff', fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: '20px', lineHeight: '1.1' }}>
          MENU<span style={{ color: 'var(--gold, #d8aa66)', fontStyle: 'italic' }}>VERSE</span>
          <small style={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(216, 170, 102, 0.8)', textTransform: 'uppercase', fontFamily: 'sans-serif', fontWeight: 600, marginTop: '2px' }}>
            Gastronomia Experience
          </small>
        </span>
      </a>

      {/* Navegação Desktop (Visível apenas em computadores/notebooks) */}
      <nav className="navigation desktop-nav" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <a href="#inicio" style={{ color: '#aaa39a', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold, #d8aa66)'} onMouseLeave={(e) => e.currentTarget.style.color = '#aaa39a'}>Início</a>
        <a href="#destaques" style={{ color: '#aaa39a', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold, #d8aa66)'} onMouseLeave={(e) => e.currentTarget.style.color = '#aaa39a'}>Destaques</a>
        <a href="#cardapio" style={{ color: '#aaa39a', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold, #d8aa66)'} onMouseLeave={(e) => e.currentTarget.style.color = '#aaa39a'}>Cardápio</a>
        <a href="#contato" style={{ color: '#aaa39a', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold, #d8aa66)'} onMouseLeave={(e) => e.currentTarget.style.color = '#aaa39a'}>Contato</a>
      </nav>

      {/* Ações à Direita (Botão CTA de pedido + Botão Hambúrguer Mobile) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <a 
          href="#cardapio" 
          className="header-cta"
          style={{
            background: 'transparent',
            border: '1px solid rgba(216, 170, 102, 0.4)',
            color: 'var(--gold, #d8aa66)',
            padding: '10px 18px',
            fontSize: '11px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderRadius: '4px',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--gold, #d8aa66)'
            e.currentTarget.style.color = '#000'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--gold, #d8aa66)'
          }}
        >
          <ShoppingBag size={15} />
          <span>Fazer pedido</span>
        </a>

        {/* Botão Hambúrguer (Aparece apenas em telemóveis) */}
        <button
          onClick={toggleMenu}
          className="mobile-menu-btn"
          style={{
            background: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: 'var(--gold, #d8aa66)',
            padding: '8px',
            borderRadius: '6px',
            cursor: 'pointer',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Abrir Menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu Dropdown/Gaveta para Telemóveis */}
      {isMobileMenuOpen && (
        <div 
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: 'rgba(13, 13, 13, 0.96)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(216, 170, 102, 0.2)',
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxSizing: 'border-box',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)',
            zIndex: 999,
          }}
        >
          <a 
            href="#inicio" 
            onClick={closeMenu}
            style={{ color: '#fff', textDecoration: 'none', fontSize: '15px', fontWeight: 500, padding: '8px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
          >
            Início
          </a>
          <a 
            href="#destaques" 
            onClick={closeMenu}
            style={{ color: '#fff', textDecoration: 'none', fontSize: '15px', fontWeight: 500, padding: '8px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
          >
            Destaques
          </a>
          <a 
            href="#cardapio" 
            onClick={closeMenu}
            style={{ color: '#fff', textDecoration: 'none', fontSize: '15px', fontWeight: 500, padding: '8px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
          >
            Cardápio
          </a>
          <a 
            href="#contato" 
            onClick={closeMenu}
            style={{ color: '#fff', textDecoration: 'none', fontSize: '15px', fontWeight: 500, padding: '8px 0' }}
          >
            Contato
          </a>
        </div>
      )}

      {/* Regras CSS Responsivas para Alternar Visibilidade */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          .site-header {
            padding: 14px 5% !important;
          }
        }
      `}</style>
    </header>
  )
}