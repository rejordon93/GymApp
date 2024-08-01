import { useContext } from "react";
import { AppContext } from "../context/AppContext"; // Adjust the import path as needed

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
