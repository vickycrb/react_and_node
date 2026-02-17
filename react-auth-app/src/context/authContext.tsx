// Context.js
import React, { createContext, useState } from 'react';
export const UserContext = createContext({ user: '', login: (_username:string) => {} });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState('');
 
   const login = (username:string) => {
    setUser( username);
    };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
