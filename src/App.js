import React from 'react';
import BookList from './components/bookList';
import Navbar from './components/navbar';
import ThemeToggle from './components/themeToggle';
import AuthContextProvider from './contexts/authContext';
import ThemeContextProvider from './contexts/themeContext';

function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <AuthContextProvider>
                    <Navbar />
                    <BookList />
                    <ThemeToggle />
                </AuthContextProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
