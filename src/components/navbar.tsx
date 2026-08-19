import { useTranslation } from 'react-i18next';
import { Platform, Pressable, ScrollView, View } from 'react-native';
import * as React from 'react';

import { LanguageSelector } from '@/components/language-selector';
import { ThemePicker } from '@/components/theme-picker';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

import { Menu, PawPrint, X } from 'lucide-react-native';

const navItems = [
  { key: 'nav.adopt', href: '#pets' },
  { key: 'nav.care', href: '#services' },
  { key: 'nav.about', href: '#impact' },
  { key: 'nav.contact', href: '#contact' },
];

export function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (Platform.OS !== 'web' || typeof window === 'undefined') return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <View
      className={cn(
        'fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl transition-all duration-300',
        scrolled || open
          ? 'border-border/70 bg-background/85 shadow-sm'
          : 'border-border/50 bg-background/60'
      )}>
      <View className="w-full flex-row items-center justify-between px-4 py-3 md:px-10 lg:px-16">
        <View className="flex-row items-center gap-2">
          <View className="bg-primary h-8 w-8 items-center justify-center rounded-lg">
            <Icon as={PawPrint} size={18} className="text-primary-foreground" />
          </View>
          <Text className="text-lg font-semibold tracking-tight text-foreground">Petora</Text>
        </View>

        <View className="hidden flex-row items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Pressable key={item.key} className="hover:bg-accent rounded-md px-3 py-2">
              <Text className="text-sm font-medium text-muted-foreground">{t(item.key)}</Text>
            </Pressable>
          ))}
        </View>

        <View className="flex-row items-center gap-2">
          <ThemePicker />
          <LanguageSelector />
          <Button variant="ghost" className="hidden sm:flex">
            <Text>{t('nav.signIn')}</Text>
          </Button>
          <Button className="hidden sm:flex">
            <Text>{t('nav.getStarted')}</Text>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onPress={() => setOpen((v) => !v)}>
            <Icon as={open ? X : Menu} size={18} className="text-foreground" />
          </Button>
        </View>
      </View>

      {open && (
        <ScrollView className="bg-background/95 max-h-[70vh] border-t border-border px-4 py-4 backdrop-blur-xl md:hidden">
          <View className="gap-1">
            {navItems.map((item) => (
              <Pressable key={item.key} className="active:bg-accent rounded-md px-3 py-3">
                <Text className="text-base font-medium text-foreground">{t(item.key)}</Text>
              </Pressable>
            ))}
            <View className="mt-3 gap-2">
              <Button variant="outline" className="w-full">
                <Text>{t('nav.signIn')}</Text>
              </Button>
              <Button className="w-full">
                <Text>{t('nav.getStarted')}</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
}
