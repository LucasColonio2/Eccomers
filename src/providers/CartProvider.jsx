import { useState } from "react";
import { primerContext } from "../context/CartContext";

export default function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  // Como agregar productos al carrito
  const addToCart = (product) => {
    setCarrito((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeOneFromCart = (productId) => {
    setCarrito((prev) => {
      const existing = prev.find((p) => p.id === productId);
      if (!existing) return prev;

      if (existing.quantity === 1) {
        return prev.filter((p) => p.id !== productId);
      }

      return prev.map((p) =>
        p.id === productId
          ? { ...p, quantity: p.quantity - 1 }
          : p
      );
    });
  };

  const clearCart = () => {
    setCarrito([]);
  };

  const total = carrito.reduce(
    (acc, item) => acc + (item.price || 0) * item.quantity,
    0
  );

  return (
    <primerContext.Provider
      value={{ carrito, addToCart, removeOneFromCart, clearCart, total }}
    >
      {children}
    </primerContext.Provider>
  );
}