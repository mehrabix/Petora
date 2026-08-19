import { colorScheme, useColorScheme } from 'nativewind';
import * as React from 'react';

type Theme = 'light' | 'dark' | 'system';

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
};

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

function resolveTheme(theme: Theme, system: 'light' | 'dark'): 'light' | 'dark' {
  return theme === 'system' ? system : theme;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>('system');
  const { colorScheme: systemColorScheme } = useColorScheme();
  const system = (systemColorScheme ?? 'light') as 'light' | 'dark';

  const setTheme = React.useCallback((nextTheme: Theme) => {
    setThemeState(nextTheme);
    if (nextTheme === 'light' || nextTheme === 'dark') {
      colorScheme.set(nextTheme);
    } else {
      colorScheme.set('system');
    }
  }, []);

  const value = React.useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme: resolveTheme(theme, system),
      setTheme,
    }),
    [theme, system, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
