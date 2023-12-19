import React from 'react';
import {Navigate} from "react-router-dom";

const PrivateRoute = ({ element, ...rest }) => {
    const isAuthenticated = () => {
        // Здесь можно добавить логику проверки аутентификации (например, проверку токена или другие механизмы)
        // В данном примере всегда возвращает true для тестирования
        return true;
    };

    return isAuthenticated() ? (
        element
    ) : (
        <Navigate to="/loginpage" state={{ from: rest.location.pathname }}/>
    );
};

export default PrivateRoute;