import React from 'react';
import '../styles/list.css';

const BookList = ({ category, books }) => (
    <div className="main-list">
        <h3>{category}</h3>
        <ul className={"ul"}>
            {books.map((book) => (
                <li key={book.id}>
                    <div className="elem">
                        <a
                            href={book.volumeInfo.previewLink || '#'} // Используйте previewLink, если доступен, в противном случае используйте '#' (пустая ссылка)
                            target="_blank" // Открывать ссылку в новой вкладке
                            rel="noopener noreferrer" // Рекомендуется для безопасности при открытии в новой вкладке
                        >
                            <img
                                src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192'}
                                alt={book.volumeInfo.title}
                                title={book.volumeInfo.title} // Добавлен title для подсказки
                            />
                        </a>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

export default BookList;
