import { useTranslation } from 'react-i18next';
import { Platform, Pressable, ScrollView, View } from 'react-native';
import * as React from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

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

  const menuProgress = useSharedValue(0);
  const menuHeight = useSharedValue(0);

  const menuStyle = useAnimatedStyle(
    () => ({
      height: menuHeight.value * menuProgress.value,
      opacity: menuProgress.value,
      transform: [{ translateY: (menuProgress.value - 1) * 12 }],
      pointerEvents: open ? 'auto' : 'none',
    }),
    [open]
  );

  React.useEffect(() => {
    menuProgress.value = withTiming(open ? 1 : 0, {
      duration: 260,
      easing: Easing.out(Easing.cubic),
    });
  }, [open, menuProgress]);

  // Animated style reads the latest `open` state for pointer events.
  // The dep array is intentionally left as the shared value only to avoid
  // recreating the worklet on every state change.

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
            <Pressable key={item.key} className="group hover:bg-accent rounded-md px-3 py-2">
              <Text className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                {t(item.key)}
              </Text>
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

      <Animated.View
        className="overflow-hidden md:hidden"
        style={menuStyle}>
        <View
          onLayout={(event) => {
            menuHeight.value = event.nativeEvent.layout.height;
          }}>
          <ScrollView className="bg-background/95 max-h-[70vh] border-t border-border px-4 py-4 backdrop-blur-xl">
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
        </View>
      </Animated.View>
    </View>
  );
}
