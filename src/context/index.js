import React, { createContext, useContext } from "react";
import { api } from "../api/index";
const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);
export const AppProvider = ({ children }) => (
    <AppContext.Provider value={{ api }}>{children}</AppContext.Provider>
);
