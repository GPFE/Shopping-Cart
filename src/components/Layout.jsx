import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import NavBar from './NavBar.jsx'
import App from '../App.jsx'
import LandingPage from './LandingPage.jsx'
import CartProvider from './CartContext.jsx'
import CartPage from "./CartPage.jsx"
import CartStepper from './CartStepper.jsx'
import PaymentPage from './PaymentPage.jsx'
import DeliveryPage from './DeliveryPage.jsx'
import ThanksPage from './ThanksPage.jsx'

export default function Layout() {
    const router = createBrowserRouter([
      ...["/", "home" ].map(path => {
        return {
          path: path,
          element: <>
            <NavBar />
            <LandingPage />
          </>
        }
      }),
      {
        path: "shop",
        element: <>
          <NavBar />
          <App />
          <Outlet />
        </>
      },
      {
        path: "cart",
        children: [
          {
            index: true,
            element: <>
              <NavBar />
              <CartStepper key={0} index={0} />
              <CartPage />
            </>
          },
          {
            path: "payment",
            element: <>
              <NavBar />
              <CartStepper key={1} index={1} />
              <PaymentPage />
            </>
          },
          {
            path: "delivery",
            element: <>
              <NavBar />
              <CartStepper key={2} index={2} />
              <DeliveryPage />
            </>
          }
        ]
      },
      {
        path: "thanks",
        element: <>
          <NavBar />
          <ThanksPage />
        </>
      }
    ])
    
    return(
      <CartProvider>
        <RouterProvider router={router}/>
      </CartProvider>
    )
}