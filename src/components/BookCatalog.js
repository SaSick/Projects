import React, { useState, useEffect } from 'react';
import { fetchBooks } from '../api-service/apiService';
import BookList from './BookList'; // Импорт нового компонента

const BookCatalog = () => {
    const [categories] = useState([
        'Fiction',
        'Science',
        'History',
        'Technology',
        'Mystery',
    ]);

    const [booksByCategory, setBooksByCategory] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const books = await Promise.all(
                categories.map(async (category) => {
                    const searchTerms = `${category} books`;
                    const data = await fetchBooks(`${searchTerms}&maxResults=10`); // Установите maxResults в 15
                    return { category, books: data };
                })
            );

            const booksByCategoryObj = {};
            books.forEach(({ category, books }) => {
                booksByCategoryObj[category] = books;
            });

            setBooksByCategory(booksByCategoryObj);
        };

        fetchData();
    }, [categories]);

    return (
        <div>
            <h2>Book Catalog</h2>
            {categories.map((category) => (
                <BookList key={category} category={category} books={booksByCategory[category] || []} />
            ))}
        </div>
    );
};

export default BookCatalog;
