import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductDetail from './pages/ProductDetail'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/product/:productId', element: <ProductDetail /> }, // Correct placement
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
