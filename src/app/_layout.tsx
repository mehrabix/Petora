import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import '@/global.css';
import '@/i18n';

import { FontGate } from '@/lib/fonts';
import { ThemeProvider } from '@/lib/theme-context';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <FontGate>
        <Stack screenOptions={{ headerShown: false }} />
        <StatusBar style="auto" />
      </FontGate>
    </ThemeProvider>
  );
}
