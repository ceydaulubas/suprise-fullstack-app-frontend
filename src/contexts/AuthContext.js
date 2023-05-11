import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null); // JWT token

    const signUp = async (data) => {
        try {
            const response = await axios.post("http://localhost:5001/api/auth/signup", data);

            if (response.status !== 200) {
                throw new Error("Signup failed!");
            }
            setToken(response.data.token); // Save the JWT token
            setIsAuthenticated(true);
            await login(data);
        } catch (error) {
            console.error("Signup error:", error);
            throw error;
        }
    };

    const login = async (data) => {
        try {
            const response = await axios.post("http://localhost:5001/api/auth/login", data);

            if (response.status !== 200) {
                throw new Error("Login failed!");
            }
            setToken(response.data.token); // Save the JWT token
            setIsAuthenticated(true);
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    };

    const logout = () => {
        setToken(null);
        setIsAuthenticated(false);

    };


    const value = {
        isAuthenticated,
        signUp,
        login,
        logout,
        token,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
