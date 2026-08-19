import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { LanguageSelector } from '@/components/language-selector';
import { ThemeToggle } from '@/components/theme-toggle';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { useAppLanguage } from '@/i18n/use-app-language';

import {
  Cat,
  Dog,
  Heart,
  HeartPulse,
  PawPrint,
  Scissors,
  Search,
  ShieldCheck,
  Star,
  Stethoscope,
} from 'lucide-react-native';

function Header() {
  const { t } = useTranslation();
  return (
    <View className="border-border bg-background border-b">
      <View className="w-full flex-row items-center justify-between px-4 py-3 md:px-10 lg:px-16">
        <View className="flex-row items-center gap-2">
          <Icon as={PawPrint} size={20} className="text-foreground" />
          <Text className="text-lg font-semibold tracking-tight text-foreground">Petora</Text>
        </View>

        <View className="flex-row items-center gap-2">
          <ThemeToggle />
          <LanguageSelector />
          <Button variant="ghost" className="hidden sm:flex">
            <Text>{t('nav.signIn')}</Text>
          </Button>
          <Button>
            <Text>{t('nav.getStarted')}</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <View className="w-full gap-2">
      <Text className="text-sm font-medium text-muted-foreground">{eyebrow}</Text>
      <Text className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{title}</Text>
      {description && <Text className="text-sm leading-6 text-muted-foreground">{description}</Text>}
    </View>
  );
}

const stats = [
  { key: 'stats.adoptedValue', labelKey: 'stats.adoptedLabel' },
  { key: 'stats.happyValue', labelKey: 'stats.happyLabel' },
  { key: 'stats.yearsValue', labelKey: 'stats.yearsLabel' },
];

function Hero() {
  const { t } = useTranslation();
  return (
    <View className="border-border border-b">
      <View className="w-full flex-row flex-wrap items-center gap-10 px-4 py-16 md:px-10 md:py-24 lg:px-16">
        <View className="w-full flex-1 basis-[340px] gap-6">
          <Badge variant="outline" className="self-start">
            <Text className="text-xs">{t('hero.badge')}</Text>
          </Badge>
          <View className="gap-2">
            <Text className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              {t('hero.titleLine1')}
            </Text>
            <Text className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              {t('hero.titleLine2')}
            </Text>
          </View>
          <Text className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            {t('hero.description')}
          </Text>
          <View className="flex-row flex-wrap gap-3">
            <Button size="lg">
              <Icon as={Search} size={18} className="text-primary-foreground" />
              <Text className="font-medium">{t('hero.primaryCta')}</Text>
            </Button>
            <Button size="lg" variant="outline">
              <Text className="font-medium">{t('hero.secondaryCta')}</Text>
            </Button>
          </View>

          <View className="flex-row flex-wrap gap-x-10 gap-y-4 pt-2">
            {stats.map((stat) => (
              <View key={stat.key} className="gap-1">
                <Text className="text-2xl font-semibold tracking-tight text-foreground">
                  {t(stat.key)}
                </Text>
                <Text className="text-sm text-muted-foreground">{t(stat.labelKey)}</Text>
              </View>
            ))}
          </View>
        </View>

        <Card className="w-full flex-1 basis-[300px]">
          <CardContent className="gap-5 p-6">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-lg font-semibold text-foreground">Milo</Text>
                <Text className="text-sm text-muted-foreground">Golden Retriever</Text>
              </View>
              <Badge variant="outline">
                <Text className="text-xs">{t('pets.ready')}</Text>
              </Badge>
            </View>

            <View className="bg-muted h-48 items-center justify-center rounded-lg">
              <Icon as={Dog} size={96} strokeWidth={1.25} className="text-muted-foreground" />
            </View>

            <View className="gap-3">
              <View className="flex-row items-center justify-between">
                <Text className="text-sm text-foreground">Vet-checked</Text>
                <Icon as={ShieldCheck} size={16} className="text-muted-foreground" />
              </View>
              <Separator />
              <View className="flex-row items-center justify-between">
                <Text className="text-sm text-foreground">Microchipped</Text>
                <Icon as={HeartPulse} size={16} className="text-muted-foreground" />
              </View>
              <Separator />
              <View className="flex-row items-center justify-between">
                <Text className="text-sm text-foreground">House trained</Text>
                <Icon as={Heart} size={16} className="text-muted-foreground" />
              </View>
            </View>
          </CardContent>
        </Card>
      </View>
    </View>
  );
}

const pets = [
  { name: 'Milo', breed: 'Golden Retriever', age: '2 yrs', price: '$350', icon: Dog },
  { name: 'Luna', breed: 'British Shorthair', age: '1 yr', price: '$280', icon: Cat },
  { name: 'Bella', breed: 'French Bulldog', age: '8 mo', price: '$420', icon: Dog },
  { name: 'Oreo', breed: 'Labrador', age: '3 yrs', price: '$300', icon: Cat },
];

function FeaturedPets() {
  const { t } = useTranslation();
  return (
    <View className="w-full gap-8 px-4 md:px-10 lg:px-16">
      <SectionHeading
        eyebrow={t('pets.eyebrow')}
        title={t('pets.title')}
        description={t('pets.description')}
      />
      <View className="flex-row flex-wrap gap-4">
        {pets.map((pet) => (
          <Card key={pet.name} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]">
            <CardContent className="gap-4 p-5">
              <View className="bg-muted h-32 items-center justify-center rounded-lg">
                <Icon as={pet.icon} size={56} strokeWidth={1.25} className="text-muted-foreground" />
              </View>
              <View className="flex-row items-start justify-between gap-2">
                <View className="gap-1">
                  <Text className="text-base font-semibold text-foreground">{pet.name}</Text>
                  <Text className="text-sm text-muted-foreground">{pet.breed}</Text>
                </View>
                <Text className="text-base font-semibold text-foreground">{pet.price}</Text>
              </View>
              <View className="flex-row items-center justify-between">
                <Badge variant="secondary">
                  <Text className="text-xs">{pet.age}</Text>
                </Badge>
                <Button variant="ghost" size="sm">
                  <Text className="text-sm">{t('pets.view', { name: pet.name })}</Text>
                </Button>
              </View>
            </CardContent>
          </Card>
        ))}
      </View>
    </View>
  );
}

