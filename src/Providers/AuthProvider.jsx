import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLocalUser = localStorage.getItem("userData");
    const userData = getLocalUser ? JSON.parse(getLocalUser) : null;
    if (userData) {
      setUser(userData);
    }
  }, []);

  const authInfo = {
    // loading,
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
