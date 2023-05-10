import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const signUp = async (data) => {
        try {
            const response = await axios.post("http://localhost:5001/api/users", data);

            if (response.status !== 200) {
                throw new Error("Signup failed!");
            }

            setIsAuthenticated(true);
        } catch (error) {
            console.error("Signup error:", error);
            throw error;
        }
    };

    const login = async (data) => {
        try {
            const response = await axios.get("http://localhost:5001/api/users/:id", data);

            if (response.status !== 200) {
                throw new Error("Login failed!");
            }

            setIsAuthenticated(true);
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    };

    const value = {
        isAuthenticated,
        signUp,
        login,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
