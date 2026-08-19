import { Pressable } from 'react-native';

import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { useTheme } from '@/lib/theme-context';
import { cn } from '@/lib/utils';

import { Monitor, Moon, Sun } from 'lucide-react-native';

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === 'system') {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('system');
    }
  };

  const icon = theme === 'system' ? Monitor : theme === 'light' ? Sun : Moon;

  return (
    <Pressable
      onPress={cycleTheme}
      className={cn(
        'bg-background border-input hover:bg-accent active:bg-accent flex-row items-center justify-center rounded-md border p-2'
      )}
      accessibilityLabel="Toggle theme">
      <Icon as={icon} size={16} className="text-foreground" />
      <Text className="sr-only">Toggle theme</Text>
    </Pressable>
  );
}
