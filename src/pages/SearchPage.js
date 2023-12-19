import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../styles/searchpage.css"
import AddForm from "../components/AddForm";
import {fetchBooks} from "../api-service/apiService";

const SearchPage = () => {
    const location = useLocation();
    const searchTerms = new URLSearchParams(location.search).get('q');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchBooks(searchTerms);
            setSearchResults(data);
        };

        if (searchTerms) {
            fetchData();
        }
    }, [searchTerms]);

    return (
        <div className={"main-search"}>
            <p className={"p"}>Search Results:</p>
            <ul>
                {searchResults.map((result) => (
                    <li key={result.id}>
                        <div>
                            {result.volumeInfo.imageLinks && (
                                <a href={result.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={result.volumeInfo.imageLinks.thumbnail}
                                        alt={`Cover for ${result.volumeInfo.title}`}
                                        className="book-cover"
                                    />
                                </a>
                            )}
                        </div>
                        <div>
                            <h3>{result.volumeInfo.title}</h3>
                            <p>Authors: {result.volumeInfo.authors?.join(', ')}</p>
                            <p>Published Date: {result.volumeInfo.publishedDate}</p>
                            <p className={"desc"}>Description: {result.volumeInfo.description}</p>
                            <p>Categories: {result.volumeInfo.categories?.join(', ')}</p>
                            <p>Rating: {result.volumeInfo.averageRating} ({result.volumeInfo.ratingsCount} ratings)</p>
                            <p>Language: {result.volumeInfo.language}</p>
                            {/* Убрана отдельная ссылка на Preview Link */}
                            <AddForm bookInfo={result} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchPage;
