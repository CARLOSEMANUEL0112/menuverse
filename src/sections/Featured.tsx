import { useState } from 'react'
import { Plus, Check, Star } from 'lucide-react'

interface FeaturedItem {
  id: number
  name: string
  category: string
  description: string
  price: string
  rating: string
  image: string
}

interface FeaturedProps {
  onAddToCart?: (product: { id: number; name: string; price: string; image: string }) => void
}

function Featured({ onAddToCart }: FeaturedProps) {
  const [addedItems, setAddedItems] = useState<{ [key: number]: boolean }>({})

  const featuredItems: FeaturedItem[] = [
    {
      id: 201,
      name: 'Classique Cheese',
      category: 'Especial da Casa',
      description: 'Blend bovino 180g, queijo cheddar inglês, picles artesanal e molho de alho suave.',
      price: 'R$ 38,90',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop',
    },
    {
      id: 202,
      name: 'Explosão de Bacon',
      category: 'Mais Vendido',
      description: 'Blend bovino 180g, muito bacon crocante, cheddar duplo e geleia de pimenta.',
      price: 'R$ 42,90',
      rating: '5.0',
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=500&auto=format&fit=crop',
    },
  ]

  const handleAddToCartClick = (item: FeaturedItem) => {
    if (onAddToCart) {
      onAddToCart(item)
    }

    setAddedItems(prev => ({ ...prev, [item.id]: true }))
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [item.id]: false }))
    }, 2000)
  }

  return (
    <section className="featured-section" id="destaques" style={{ padding: '100px 7%', position: 'relative' }}>
      
      {/* Linha Divisória Fina idêntica à do Menu */}
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

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Cabeçalho da Secção */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 500, margin: 0, letterSpacing: '-1px', color: '#fff' }}>
            Os favoritos da <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>casa.</span>
          </h2>
        </div>

        {/* Grelha de Destaques */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 420px))', gap: '35px', justifyContent: 'center' }}>
          {featuredItems.map((item) => (
            <div
              key={item.id}
              style={{
                background: 'rgb(17 17 17 / 70%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                borderRadius: '8px',
                transition: 'border-color 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(216, 170, 102, 0.4)'
                e.currentTarget.style.transform = 'translateY(-5px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', letterSpacing: '2px', color: 'var(--gold)', fontWeight: 600, textTransform: 'uppercase' }}>
                  {item.category}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#e0d8ce' }}>
                  <Star size={13} fill="var(--gold)" color="var(--gold)" />
                  <span>{item.rating}</span>
                </div>
              </div>

              <div style={{ width: '100%', height: '220px', overflow: 'hidden', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)', background: '#000' }}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 500, margin: 0, color: '#fff' }}>
                  {item.name}
                </h3>
                <p style={{ color: '#aaa39a', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                  {item.description}
                </p>
              </div>

              {/* Rodapé alinhado lado a lado com largura 100% */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ color: 'var(--gold)', fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 600 }}>
                  {item.price}
                </span>

                <button
                  onClick={() => handleAddToCartClick(item)}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(216, 170, 102, 0.4)',
                    color: 'var(--gold)',
                    padding: '10px 20px',
                    fontSize: '11px',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    borderRadius: '4px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(216, 170, 102, 0.15)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
                >
                  {addedItems[item.id] ? (
                    <>
                      <Check size={14} color="#4ade80" />
                      <span style={{ color: '#4ade80' }}>Adicionado</span>
                    </>
                  ) : (
                    <>
                      <Plus size={14} />
                      Adicionar
                    </>
                  )}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Featured