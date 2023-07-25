import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [sidebarDishes, setSidebarDishes] = useState([]);

  const addToSidebar = (dish) => {
    setSidebarDishes([...sidebarDishes, dish]);
  };

  return (
    <AppContext.Provider value={{ sidebarDishes, addToSidebar }}>
      {children}
    </AppContext.Provider>
  );
}