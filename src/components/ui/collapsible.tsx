import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { PropsWithChildren, useState } from 'react';
import { Pressable, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View className="gap-2">
      <Pressable
        className={cn('flex-row items-center gap-2', isOpen && 'opacity-70')}
        onPress={() => setIsOpen((value) => !value)}>
        <View className="h-8 w-8 items-center justify-center rounded-lg bg-muted">
          <Text
            className="text-sm font-bold leading-none text-muted-foreground"
            style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}>
            ›
          </Text>
        </View>

        <Text className="text-sm font-medium text-foreground">{title}</Text>
      </Pressable>
      {isOpen && (
        <Animated.View entering={FadeIn.duration(200)} className="ml-10 rounded-lg bg-muted p-4">
          {children}
        </Animated.View>
      )}
    </View>
  );
}