import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:opacity-80 transition"
        >
            {darkMode ? <FaSun /> : <FaMoon />}
            
        </button>
    );
}

export default ThemeToggle;
