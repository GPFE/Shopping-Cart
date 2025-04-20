import { createContext } from "react";
import { useState } from 'react'

export const CartContext = createContext()

export default function CartProvider({children}) {
    const [ cart, setCart ] = useState({})

    const addToCart = (name, amount) => {
      let newCart = {}

      if (cart[name]) {
          newCart = ({ ...cart, ...{ [name]: cart[name] + amount }})
          setCart(newCart)
          return
      }

        newCart = ({...cart, [name]: amount})
        setCart(newCart)
    }

    const removeFromCart = (name, amount) => {
      let newCart = {}

      if (cart[name]) {
            if ((cart[name] - amount) > 0) {
                newCart = ({ ...cart, ...{ [name]: cart[name] - amount }})
                setCart(newCart)
                return
            }

            for (let productName in cart) {
                if (productName !== name) {
                    const value = cart[productName]
                    Object.assign(newCart, { [productName]: value })
                }
            }
            setCart(newCart)
      }
    }

    const getNumberOfItems = () => {
        if (Object.values(cart).length > 0) {
            return Object.values(cart).reduce((totalCount, currentValue) => totalCount + currentValue)
        }
        return 0
    }
    
    return(
        <CartContext value={{ cart, addToCart, getNumberOfItems, removeFromCart}}>
            {children}
        </CartContext>
    )
}