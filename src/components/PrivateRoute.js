import React, { Fragment } from 'react';
import NavBar from './NavBar/NavBar';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = () => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? (
        <Fragment>
            <NavBar />
            <Outlet />
        </Fragment>
    ) : (
        <Navigate to="/login" replace />
    );
};

export default PrivateRoute;
