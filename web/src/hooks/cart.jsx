import { useAuth } from "./auth";

import { createContext, useState, useEffect, useContext } from "react";

export const CartContext = createContext({});

function CartProvider({ children }) {
  const { user } = useAuth();

  const [cart, setCart] = useState([]);

  function addItemToCart(product, quantity = 1) {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);

      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  }

  function removeItemFromCart(productId) {
      setCart(prevCart => prevCart.filter(item => item.id !== productId));
  }

  function clearCart() {
    const confirm = window.confirm("Deseja realmente remover todos os produtos do carrinho?");

    if (confirm) {
      setCart([]);
    }
  }

  useEffect(() => {
    if (user) {
      const storedCart = localStorage.getItem(`@foodexplorer:cart:${user.id}`);
      setCart(storedCart ? JSON.parse(storedCart) : []);
    } else {
      setCart([]);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`@foodexplorer:cart:${user.id}`, JSON.stringify(cart));
    }
  }, [user, cart]);
  
  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  return context;
}

export { CartProvider, useCart };