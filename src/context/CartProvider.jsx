import { useState } from "react";
import { primerContext } from "./CartContext";



export default function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  // Como agregar productos al carrito
  const addToCart = (product) => {
    setCarrito((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, count: p.count + 1 }
            : p
        );
      }
      return [...prev, { ...product, count: 1 }];
    });
  };

  const removeOneFromCart = (productId) => {
    setCarrito((prev) => {
      const existing = prev.find((p) => p.id === productId);
      if (!existing) return prev;

      if (existing.count === 1) {
        return prev.filter((p) => p.id !== productId);
      }

      return prev.map((p) =>
        p.id === productId
          ? { ...p, count: p.count - 1 }
          : p
      );
    });
  };

  const clearCart = () => {
    setCarrito([]);
  };

  const total = carrito.reduce(
    (acc, item) => acc + (item.count * item.price),0
  );




  return (
    <primerContext.Provider
      value={{ carrito, addToCart, removeOneFromCart, clearCart,total}}
    >
      {children}
    </primerContext.Provider>
  );
}