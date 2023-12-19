import React from 'react';
import { useAuth } from '../context/AuthContext';

const RemoveBookButton = ({ bookId }) => {
    const { isAuthenticated, removeFromShelf } = useAuth();

    const handleRemoveBook = () => {
        if (!isAuthenticated) {
            alert("Please log in to remove books from your shelf.");
            return;
        }

        // Вызываем функцию removeFromShelf, передавая идентификатор книги
        removeFromShelf(bookId);
    };

    return (
        <div onSubmit={(e) => e.preventDefault()}
              className={"div-btn"}>
            <button onClick={handleRemoveBook}>Remove Book</button>
        </div>
    );
};

export default RemoveBookButton;
