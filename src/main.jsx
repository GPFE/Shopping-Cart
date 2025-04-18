import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LandingPage from './components/LandingPage.jsx'
import { ChakraProvider } from "@chakra-ui/react"
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  ...["/", "home" ].map(path => {
    return {
      path: path,
      element: <LandingPage />
    }
  })

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </StrictMode>,
)
