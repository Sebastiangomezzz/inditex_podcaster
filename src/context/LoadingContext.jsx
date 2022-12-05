import React, { createContext, useState } from "react";

export const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
});

export const LoadingContextProvider = ({ children }) => {
  const [isContextLoading, setIsContextLoading] = useState(false);
  const value = { isContextLoading, setIsContextLoading };
  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};
