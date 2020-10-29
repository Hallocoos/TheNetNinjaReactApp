import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'qwer', id: 1},
        {title: 'asdf', id: 2},
        {title: 'zxcv', id: 3},
        {title: '1234', id: 4},
    ])
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;