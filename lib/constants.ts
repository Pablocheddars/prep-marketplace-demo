export const COLORS = {
  green: '#1BC47D',
  greenLight: '#E8F9F0',
  dark: '#1A1D23',
  sidebar: '#12141A',
  card: '#1E2028',
  border: '#2A2D35',
  text: '#F1F1F1',
  textSecondary: '#8B8D97',
  coral: '#FF6B6B',
  amber: '#F5A623',
  blue: '#4A9EFF',
} as const

export const PROVIDER = {
  name: 'ICB Food Service',
  contact: 'Albert Fresco',
  role: 'Subgerente Comercial',
  erp: 'relBase',
  lastSync: '2h',
  plan: 'Pro',
  clients: 203,
  rating: 4.8,
} as const

export const NAV_ITEMS = [
  { label: 'Dashboard', href: '/dashboard', icon: 'LayoutDashboard' },
  { label: 'Pedidos', href: '/pedidos', icon: 'ShoppingCart' },
  { label: 'Catálogo', href: '/catalogo', icon: 'Package' },
  { label: 'Ofertas', href: '/ofertas', icon: 'Tag' },
  { label: 'Clientes', href: '/clientes', icon: 'Users' },
  { label: 'Cross-sell', href: '/cross-sell', icon: 'TrendingUp' },
  { label: 'Licitaciones', href: '/licitaciones', icon: 'FileText' },
  { label: 'Analytics', href: '/analytics', icon: 'BarChart3' },
  { label: 'Configuración', href: '/configuracion', icon: 'Settings' },
] as const
