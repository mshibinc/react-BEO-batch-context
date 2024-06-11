import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css'
import { GlobelState } from './contextAPI/GlobelState'
import { contextReducer, contextState } from './contextAPI/Reducer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails';
function App() {
  const [count, setCount] = useState(0)

  return (
    <GlobelState initialState={contextState} reducer={contextReducer}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<ProductDetails />} />
          </Route>
        </Routes>
        {/* <Home/> */}
        {/* <Products /> */}
      </BrowserRouter>
    </GlobelState>
  )
}

export default App
