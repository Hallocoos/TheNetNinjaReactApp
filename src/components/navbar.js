import React, { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import { ThemeContext } from '../contexts/themeContext';

const Navbar = () => {
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
                { isAuthenticated ? 'Logged In' : 'Logged out' }
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;
