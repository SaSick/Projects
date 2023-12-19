const fetchBooks = async (searchTerms) => {
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&maxResults=20`);

        const data = await response.json();
        return data.items || [];
    } catch (error) {
        console.error('Error fetching search results:', error);
        return [];
    }
};

export { fetchBooks };