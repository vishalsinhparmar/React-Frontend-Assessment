import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail.jsx'
import { ProductContextprovider } from './components/context/ProductContextprovider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ProductContextprovider>
      <Router>
           <Routes>
                <Route path='/' element = {<App/>}/>
                <Route path='/:id' element = {<ProductDetail/>}/>

           </Routes>
      </Router>
    </ProductContextprovider>
  </StrictMode>
)
