import React, { useContext } from 'react';
import { BookContext } from '../contexts/bookContext';
import { ThemeContext } from '../contexts/themeContext';

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
            <ul>
                {books.map(book => {
                    return (
                        <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>
                    );
                })}
            </ul>
        </div>
    );
}


// <li style={{ background: theme.ui }}>the way of kings</li>
// <li style={{ background: theme.ui }}>the name of the wind</li>
// <li style={{ background: theme.ui }}>the final empire</li>

export default BookList;