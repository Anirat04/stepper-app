import { createContext, useCallback, useEffect, useState } from "react";
// import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sessionData, setSessionData] = useState(null);

    useEffect(() => {
        const getLocalUser = localStorage.getItem('userData');
        const userData = getLocalUser ? JSON.parse(getLocalUser) : null;
        if (userData) {
            setUser(userData);
        }
    }, [])

    // Code for getting session data starts here ---- by POST request via passing the parameters as user email and session id
    const getSessionData = useCallback(async () => {
        try {
            const sessionResponse = await fetch('https://api-doctors24.duckdns.org/accounts/dashboard', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user?.sessionid}`,
                },
                body: JSON.stringify({ email: user?.email }),
            });

            if (!sessionResponse.ok) {
                throw new Error('Failed to perform the session request');
            }
            const sessionResponseData = await sessionResponse.json();
            setSessionData(sessionResponseData.data)
            // console.log(sessionResponseData);
        } catch (error) {
            console.error('Error fetching session data:', error);
        }
    }, [user?.sessionid, user?.email]);

    useEffect(() => {
        setLoading(true)
        getSessionData()
    }, [getSessionData])
    // Code for getting session data ends here 


    const authInfo = {
        loading,
        user,
        sessionData,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
// AuthProvider.propTypes = {
//     children: PropTypes.node,
// };