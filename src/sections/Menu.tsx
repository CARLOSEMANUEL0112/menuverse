import { useState } from 'react'
import { Plus, Check } from 'lucide-react'

interface MenuItem {
  id: number
  name: string
  category: string
  description: string
  price: string
  image: string
}

interface MenuProps {
  onAddToCart?: (product: MenuItem) => void
}

function Menu({ onAddToCart }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState('todos')
  const [addedItems, setAddedItems] = useState<{ [key: number]: boolean }>({})

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'burgers', label: 'Hambúrgueres' },
    { id: 'acompanhamentos', label: 'Acompanhamentos' },
    { id: 'bebidas', label: 'Bebidas' },
    { id: 'sobremesas', label: 'Sobremesas' },
  ]

  const menuItems: MenuItem[] = [
    // HAMBÚRGUERES
    {
      id: 101,
      name: 'Classique Cheese',
      category: 'burgers',
      description: 'Blend bovino 180g, queijo cheddar inglês, picles artesanal e molho de alho suave.',
      price: 'R$ 38,90',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop',
    },
    {
      id: 102,
      name: 'Bacon Blast',
      category: 'burgers',
      description: 'Blend bovino 180g, muito bacon crocante, cheddar duplo e geleia de pimenta.',
      price: 'R$ 42,90',
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=500&auto=format&fit=crop',
    },

    // ACOMPANHAMENTOS
    {
      id: 103,
      name: 'Batatas Trufadas',
      category: 'acompanhamentos',
      description: 'Rústicas e crocantes, azeitadas com azeite de trufas brancas e finalizadas com parmesão.',
      price: 'R$ 26,90',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=500&auto=format&fit=crop',
    },
    {
      id: 104,
      name: 'Onion Rings Gourmet',
      category: 'acompanhamentos',
      description: 'Anéis de cebola empanados na farinha panko com molho aioli da casa.',
      price: 'R$ 22,90',
      image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=500&auto=format&fit=crop',
    },

    // BEBIDAS
    {
      id: 105,
      name: 'Coca-Cola (Lata 350ml)',
      category: 'bebidas',
      description: 'Sabor original, servida trincando de gelada com rodela de limão.',
      price: 'R$ 9,90',
      image: 'https://i.pinimg.com/736x/9a/da/7c/9ada7c4863ff73d843fd9256fe1248c0.jpg',
    },
    {
      id: 106,
      name: 'Guaraná Antarctica (Lata 350ml)',
      category: 'bebidas',
      description: 'O autêntico sabor do guaraná brasileiro, super gelado.',
      price: 'R$ 8,90',
      image: 'https://i.pinimg.com/736x/f5/7f/cb/f57fcb2cb693db44e97deae59e5e1a44.jpg',
    },
    {
      id: 107,
      name: 'Sprite Lemon-Lime (Lata 350ml)',
      category: 'bebidas',
      description: 'Refrigerante refrescante sabor lima-limão bem gelado.',
      price: 'R$ 8,90',
      image: 'https://i.pinimg.com/736x/e3/68/03/e36803c8025c2158921e759325ebb6b5.jpg',
    },
    {
      id: 108,
      name: 'Soda Artesanal de Maçã Verde',
      category: 'bebidas',
      description: 'Infusão natural de maçã verde com água gaseificada e toque de hortelã.',
      price: 'R$ 14,90',
      image: 'https://i.pinimg.com/736x/9f/a0/e5/9fa0e5e4b920d2081c5cd0e3bf594216.jpg',
    },

    // SOBREMESAS
    {
      id: 109,
      name: 'Milkshake Salted Caramel',
      category: 'sobremesas',
      description: 'Sorvete artesanal de baunilha, calda de caramelo salgado e farofa de nozes.',
      price: 'R$ 24,90',
      image: 'https://i.pinimg.com/736x/5c/3c/8d/5c3c8d7db5b5078e0a8501ab060269c8.jpg',
    },
  ]

  const filteredItems = activeCategory === 'todos' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  const handleAddToCartClick = (item: MenuItem) => {
    if (onAddToCart) {
      onAddToCart(item)
    }

    setAddedItems(prev => ({ ...prev, [item.id]: true }))
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [item.id]: false }))
    }, 2000)
  }

  return (
    <section className="menu-section" id="cardapio" style={{ padding: '120px 7%', position: 'relative', background: '#090909' }}>
      
      {/* Linha Divisória Fina no Topo do Cardápio */}
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
        
        {/* Cabeçalho da Secção */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 500, margin: '0 0 16px 0', letterSpacing: '-1px', color: '#fff' }}>
            Sabores feitos para <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>surpreender.</span>
          </h2>
          <p style={{ color: '#aaa39a', fontSize: '15px', maxWidth: '580px', margin: '0 auto', lineHeight: '1.7' }}>
            Explore as nossas criações gastronómicas preparadas com ingredientes selecionados e técnicas artesanais.
          </p>
        </div>

        {/* Filtros de Categoria */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '60px' }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  background: isActive ? 'var(--gold)' : 'rgba(255, 255, 255, 0.02)',
                  color: isActive ? '#000' : 'var(--gold)',
                  border: isActive ? '1px solid var(--gold)' : '1px solid rgba(216, 170, 102, 0.2)',
                  padding: '10px 22px',
                  fontSize: '12px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit',
                }}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Grelha do Cardápio */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '25px' }}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              style={{
                background: 'rgb(17 17 17 / 60%)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                padding: '24px',
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
                transition: 'border-color 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(216, 170, 102, 0.4)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Imagem */}
              <div style={{ width: '110px', height: '110px', flexShrink: 0, overflow: 'hidden', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>

              {/* Informações */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 500, margin: 0, color: '#fff' }}>
                    {item.name}
                  </h3>
                  <span style={{ color: 'var(--gold)', fontFamily: "'Playfair Display', serif", fontSize: '16px', fontWeight: 600, whiteSpace: 'nowrap' }}>
                    {item.price}
                  </span>
                </div>
                
                <p style={{ color: '#aaa39a', fontSize: '12px', lineHeight: '1.6', margin: '0 0 10px 0' }}>
                  {item.description}
                </p>

                <button
                  onClick={() => handleAddToCartClick(item)}
                  style={{
                    alignSelf: 'flex-start',
                    background: 'transparent',
                    border: '1px solid rgba(216, 170, 102, 0.3)',
                    color: 'var(--gold)',
                    padding: '6px 14px',
                    fontSize: '10px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(216, 170, 102, 0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {addedItems[item.id] ? (
                    <>
                      <Check size={12} color="#4ade80" />
                      <span style={{ color: '#4ade80' }}>Adicionado</span>
                    </>
                  ) : (
                    <>
                      <Plus size={12} />
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

export default Menu