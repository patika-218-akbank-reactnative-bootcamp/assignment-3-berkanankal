import React, {createContext, useState} from 'react';

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);

  console.log(user);

  const values = {
    user,
    setUser,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;
