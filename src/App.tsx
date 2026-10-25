import { useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import Header from './components/Header'
import Hero from './sections/Hero'
import Featured from './sections/Featured'
import Menu from './sections/Menu'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import Cart, { type CartItem } from './components/Cart'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const handleAddToCart = (product: { id: string | number; name: string; price: string | number; image: string }) => {
    const numericPrice = typeof product.price === 'number' 
      ? product.price 
      : parseFloat(String(product.price).replace('R$', '').trim().replace(',', '.'))

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevItems, { id: product.id, name: product.name, price: numericPrice, quantity: 1, image: product.image }]
    })
  }

  const handleUpdateQuantity = (id: string | number, delta: number) => {
    setCartItems(prevItems =>
      prevItems
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta
            return newQty > 0 ? { ...item, quantity: newQty } : null
          }
          return item
        })
        .filter(Boolean) as CartItem[]
    )
  }

  const handleRemoveItem = (id: string | number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <main style={{ background: '#090909', minHeight: '100vh', color: '#fff' }}>
      <Header />

      <Hero />

      <Featured onAddToCart={handleAddToCart} />

      <Menu onAddToCart={handleAddToCart} />

      <Contact />

      <Footer />

      {totalItemsCount > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            background: 'var(--gold, #d8aa66)',
            color: '#000',
            border: 'none',
            borderRadius: '50px',
            padding: '14px 26px',
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            zIndex: 999,
            boxShadow: '0 8px 30px rgba(216, 170, 102, 0.35)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <ShoppingBag size={18} color="#000" />
          <span>Ver Carrinho ({totalItemsCount})</span>
        </button>
      )}

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </main>
  )
}

export default App