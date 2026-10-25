import { useState, useEffect } from 'react'
import { X, ShoppingBag, Trash2, ArrowRight, Store, Bike, AlertCircle } from 'lucide-react'
import { restaurantInfo } from '../data/products'

export interface CartItem {
  id: string | number
  name: string
  price: number
  quantity: number
  image?: string
}

interface CartProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQuantity: (id: string | number, delta: number) => void
  onRemoveItem: (id: string | number) => void
}

function Cart({ isOpen, onClose, items = [], onUpdateQuantity, onRemoveItem }: CartProps) {
  const [customerName, setCustomerName] = useState('')
  const [customerAddress, setCustomerAddress] = useState('')
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery')
  const [errorMessage, setErrorMessage] = useState('')

  // Trava o scroll da página enquanto o carrinho está aberto
  useEffect(() => {
    if (!isOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen])

  if (!isOpen) return null

  const subtotal = items.reduce((acc, item) => acc + (Number(item.price) || 0) * (item.quantity || 1), 0)
  const deliveryFee = deliveryType === 'delivery' && subtotal > 0 ? restaurantInfo.deliveryFee : 0
  const total = subtotal + deliveryFee
  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0)

  const handleWhatsAppCheckout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!customerName.trim()) {
      e.preventDefault()
      setErrorMessage('Por favor, preencha o seu nome completo.')
      return
    }
    if (deliveryType === 'delivery' && !customerAddress.trim()) {
      e.preventDefault()
      setErrorMessage('Por favor, preencha o endereço de entrega.')
      return
    }
    setErrorMessage('')
  }

  const generateWhatsAppMessage = () => {
    const money = (v: number) => `R$ ${v.toFixed(2).replace('.', ',')}`
    const now = new Date()
    const data = now.toLocaleDateString('pt-BR')
    const hora = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })

    const e = restaurantInfo.orderEmoji
    const em = (icon: string) => (e ? `${icon} ` : '')

    const lines: string[] = []
    lines.push(`${em('🍔')}*NOVO PEDIDO - ${restaurantInfo.name.toUpperCase()}*`)
    lines.push(`${data} às ${hora}`)
    lines.push('')
    lines.push(`${em('👤')}*DADOS DO CLIENTE*`)
    lines.push(`Nome: ${customerName.trim()}`)
    lines.push(`Tipo: ${deliveryType === 'delivery' ? 'Entrega' : 'Retirada na loja'}`)
    if (deliveryType === 'delivery') {
      lines.push(`${em('📍')}Endereço: ${customerAddress.trim()}`)
    } else {
      lines.push(`${em('📍')}Retirar em: ${restaurantInfo.address.full}`)
    }
    lines.push('')
    lines.push(`${em('🧾')}*ITENS DO PEDIDO*`)
    items.forEach((item) => {
      const itemPrice = Number(item.price) || 0
      lines.push(`• ${item.quantity}x ${item.name} - ${money(itemPrice * item.quantity)}`)
    })
    lines.push('')
    lines.push(`${em('💰')}*RESUMO*`)
    lines.push(`Subtotal: ${money(subtotal)}`)
    if (deliveryType === 'delivery') {
      lines.push(`Taxa de entrega: ${money(deliveryFee)}`)
    }
    lines.push(`*Total: ${money(total)}*`)
    lines.push('')
    lines.push(`_Pedido feito pelo site ${restaurantInfo.name}_`)

    return encodeURIComponent(lines.join('\n'))
  }

  const whatsappCheckoutUrl = `https://api.whatsapp.com/send?phone=${restaurantInfo.whatsappNumber}&text=${generateWhatsAppMessage()}`

  return (
    <div 
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(6px)',
        zIndex: 2000,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <style>{`
        .cart-scroll { scrollbar-width: thin !important; scrollbar-color: #d8aa66 rgba(255,255,255,0.08) !important; }
        .cart-scroll::-webkit-scrollbar { display: block !important; width: 8px !important; }
        .cart-scroll::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
        .cart-scroll::-webkit-scrollbar-thumb { background: #d8aa66; border-radius: 8px; }
      `}</style>

      <div 
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          background: '#0d0d0d',
          borderLeft: '1px solid rgba(216, 170, 102, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        
        {/* Cabeçalho Fixo */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', padding: '18px 24px', background: '#0d0d0d', flexShrink: 0 }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ background: 'rgba(216, 170, 102, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(216, 170, 102, 0.2)' }}>
              <ShoppingBag size={22} color="var(--gold, #d8aa66)" />
            </div>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', color: '#fff', margin: 0, fontWeight: 700 }}>O seu pedido</h2>
              <span style={{ fontSize: '11px', color: '#888', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{totalItemsCount} ITENS SELECIONADOS</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', cursor: 'pointer', color: '#aaa', padding: '6px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Área Central com Scroll Unificado Abrangendo Itens e Formulário */}
        <div 
          className="cart-scroll"
          data-lenis-prevent
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          style={{ 
            flex: '1 1 0',
            overflowY: 'scroll', 
            minHeight: 0,
            overscrollBehavior: 'contain',
            WebkitOverflowScrolling: 'touch',
            padding: '20px 24px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px',
          }}
        >
          
          {/* Itens Escolhidos */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '1px', color: 'var(--gold, #d8aa66)', textTransform: 'uppercase', fontWeight: 600 }}>
              Itens Escolhidos
            </span>

            {items.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#777', padding: '30px 0', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                <ShoppingBag size={40} color="rgba(216, 170, 102, 0.2)" />
                <p style={{ fontSize: '13px', margin: 0 }}>O seu carrinho está vazio.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {items.map((item) => {
                  const priceNum = Number(item.price) || 0
                  return (
                    <div 
                      key={item.id} 
                      style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        borderRadius: '10px',
                        padding: '12px',
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {item.image && (
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          style={{ width: '56px', height: '56px', objectFit: 'cover', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }} 
                        />
                      )}
                      <div style={{ flex: 1 }}>
                        <h4 style={{ color: '#fff', fontSize: '13px', margin: '0 0 2px 0', fontWeight: 600 }}>{item.name}</h4>
                        <span style={{ color: 'var(--gold, #d8aa66)', fontSize: '13px', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
                          R$ {priceNum.toFixed(2)}
                        </span>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '6px', background: 'rgba(0, 0, 0, 0.3)' }}>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              style={{ background: 'transparent', border: 'none', color: '#fff', padding: '2px 8px', cursor: 'pointer', fontSize: '13px' }}
                            >-</button>
                            <span style={{ color: '#fff', fontSize: '12px', padding: '0 6px', fontWeight: 600 }}>{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              style={{ background: 'transparent', border: 'none', color: '#fff', padding: '2px 8px', cursor: 'pointer', fontSize: '13px' }}
                            >+</button>
                          </div>

                          <button 
                            onClick={() => onRemoveItem(item.id)}
                            style={{ background: 'transparent', border: 'none', color: '#e74c3c', cursor: 'pointer', display: 'flex', padding: '4px' }}
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Informações de Entrega (Obrigatórias) */}
          {items.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px', paddingBottom: '32px', flexShrink: 0 }}>
              <span style={{ fontSize: '11px', letterSpacing: '1px', color: 'var(--gold, #d8aa66)', textTransform: 'uppercase', fontWeight: 600 }}>
                Informações de Entrega (Obrigatório)
              </span>

              {/* Input Nome */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '11px', color: '#aaa' }}>Nome Completo *</label>
                <input 
                  type="text"
                  placeholder="Ex: Carlos Ribeiro"
                  value={customerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value)
                    if (errorMessage) setErrorMessage('')
                  }}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '10px 12px',
                    color: '#fff',
                    fontSize: '13px',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* Seletor Tipo de Entrega */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setDeliveryType('delivery')}
                  style={{
                    background: deliveryType === 'delivery' ? 'rgba(216, 170, 102, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${deliveryType === 'delivery' ? 'var(--gold, #d8aa66)' : 'rgba(255, 255, 255, 0.1)'}`,
                    borderRadius: '8px',
                    padding: '10px',
                    color: deliveryType === 'delivery' ? 'var(--gold, #d8aa66)' : '#aaa',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                  }}
                >
                  <Bike size={15} />
                  Entrega (+R$ {restaurantInfo.deliveryFee})
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryType('pickup')}
                  style={{
                    background: deliveryType === 'pickup' ? 'rgba(216, 170, 102, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${deliveryType === 'pickup' ? 'var(--gold, #d8aa66)' : 'rgba(255, 255, 255, 0.1)'}`,
                    borderRadius: '8px',
                    padding: '10px',
                    color: deliveryType === 'pickup' ? 'var(--gold, #d8aa66)' : '#aaa',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                  }}
                >
                  <Store size={15} />
                  Retirada
                </button>
              </div>

              {/* Input Endereço (Apenas se for delivery) */}
              {deliveryType === 'delivery' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label style={{ fontSize: '11px', color: '#aaa' }}>Endereço Completo (Rua, Número, Bairro) *</label>
                  <input 
                    type="text"
                    placeholder="Ex: Rua das Flores, 123 - Centro"
                    value={customerAddress}
                    onChange={(e) => {
                      setCustomerAddress(e.target.value)
                      if (errorMessage) setErrorMessage('')
                    }}
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      color: '#fff',
                      fontSize: '13px',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              )}

              {/* Mensagem de Erro de Validação */}
              {errorMessage && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(231, 76, 60, 0.15)', border: '1px solid rgba(231, 76, 60, 0.3)', padding: '8px 12px', borderRadius: '6px', color: '#e74c3c', fontSize: '12px' }}>
                  <AlertCircle size={14} />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Rodapé Fixo em Baixo */}
        {items.length > 0 ? (
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', padding: '16px 24px', background: '#0d0d0d', display: 'flex', flexDirection: 'column', gap: '8px', flexShrink: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#aaa39a', fontSize: '12px' }}>
              <span>Subtotal dos itens</span>
              <span>R$ {subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#aaa39a', fontSize: '12px' }}>
              <span>Taxa de entrega</span>
              <span>R$ {deliveryFee.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', fontSize: '15px', fontWeight: 700, marginTop: '2px', marginBottom: '8px' }}>
              <span>Total Geral</span>
              <span style={{ color: 'var(--gold, #d8aa66)' }}>R$ {total.toFixed(2)}</span>
            </div>

            <a
              href={whatsappCheckoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppCheckout}
              style={{
                width: '100%',
                background: 'var(--gold, #d8aa66)',
                color: '#000',
                padding: '14px',
                borderRadius: '8px',
                textAlign: 'center',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxSizing: 'border-box',
                boxShadow: '0 4px 20px rgba(216, 170, 102, 0.3)',
              }}
            >
              Finalizar Pedido no WhatsApp
              <ArrowRight size={16} />
            </a>
          </div>
        ) : null}

      </div>
    </div>
  )
}

export default Cart