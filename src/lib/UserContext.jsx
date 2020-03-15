import React, { createContext, useState } from 'react';

const UserContext = createContext({
  user: null,
  setUser: () => {},
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const value = {
    user: user,
    setUser: setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const UserConsumer = UserContext.Consumer;

export default UserContext;
export { UserProvider, UserConsumer };
