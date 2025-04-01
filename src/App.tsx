import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from './components/Header'
import { GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { store } from './store'
import Modal from './components/Modal'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
        <Modal />
      </BrowserRouter>
    </Provider>
  )
}

export default App
