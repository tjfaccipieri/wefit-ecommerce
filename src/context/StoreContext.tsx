import { ReactNode, createContext, useContext, useState } from "react";

interface StoreProviderProps {
  children: ReactNode
}

interface StoreContextProps {
  // getQuant: (id: number) => number,
  cartItems: Array<any>
  increaseQuant: (id: number) => void
  decreaseQuant: (id: number) => void
  removeItem: (id: number) => void
}

interface CartItem {
  id: number,
  // title: string,
  // price:number,
  // image: string,
  qtd: number
}

const StoreContext = createContext({} as StoreContextProps)

export function useStore() {
  return useContext(StoreContext)
}

export function StoreProvider({children}: StoreProviderProps) {
  
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function increaseQuant(id: number) {
    setCartItems(currItems => {
      console.log('clicou');
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, {id, qtd: 1}]
      } else {
        return currItems.map(item => {
          if(item.id === id) {
            return {...item, qtd: item.qtd + 1}
          } else {
            return item
          }
        })
      }
    })
  }
  
  function decreaseQuant(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.qtd === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if(item.id === id) {
            return {...item, qtd: item.qtd - 1}
          } else {
            return item
          }
        })
      }
    })
  }

  function removeItem(id: number) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  return(
    <StoreContext.Provider value={{ increaseQuant, decreaseQuant, removeItem, cartItems}}>
      {children}
    </StoreContext.Provider>
  )
}