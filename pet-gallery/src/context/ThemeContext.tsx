import React, { createContext, useState, useContext } from 'react';

// Created two context:
// ThemeContext: to query the context state
// ThemeDispatchContext: to mutate the context state
const ThemeContext = createContext<boolean | undefined>(undefined);
const ThemeDispatchContext = createContext<React.Dispatch<React.SetStateAction<boolean>> | undefined>(undefined);

// A "provider" is used to encapsulate only the components that need the state in this context
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkTheme, setDarkTheme] = useState<boolean>(false); // Default theme is light

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeDispatchContext.Provider value={setDarkTheme}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

// Custom hooks to access theme state and dispatch
const useTheme = (): boolean => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const useThemeDispatch = (): React.Dispatch<React.SetStateAction<boolean>> => {
  const context = useContext(ThemeDispatchContext);
  if (context === undefined) {
    throw new Error('useThemeDispatch must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme, useThemeDispatch };
