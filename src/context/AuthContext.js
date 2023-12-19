import React, {createContext, useContext, useState} from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
    const storedAuth = localStorage.getItem('auth');
    const storedShelf = localStorage.getItem('shelfContent');

    const initialAuthState = storedAuth ? JSON.parse(storedAuth) : false;
    const initialShelfContent = storedShelf ? JSON.parse(storedShelf) : [];

    const [isAuthenticated, setIsAuthenticated] = useState(initialAuthState);
    const [shelfContent, setShelfContent] = useState(initialShelfContent);

    const login = () => {
        // Пример успешной аутентификации
        setIsAuthenticated(true);
        // Сохраняем статус аутентификации в локальное хранилище
        localStorage.setItem('auth', JSON.stringify(true));
    };

    const logout = () => {
        // Пример выхода из аккаунта
        setIsAuthenticated(false);
        setShelfContent([]);
        // Сохраняем обновленные данные в локальное хранилище
        localStorage.setItem('auth', JSON.stringify(false));
        localStorage.setItem('shelfContent', JSON.stringify([]));
    };

    const addToShelf = (book) => {
        // Добавление книги в полку
        setShelfContent((prevShelf) => [...prevShelf, book]);
        // Сохраняем обновленные данные в локальное хранилище
        localStorage.setItem('shelfContent', JSON.stringify([...shelfContent, book]));
    };

    const removeFromShelf = (bookId) => {
        // Удаление книги из полки по идентификатору
        const updatedShelf = shelfContent.filter((book) => book.id !== bookId);
        setShelfContent(updatedShelf);
        // Сохраняем обновленные данные в локальное хранилище
        localStorage.setItem('shelfContent', JSON.stringify(updatedShelf));
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, shelfContent, setShelfContent, addToShelf, removeFromShelf }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
