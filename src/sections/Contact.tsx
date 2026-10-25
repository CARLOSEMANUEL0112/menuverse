import { MapPin, Clock, Phone, ArrowUpRight } from 'lucide-react'
import { restaurantInfo } from '../data/products'

function Contact() {
  return (
    <section id="contato" style={{ padding: '120px 7% 100px 7%', position: 'relative', background: '#090909' }}>
      
      {/* Linha Divisória Fina no Topo do Contato */}
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

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Cabeçalho da Seção */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ fontSize: '11px', letterSpacing: '3px', color: 'var(--gold)', fontWeight: 600, textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
            Gastronomia Experience
          </span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 500, margin: '0 0 16px 0', letterSpacing: '-1px', color: '#fff' }}>
            Visite-nos ou <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>peça online.</span>
          </h2>
          <p style={{ color: '#aaa39a', fontSize: '15px', maxWidth: '580px', margin: '0 auto', lineHeight: '1.7' }}>
            Estamos de portas abertas para lhe proporcionar momentos inesquecíveis ou entregar a melhor experiência no conforto da sua casa.
          </p>
        </div>

        {/* Grelha de Informações de Contato */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', justifyContent: 'center' }}>
          
          {/* Card 1: Localização */}
          <div 
            style={{ 
              background: 'rgb(17 17 17 / 60%)', 
              border: '1px solid rgba(255, 255, 255, 0.08)', 
              padding: '38px 32px', 
              borderRadius: '8px', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '20px', 
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(216, 170, 102, 0.4)'
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(216, 170, 102, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div>
              <div style={{ width: '48px', height: '48px', background: 'rgba(216, 170, 102, 0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(216, 170, 102, 0.25)', marginBottom: '20px' }}>
                <MapPin size={22} color="var(--gold)" />
              </div>
              <span style={{ fontSize: '10px', letterSpacing: '2px', color: 'var(--gold)', fontWeight: 600, textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                Endereço
              </span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', color: '#fff', margin: '0 0 8px 0' }}>{restaurantInfo.name}</h3>
              <p style={{ color: '#aaa39a', fontSize: '13px', lineHeight: '1.7', margin: 0 }}>
                {restaurantInfo.address.location}<br />{restaurantInfo.address.city}
              </p>
            </div>

            <div style={{ width: '100%', marginTop: '10px' }}>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantInfo.address.full)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: '1px solid rgba(216, 170, 102, 0.4)',
                  color: 'var(--gold)',
                  padding: '11px 20px',
                  fontSize: '11px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  boxSizing: 'border-box',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(216, 170, 102, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                Ver no Maps <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Card 2: Horário */}
          <div 
            style={{ 
              background: 'rgb(17 17 17 / 60%)', 
              border: '1px solid rgba(255, 255, 255, 0.08)', 
              padding: '38px 32px', 
              borderRadius: '8px', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '20px', 
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(216, 170, 102, 0.4)'
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(216, 170, 102, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div>
              <div style={{ width: '48px', height: '48px', background: 'rgba(216, 170, 102, 0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(216, 170, 102, 0.25)', marginBottom: '20px' }}>
                <Clock size={22} color="var(--gold)" />
              </div>
              <span style={{ fontSize: '10px', letterSpacing: '2px', color: 'var(--gold)', fontWeight: 600, textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                Funcionamento
              </span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', color: '#fff', margin: '0 0 8px 0' }}>Horários</h3>
              <p style={{ color: '#aaa39a', fontSize: '13px', lineHeight: '1.7', margin: 0 }}>
                {restaurantInfo.hours.weekdays}<br />
                {restaurantInfo.hours.weekend}
              </p>
            </div>

            <div style={{ width: '100%', marginTop: '10px' }}>
              <div 
                style={{
                  width: '100%',
                  background: 'rgba(216, 170, 102, 0.05)',
                  border: '1px solid rgba(216, 170, 102, 0.3)',
                  color: '#aaa39a',
                  padding: '11px 16px',
                  fontSize: '11px',
                  textAlign: 'center',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                }}
              >
                🟢 <span style={{ color: '#fff', fontWeight: 500 }}>Atendimento ativo</span> para pedidos online
              </div>
            </div>
          </div>

          {/* Card 3: Reservas, WhatsApp & Instagram */}
          <div 
            style={{ 
              background: 'linear-gradient(145deg, rgba(216, 170, 102, 0.08) 0%, rgba(17, 17, 17, 0.8) 100%)', 
              border: '1px solid rgba(216, 170, 102, 0.3)', 
              padding: '38px 32px', 
              borderRadius: '8px', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '20px', 
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(216, 170, 102, 0.6)'
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = '0 12px 35px -10px rgba(216, 170, 102, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(216, 170, 102, 0.3)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div>
              <div style={{ width: '48px', height: '48px', background: 'var(--gold)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Phone size={22} color="#000" />
              </div>
              <span style={{ fontSize: '10px', letterSpacing: '2px', color: 'var(--gold)', fontWeight: 600, textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                Atendimento Direto
              </span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', color: '#fff', margin: '0 0 8px 0' }}>Reservas & Social</h3>
              <p style={{ color: '#aaa39a', fontSize: '13px', lineHeight: '1.7', margin: 0 }}>
                WhatsApp: {restaurantInfo.phone}<br />
                Instagram: {restaurantInfo.instagramUser}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', marginTop: '10px' }}>
              {/* Botão WhatsApp */}
              <a 
                href={restaurantInfo.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '100%',
                  background: 'var(--gold)',
                  color: '#000',
                  padding: '12px 20px',
                  fontSize: '11px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  boxSizing: 'border-box',
                  transition: 'all 0.2s ease',
                }}
              >
                Falar no WhatsApp
                <ArrowUpRight size={14} />
              </a>

              {/* Botão Instagram Preenchido */}
              <a 
                href={restaurantInfo.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: '1px solid rgba(216, 170, 102, 0.5)',
                  color: 'var(--gold)',
                  padding: '11px 20px',
                  fontSize: '11px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  boxSizing: 'border-box',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(216, 170, 102, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                Siga no Instagram
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact