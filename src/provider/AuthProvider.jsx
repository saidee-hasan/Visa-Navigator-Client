import React, { createContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext(null);

function AuthProvider({ children }) {
 
 
  const value = {
    
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;