import React, { createContext, type ReactNode } from 'react';
import { getItem, setItem } from '../../helpers/localStorage';

type ThemeType = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const initialTheme = getItem<ThemeType>('theme') || 'light';

  const [theme, setTheme] = React.useState<ThemeType>(initialTheme);

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  }

  const toggleTheme = (theme: ThemeType) => {
    const newTheme: ThemeType = theme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);

    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(newTheme);

    setItem<ThemeType>('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
