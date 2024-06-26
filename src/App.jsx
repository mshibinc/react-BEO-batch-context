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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DropZone from './pages/DropZone';
function App() {
  const [count, setCount] = useState(0)
  const Global = createGlobalStyle`
  html {
    font-family: ${(p) =>
      p.theme
        .fontFamily}, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
  }
  body {
    background: ${(p) => p.theme.colorBackground};
    color: ${(p) => p.theme.colorText};
  }
`;
  return (
    <ThemeProvider theme={theme} >
      <Global />
      <GlobelState initialState={contextState} reducer={contextReducer}>
      <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" >
              <Route index element={<Home />} />
              <Route path='products' element={<Products />} />
              <Route path='products/:id' element={<ProductDetails />} />
              <Route path='cart' element={<Cart />} />
              <Route path='formik-form' element={<FormikForm />} />
              <Route path='drop-zone' element={<DropZone />} />

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
