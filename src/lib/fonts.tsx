import { Fraunces_600SemiBold } from '@expo-google-fonts/fraunces/600SemiBold';
import { Fraunces_700Bold } from '@expo-google-fonts/fraunces/700Bold';
import { Fraunces_800ExtraBold } from '@expo-google-fonts/fraunces/800ExtraBold';
import { Fraunces_900Black } from '@expo-google-fonts/fraunces/900Black';
import { Inter_400Regular } from '@expo-google-fonts/inter/400Regular';
import { Inter_500Medium } from '@expo-google-fonts/inter/500Medium';
import { Inter_600SemiBold } from '@expo-google-fonts/inter/600SemiBold';
import { Inter_700Bold } from '@expo-google-fonts/inter/700Bold';
import { Inter_800ExtraBold } from '@expo-google-fonts/inter/800ExtraBold';
import { Inter_900Black } from '@expo-google-fonts/inter/900Black';
import { Vazirmatn_400Regular } from '@expo-google-fonts/vazirmatn/400Regular';
import { Vazirmatn_500Medium } from '@expo-google-fonts/vazirmatn/500Medium';
import { Vazirmatn_600SemiBold } from '@expo-google-fonts/vazirmatn/600SemiBold';
import { Vazirmatn_700Bold } from '@expo-google-fonts/vazirmatn/700Bold';
import { Vazirmatn_800ExtraBold } from '@expo-google-fonts/vazirmatn/800ExtraBold';
import { Vazirmatn_900Black } from '@expo-google-fonts/vazirmatn/900Black';
import { useFonts } from 'expo-font';
import * as React from 'react';

const interFamilyByWeight: Record<string, string> = {
  '400': 'Inter_400Regular',
  '500': 'Inter_500Medium',
  '600': 'Inter_600SemiBold',
  '700': 'Inter_700Bold',
  '800': 'Inter_800ExtraBold',
  '900': 'Inter_900Black',
};

const vazirmatnFamilyByWeight: Record<string, string> = {
  '400': 'Vazirmatn_400Regular',
  '500': 'Vazirmatn_500Medium',
  '600': 'Vazirmatn_600SemiBold',
  '700': 'Vazirmatn_700Bold',
  '800': 'Vazirmatn_800ExtraBold',
  '900': 'Vazirmatn_900Black',
};

const displayFamilyByWeight: Record<string, string> = {
  '600': 'Fraunces_600SemiBold',
  '700': 'Fraunces_700Bold',
  '800': 'Fraunces_800ExtraBold',
  '900': 'Fraunces_900Black',
};

const weightByClass: Record<string, string> = {
  'font-thin': '100',
  'font-extralight': '200',
  'font-light': '300',
  'font-normal': '400',
  'font-medium': '500',
  'font-semibold': '600',
  'font-bold': '700',
  'font-extrabold': '800',
  'font-black': '900',
};

export function useAppFonts() {
  return useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    Vazirmatn_400Regular,
    Vazirmatn_500Medium,
    Vazirmatn_600SemiBold,
    Vazirmatn_700Bold,
    Vazirmatn_800ExtraBold,
    Vazirmatn_900Black,
    Fraunces_600SemiBold,
    Fraunces_700Bold,
    Fraunces_800ExtraBold,
    Fraunces_900Black,
  });
}

function weightFromClassName(className?: string): string {
  const classes = className?.split(/\s+/) ?? [];
  const weightClass = classes.find((name) => name in weightByClass);
  return weightClass ? weightByClass[weightClass] : '400';
}

export function getFontFamily(isRTL: boolean, className?: string): string {
  const weight = weightFromClassName(className);
  const familyMap = isRTL ? vazirmatnFamilyByWeight : interFamilyByWeight;
  return familyMap[weight] ?? familyMap['400'];
}

export function getDisplayFontFamily(className?: string): string {
  const weight = weightFromClassName(className);
  return displayFamilyByWeight[weight] ?? displayFamilyByWeight['600'];
}

export function FontGate({ children }: { children: React.ReactNode }) {
  const [fontsLoaded, fontError] = useAppFonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <>{children}</>;
}
