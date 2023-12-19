import React from 'react';
import {useNavigate} from "react-router-dom";

const SearchForm = () => {

    const navigate = useNavigate();

    const handleSearch = (searchTerm) => {
        // Перенаправляем пользователя на страницу поиска
        if (searchTerm.trim() !== '') {
            // Перенаправляем пользователя на страницу поиска
            navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const searchTerm = e.target.elements.search.value;
                    handleSearch(searchTerm);
                }}
            >
                <input type="text" name="search" placeholder={"search.."} />
                <button type={"submit"}>Search</button>
            </form>
        </>
    );
};

export default SearchForm;