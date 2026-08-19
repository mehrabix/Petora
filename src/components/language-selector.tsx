import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { languageOptions, useAppLanguage } from '@/i18n/use-app-language';

import { Check, ChevronDown, Languages } from 'lucide-react-native';

export function LanguageSelector() {
  const { language, changeLanguage } = useAppLanguage();
  const current = languageOptions.find((option) => option.code === language) ?? languageOptions[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 px-3">
          <Icon as={Languages} size={15} className="text-foreground" />
          <Text className="text-sm">{current.name}</Text>
          <Icon as={ChevronDown} size={13} className="text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent side="bottom" align="end" className="w-52">
        {languageOptions.map((option) => {
          const selected = option.code === language;
          return (
            <DropdownMenuItem
              key={option.code}
              onPress={() => changeLanguage(option.code)}
              closeOnPress>
              <Text className={selected ? 'font-medium text-foreground' : 'text-foreground'}>
                {option.name}
              </Text>
              {selected && <Icon as={Check} size={15} className="text-foreground" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
