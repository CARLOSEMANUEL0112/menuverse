import { Phone } from 'lucide-react'
import { restaurantInfo } from '../data/products'

function Footer() {
  return (
    <footer style={{ position: 'relative', background: '#050505', padding: '80px 7% 40px 7%' }}>
      
      {/* Linha Divisória Fina no Topo do Footer */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '85%',
          maxWidth: '1200px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(216, 170, 102, 0.25), transparent)',
        }} 
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '50px' }}>
        
        {/* Parte Superior: Logo, Slogan, Links e Redes Sociais */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px' }}>
          
          {/* Logo e Descrição */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px' }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', fontWeight: 500, color: '#fff', letterSpacing: '-0.5px' }}>
              Menu<span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Verse</span>
            </span>
            <span style={{ fontSize: '10px', letterSpacing: '3px', color: 'rgba(216, 170, 102, 0.8)', textTransform: 'uppercase', fontWeight: 600 }}>
              Gastronomia Experience
            </span>
            <p style={{ color: '#888', fontSize: '13px', lineHeight: '1.6', margin: '8px 0 0 0' }}>
              Criando momentos memoráveis através de sabores autênticos e alta qualidade artesanal.
            </p>
          </div>

          {/* Links de Navegação Rápida */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '2px', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600 }}>
              Navegação
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#inicio" style={{ color: '#aaa39a', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'} onMouseLeave={(e) => e.currentTarget.style.color = '#aaa39a'}>Início</a>
              <a href="#destaques" style={{ color: '#aaa39a', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'} onMouseLeave={(e) => e.currentTarget.style.color = '#aaa39a'}>Destaques</a>
              <a href="#cardapio" style={{ color: '#aaa39a', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'} onMouseLeave={(e) => e.currentTarget.style.color = '#aaa39a'}>Cardápio</a>
              <a href="#contato" style={{ color: '#aaa39a', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'} onMouseLeave={(e) => e.currentTarget.style.color = '#aaa39a'}>Contato</a>
            </div>
          </div>

          {/* Redes Sociais e Contato no Rodapé */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '2px', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600 }}>
              Redes & Contato
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a 
                href={restaurantInfo.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#aaa39a', textDecoration: 'none', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#aaa39a'}
              >
                {/* Ícone SVG Oficial do Instagram */}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                {restaurantInfo.instagramUser}
              </a>
              <a 
                href={restaurantInfo.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#aaa39a', textDecoration: 'none', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#aaa39a'}
              >
                <Phone size={15} />
                {restaurantInfo.phone}
              </a>
            </div>
          </div>

        </div>

        {/* Parte Inferior: Copyright & Assinatura */}
        <div style={{ paddingTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ color: '#666', fontSize: '12px', margin: 0 }}>
            © {new Date().getFullYear()} MenuVerse. Todos os direitos reservados.
          </p>
          <p style={{ color: '#666', fontSize: '12px', margin: 0 }}>
            Desenvolvido por Carlos Emanuel.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer