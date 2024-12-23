import { createContext, useState } from "react";

const ToggleMenu = createContext("");

const ToggleContext = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ToggleMenu.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </ToggleMenu.Provider>
  );
};
export { ToggleContext, ToggleMenu };
