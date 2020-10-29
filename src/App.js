import React from 'react';
import BookList from './components/bookList';
import Navbar from './components/navbar';
import ThemeToggle from './components/themeToggle';
import AuthContextProvider from './contexts/authContext';
import BookContextProvider from './contexts/bookContext';
import ThemeContextProvider from './contexts/themeContext';

function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <AuthContextProvider>
                    <Navbar />
                    <BookContextProvider>
                        <BookList />
                    </BookContextProvider>
                    <ThemeToggle />
                </AuthContextProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
