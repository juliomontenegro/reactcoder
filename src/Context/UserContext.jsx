import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({});
UserContext.displayName = "UserContext";

export const UserProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);



  const cambiarNombre = () => {
    setData({
        "name": "Julio",
        "surname": "Montenegro",
        "mail": "jmontenegro0680@gmail.com"
    });
  };

  return (
    <UserContext.Provider value={{ data, error, isLoading, cambiarNombre }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);