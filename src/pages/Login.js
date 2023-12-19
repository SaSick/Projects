import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        // Логика аутентификации
        login();
        // Перенаправление на предыдущую страницу (или на /shelf, если предыдущей нет)
        navigate('/shelf');
    };

    const {logout} = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    return (
        <div className="main-log">
            <h1>Login</h1>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Log out</button>
        </div>
    );
};

export default Login;
