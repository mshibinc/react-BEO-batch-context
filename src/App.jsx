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
import Cart from './pages/cart/Cart';
import FormikForm from './pages/formik/FormikForm';
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from './utils/theme';
function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <GlobelState initialState={contextState} reducer={contextReducer}>
        <BrowserRouter>
          <Routes>
            <Route path="/" >
              <Route index element={<Home />} />
              <Route path='products' element={<Products />} />
              <Route path='products/:id' element={<ProductDetails />} />
              <Route path='cart' element={<Cart />} />
              <Route path='formik-form' element={<FormikForm />} />

            </Route>
          </Routes>
          {/* <Home/> */}
          {/* <Products /> */}
        </BrowserRouter>
      </GlobelState>
    </ThemeProvider>
  )
}

export default App
