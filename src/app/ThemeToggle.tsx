'use client';

import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
    const {setTheme } = useTheme();

    return (
        <>
            <button onClick={() => setTheme('light')} className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                ONE
            </button>
            <button onClick={() => setTheme('dark')} className="">TWO</button>
        </>
    )
}