const services = [
  { titleKey: 'services.adoption.title', descriptionKey: 'services.adoption.description', icon: Heart },
  { titleKey: 'services.grooming.title', descriptionKey: 'services.grooming.description', icon: Scissors },
  { titleKey: 'services.vet.title', descriptionKey: 'services.vet.description', icon: Stethoscope },
];

function Services() {
  const { t } = useTranslation();
  return (
    <View className="w-full gap-8 px-4 md:px-10 lg:px-16">
      <SectionHeading
        eyebrow={t('services.eyebrow')}
        title={t('services.title')}
        description={t('services.description')}
      />
      <View className="flex-row flex-wrap gap-4">
        {services.map((service) => (
          <Card key={service.titleKey} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)]">
            <CardHeader className="gap-4">
              <View className="bg-muted h-10 w-10 items-center justify-center rounded-lg">
                <Icon as={service.icon} size={20} className="text-muted-foreground" />
              </View>
              <CardTitle>{t(service.titleKey)}</CardTitle>
              <CardDescription>{t(service.descriptionKey)}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </View>
    </View>
  );
}

const testimonials = [
  { nameKey: 'testimonials.sarah.name', quoteKey: 'testimonials.sarah.quote' },
  { nameKey: 'testimonials.david.name', quoteKey: 'testimonials.david.quote' },
];

function Testimonials() {
  const { t } = useTranslation();
  return (
    <View className="w-full gap-8 px-4 md:px-10 lg:px-16">
      <SectionHeading
        eyebrow={t('testimonials.eyebrow')}
        title={t('testimonials.title')}
        description={t('testimonials.description')}
      />
      <View className="flex-row flex-wrap gap-4">
        {testimonials.map((item) => (
          <Card key={item.nameKey} className="w-full sm:w-[calc(50%-0.5rem)]">
            <CardHeader className="gap-4">
              <View className="flex-row items-center gap-1">
                {[0, 1, 2, 3, 4].map((index) => (
                  <Icon key={index} as={Star} size={15} className="fill-foreground text-foreground" />
                ))}
              </View>
              <Text className="text-sm leading-6 text-foreground">{t(item.quoteKey)}</Text>
              <View className="flex-row items-center gap-3 border-t border-border pt-5">
                <View className="bg-muted h-9 w-9 items-center justify-center rounded-full">
                  <Text className="text-xs font-medium text-muted-foreground">
                    {t(item.nameKey)
                      .split(' ')
                      .map((part) => part[0])
                      .join('')
                      .slice(0, 2)}
                  </Text>
                </View>
                <Text className="text-sm font-medium text-foreground">{t(item.nameKey)}</Text>
              </View>
            </CardHeader>
          </Card>
        ))}
      </View>
    </View>
  );
}

function Newsletter() {
  const { t } = useTranslation();
  return (
    <View className="w-full px-4 md:px-10 lg:px-16">
      <Card className="w-full">
        <CardContent className="gap-5 p-6 md:p-10">
          <View className="gap-2">
            <Text className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {t('newsletter.title')}
            </Text>
            <Text className="text-sm leading-6 text-muted-foreground">{t('newsletter.description')}</Text>
          </View>
          <View className="flex-row flex-wrap items-center gap-3">
            <Input placeholder={t('newsletter.placeholder')} className="flex-1" />
            <Button size="lg">
              <Text className="font-medium">{t('newsletter.subscribe')}</Text>
            </Button>
          </View>
          <Text className="text-xs text-muted-foreground">{t('newsletter.note')}</Text>
        </CardContent>
      </Card>
    </View>
  );
}

function Footer() {
  const { t } = useTranslation();
  return (
    <View className="border-border border-t">
      <View className="w-full gap-10 px-4 py-12 md:px-10 lg:px-16">
        <View className="flex-row flex-wrap items-start justify-between gap-8">
          <View className="gap-3">
            <View className="flex-row items-center gap-2">
              <Icon as={PawPrint} size={20} className="text-foreground" />
              <Text className="text-lg font-semibold tracking-tight text-foreground">Petora</Text>
            </View>
            <Text className="max-w-sm text-sm leading-6 text-muted-foreground">
              {t('footer.tagline')}
            </Text>
          </View>
          <View className="flex-row flex-wrap gap-x-8 gap-y-2">
            <Text className="text-sm text-muted-foreground">{t('footer.adopt')}</Text>
            <Text className="text-sm text-muted-foreground">{t('footer.care')}</Text>
            <Text className="text-sm text-muted-foreground">{t('footer.about')}</Text>
            <Text className="text-sm text-muted-foreground">{t('footer.contact')}</Text>
          </View>
        </View>
        <Text className="text-xs text-muted-foreground">{t('footer.copyright')}</Text>
      </View>
    </View>
  );
}

export default function LandingScreen() {
  const { isRTL } = useAppLanguage();
  return (
    <View className="bg-background flex-1" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <Header />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerStyle={{ gap: 64, paddingBottom: 0 }}
        showsVerticalScrollIndicator={false}>
        <Hero />
        <FeaturedPets />
        <Services />
        <Testimonials />
        <Newsletter />
        <Footer />
      </ScrollView>
    </View>
  );
}
