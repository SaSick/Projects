import React from 'react';
import { useAuth } from '../context/AuthContext';
import RemoveBookButton from "../components/RemoveBookButton";

const MyShelf = () => {
    const { isAuthenticated, shelfContent } = useAuth();

    if (!isAuthenticated) {
        return <p className={"info"}>Please login to view your shelf.</p>;
    }

    return (
        <div className="main-shelf">
            <h1>My Shelf</h1>
            <p>Here is your bookshelf content...</p>
            {shelfContent.map((book) => (
                <div key={book.id}>
                    <div>
                        <a href={book.previewLink} target="_blank" rel="noopener noreferrer">
                            <img src={book.cover} alt={`Cover for ${book.title}`} className="book-cover" />
                        </a>
                    </div>
                    <div>
                        <h3>{book.title}</h3>
                        <p>Authors: {book.authors.join(', ')}</p>
                        <RemoveBookButton bookId={book.id} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyShelf;
