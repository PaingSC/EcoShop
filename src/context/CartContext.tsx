import { createContext, useState, ReactNode } from "react";

interface CartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  cartCount: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  clearCartItems: () => void;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  cartCount: 0,
  isCartOpen: false,
  openCart: () => {},
  closeCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCartItems: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  // Handler: remove from the cart
  const removeFromCart = (id: string) => {
    setCartItems((addedItems) => addedItems.filter((item) => item.id !== id));
  };

  // Handler: add to the cart
  const addToCart = (product: Omit<CartItem, "quantity">) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Handler: update the item quantity
  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems((addedItems) =>
      addedItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  // Handle: clear cart Items
  const clearCartItems = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      // Provide Values
      value={{
        cartItems,
        addToCart,
        cartCount,
        isCartOpen,
        openCart,
        closeCart,
        removeFromCart,
        updateQuantity,
        clearCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
