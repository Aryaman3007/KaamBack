import React, { createContext, useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

interface User {
    // Define user properties here
}

interface AuthContextProps {
    user: User | null;
    token: string | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    }, [token]);

    const login = async (email: string, password: string) => {
        try {
            const res: AxiosResponse<{ token: string; user: User }> = await axios.post('/v1/auth/login', { email, password });
            setToken(res.data.token);
            localStorage.setItem('token', res.data.token);
            setUser(res.data.user);
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    const signup = async (email: string, password: string) => {
        try {
            const res: AxiosResponse<{ token: string; user: User }> = await axios.post('/v1/auth/signup', { email, password });
            setToken(res.data.token);
            localStorage.setItem('token', res.data.token);
            setUser(res.data.user);
        } catch (error) {
            console.error('Signup error:', error);
            throw error;
        }
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
