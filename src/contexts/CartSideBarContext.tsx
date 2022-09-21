import { createContext, ReactNode, useState } from "react";

interface CartSideBarContextType {
  isHidden: boolean;
  changeVisibility: () => void;
}

export const CartSideBarContext = createContext({} as CartSideBarContextType);

interface CartSideBarContextProviderProps {
  children: ReactNode;
}

export function CartSideBarContextProvider({
  children
}: CartSideBarContextProviderProps) {
  const [isHidden, setIsHidden] = useState(true);

  function changeVisibility() {
    setIsHidden((state) => {
      return !state;
    });
  }

  return (
    <CartSideBarContext.Provider value={{ isHidden, changeVisibility }}>
      {children}
    </CartSideBarContext.Provider>
  );
}
