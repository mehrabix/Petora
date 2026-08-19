import { colorScheme, useColorScheme, vars } from 'nativewind';
import * as React from 'react';
import { View } from 'react-native';

export type ThemeMode = 'light' | 'dark' | 'system';

export type AccentName =
  | 'zinc'
  | 'slate'
  | 'rose'
  | 'orange'
  | 'amber'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'blue'
  | 'violet'
  | 'purple';

type AccentVars = {
  light: Record<string, string>;
  dark: Record<string, string>;
};

const accents: Record<AccentName, AccentVars> = {
  zinc: {
    light: {
      '--primary': '240 5.9% 10%',
      '--primary-foreground': '0 0% 98%',
      '--ring': '240 5.9% 10%',
    },
    dark: {
      '--primary': '0 0% 98%',
      '--primary-foreground': '240 5.9% 10%',
      '--ring': '240 4.9% 83.9%',
    },
  },
  slate: {
    light: {
      '--primary': '222 47% 11%',
      '--primary-foreground': '210 40% 98%',
      '--ring': '222 47% 11%',
    },
    dark: {
      '--primary': '210 40% 96%',
      '--primary-foreground': '222 47% 11%',
      '--ring': '214 32% 91%',
    },
  },
  rose: {
    light: {
      '--primary': '346 77% 50%',
      '--primary-foreground': '0 0% 100%',
      '--ring': '346 77% 50%',
    },
    dark: {
      '--primary': '350 89% 60%',
      '--primary-foreground': '0 0% 100%',
      '--ring': '350 89% 60%',
    },
  },
  orange: {
    light: {
      '--primary': '24 95% 53%',
      '--primary-foreground': '0 0% 100%',
      '--ring': '24 95% 53%',
    },
    dark: {
      '--primary': '20 90% 52%',
      '--primary-foreground': '0 0% 100%',
      '--ring': '20 90% 52%',
    },
  },
  amber: {
    light: {
      '--primary': '38 92% 50%',
      '--primary-foreground': '24 30% 12%',
      '--ring': '38 92% 50%',
    },
    dark: {
      '--primary': '43 96% 56%',
      '--primary-foreground': '24 30% 12%',
      '--ring': '43 96% 56%',
    },
  },
  emerald: {
    light: {
      '--primary': '152 58% 42%',
      '--primary-foreground': '0 0% 100%',
      '--ring': '152 58% 42%',
    },
    dark: {
      '--primary': '160 84% 39%',
      '--primary-foreground': '0 0% 100%',
      '--ring': '160 84% 39%',
    },
  },
  teal: {
    light: {
      '--primary': '172 66% 40%',
      '--primary-foreground': '0 0% 100%',
      '--ring': '172 66% 40%',
    },
    dark: {
      '--primary': '172 66% 50%',
      '--primary-foreground': '0 0% 100%',
      '--ring': '172 66% 50%',
    },
  },
  cyan: {
    light: {
      '--primary': '189 94% 43%',
      '--primary-foreground': '0 0% 100%',
      '--ring': '189 94% 43%',
    },
    dark: {
      '--primary': '187 92% 48%',
      '--primary-foreground': '0 0% 100%',
      '--ring': '187 92% 48%',
    },
  },
  blue: {
    light: {
      '--primary': '217 91% 60%',
      '--primary-foreground': '0 0% 100%',
      '--ring': '217 91% 60%',
    },
    dark: {
      '--primary': '213 94% 68%',
      '--primary-foreground': '224 64% 20%',
      '--ring': '213 94% 68%',
    },
  },
  violet: {
    light: {
      '--primary': '262 83% 58%',
      '--primary-foreground': '0 0% 100%',
      '--ring': '262 83% 58%',
    },
    dark: {
      '--primary': '258 90% 66%',
      '--primary-foreground': '0 0% 100%',
      '--ring': '258 90% 66%',
    },
  },
  purple: {
    light: {
      '--primary': '270 91% 65%',
      '--primary-foreground': '0 0% 100%',
      '--ring': '270 91% 65%',
    },
    dark: {
      '--primary': '272 72% 55%',
      '--primary-foreground': '0 0% 100%',
      '--ring': '272 72% 55%',
    },
  },
};

export const accentNames = Object.keys(accents) as AccentName[];

export const accentHex: Record<AccentName, string> = {
  zinc: '#18181b',
  slate: '#0f172a',
  rose: '#e11d48',
  orange: '#ea580c',
  amber: '#f59e0b',
  emerald: '#059669',
  teal: '#0d9488',
  cyan: '#0891b2',
  blue: '#2563eb',
  violet: '#7c3aed',
  purple: '#a855f7',
};

type ThemeContextValue = {
  mode: ThemeMode;
  resolvedMode: 'light' | 'dark';
  accent: AccentName;
  setMode: (mode: ThemeMode) => void;
  setAccent: (accent: AccentName) => void;
};

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

function resolveMode(mode: ThemeMode, system: 'light' | 'dark'): 'light' | 'dark' {
  return mode === 'system' ? system : mode;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = React.useState<ThemeMode>('system');
  const [accent, setAccentState] = React.useState<AccentName>('zinc');
  const { colorScheme: systemColorScheme } = useColorScheme();
  const system = (systemColorScheme ?? 'light') as 'light' | 'dark';
  const resolvedMode = resolveMode(mode, system);

  const setMode = React.useCallback((nextMode: ThemeMode) => {
    setModeState(nextMode);
    if (nextMode === 'light' || nextMode === 'dark') {
      colorScheme.set(nextMode);
    } else {
      colorScheme.set('system');
    }
  }, []);

  const setAccent = React.useCallback((nextAccent: AccentName) => {
    setAccentState(nextAccent);
  }, []);

  const value = React.useMemo<ThemeContextValue>(
    () => ({ mode, resolvedMode, accent, setMode, setAccent }),
    [mode, resolvedMode, accent, setMode, setAccent]
  );

  const accentStyle = React.useMemo(() => vars(accents[accent][resolvedMode]), [accent, resolvedMode]);

  return (
    <ThemeContext.Provider value={value}>
      <View className="flex-1" style={accentStyle}>
        {children}
      </View>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
