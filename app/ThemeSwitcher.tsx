'use client';
import { useTheme } from "next-themes";
import { Building, Gamepad2 } from 'lucide-react';
const ThemeSwitcher = () => {
    const { setTheme, theme } = useTheme();
    return (
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="p-2 rounded-md bg-gray-200 dark:bg-gray-800">
            {theme === "light" ? <Gamepad2 size={20} /> : <Building size={20} />}
        </button>
    );
}

export default ThemeSwitcher;
