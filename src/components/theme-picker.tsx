import { Pressable, View } from 'react-native';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { accentHex, accentNames, useTheme, type AccentName } from '@/lib/theme-context';
import { cn } from '@/lib/utils';

import { Check, Monitor, Moon, Palette, Sun } from 'lucide-react-native';

function contrastText(hex: string): string {
  const value = hex.replace('#', '');
  const r = parseInt(value.slice(0, 2), 16) / 255;
  const g = parseInt(value.slice(2, 4), 16) / 255;
  const b = parseInt(value.slice(4, 6), 16) / 255;
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.5 ? '#18181b' : '#ffffff';
}

export function ThemePicker() {
  const { accent, setAccent, mode, setMode } = useTheme();

  const modeOptions = [
    { value: 'light' as const, label: 'Light', icon: Sun },
    { value: 'dark' as const, label: 'Dark', icon: Moon },
    { value: 'system' as const, label: 'System', icon: Monitor },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 px-2.5">
          <Icon as={Palette} size={15} className="text-foreground" />
          <View className="h-3 w-3 rounded-full" style={{ backgroundColor: accentHex[accent] }} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent side="bottom" align="end" className="w-56">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <View className="flex-row flex-wrap gap-2 p-2">
          {accentNames.map((name) => (
            <Pressable
              key={name}
              onPress={() => setAccent(name)}
              className={cn(
                'h-7 w-7 items-center justify-center rounded-full border border-border/60',
                accent === name && 'ring-ring ring-2 ring-offset-2 ring-offset-background'
              )}
              style={{ backgroundColor: accentHex[name] }}>
              {accent === name && (
                <Icon as={Check} size={13} color={contrastText(accentHex[name])} />
              )}
            </Pressable>
          ))}
        </View>

        <DropdownMenuSeparator />

        {modeOptions.map((option) => (
          <DropdownMenuItem key={option.value} onPress={() => setMode(option.value)} closeOnPress>
            <Icon as={option.icon} size={15} className="text-muted-foreground" />
            <Text className="text-foreground">{option.label}</Text>
            {mode === option.value && <Icon as={Check} size={15} className="text-foreground" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
