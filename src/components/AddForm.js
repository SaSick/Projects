import React from 'react';
import { useAuth } from '../context/AuthContext';

const AddForm = ({ bookInfo }) => {
    const { isAuthenticated, shelfContent, addToShelf } = useAuth();

    const handleAddBook = () => {
        if (!isAuthenticated) {
            alert("Please log in to add books to your shelf.");
            return;
        }

        if (bookInfo && bookInfo.volumeInfo) {
            const newBook = {
                id: bookInfo.id,
                title: bookInfo.volumeInfo.title,
                authors: bookInfo.volumeInfo.authors || [],
                cover: bookInfo.volumeInfo.imageLinks?.thumbnail || null,
                previewLink: bookInfo.volumeInfo.previewLink || null, // Добавляем previewLink
                // Другие свойства книги...
            };

            const isBookInShelf = shelfContent.some((book) => book.id === newBook.id);

            if (!isBookInShelf) {
                addToShelf(newBook);
            } else {
                alert("This book is already in your shelf!");
            }
        }
    };

    return (
        <div className={"div-btn"}>
            <form onSubmit={(e) => e.preventDefault()}>
                <button onClick={handleAddBook}>Add Book</button>
            </form>
        </div>
    );
};

export default AddForm;
