import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './components/Footer'
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
      <Cart />
    </BrowserRouter>
  )
}

export default App
