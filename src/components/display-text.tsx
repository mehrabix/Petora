import { Text as RNText } from 'react-native';

import { useAppLanguage } from '@/i18n/use-app-language';
import { cn } from '@/lib/utils';
import { getDisplayFontFamily, getFontFamily } from '@/lib/fonts';

export function DisplayText({
  className,
  ...props
}: React.ComponentProps<typeof RNText>) {
  const { isRTL } = useAppLanguage();
  const fontFamily = isRTL ? getFontFamily(isRTL, className) : getDisplayFontFamily(className);
  return <RNText className={className} {...props} style={[props.style, { fontFamily }]} />;
}

export function Heading({
  className,
  ...props
}: React.ComponentProps<typeof RNText>) {
  return <DisplayText className={cn('tracking-tight', className)} {...props} />;
}
