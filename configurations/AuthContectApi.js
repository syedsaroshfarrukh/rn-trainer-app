import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuthState] = useState();

  // Get current auth state from AsyncStorage
  const getAuthState = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      let parsed = JSON.parse(user);
      let token = parsed.token;
      console.log("context Api Call", token);
      setAuthState(token);
    } catch (err) {
      setAuthState();
    }
  };

  useEffect(() => {
    getAuthState();
  }, []);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
