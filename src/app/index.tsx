import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { DisplayText } from '@/components/display-text';
import { Navbar } from '@/components/navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { useAppLanguage } from '@/i18n/use-app-language';
import { cn } from '@/lib/utils';

import {
  ArrowRight,
  Cat,
  Dog,
  Heart,
  HeartHandshake,
  HeartPulse,
  Home,
  MapPin,
  PawPrint,
  Scissors,
  Search,
  ShieldCheck,
  Star,
  Stethoscope,
  Users,
} from 'lucide-react-native';

function SectionHeading({
  eyebrow,
  title,
  description,
  center,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <View className={cn('w-full max-w-2xl gap-3', center && 'items-center self-center')}>
      <Text className="text-sm font-medium text-muted-foreground">{eyebrow}</Text>
      <DisplayText className={cn('text-3xl font-semibold text-foreground md:text-4xl', center && 'text-center')}>
        {title}
      </DisplayText>
      {description && (
        <Text className={cn('text-base leading-7 text-muted-foreground', center && 'text-center')}>
          {description}
        </Text>
      )}
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
      <View className="w-full flex-row flex-wrap items-center gap-12 px-4 py-20 md:px-10 md:py-28 lg:px-16">
        <View className="w-full flex-1 basis-[360px] gap-7">
          <Badge variant="outline" className="self-start">
            <Icon as={Heart} size={13} className="text-muted-foreground" />
            <Text className="text-xs font-medium">{t('hero.badge')}</Text>
          </Badge>

          <View className="gap-1">
            <DisplayText className="text-5xl font-bold leading-[0.98] tracking-tight text-foreground md:text-7xl">
              {t('hero.titleLine1')}
            </DisplayText>
            <DisplayText className="text-5xl font-bold italic leading-[0.98] tracking-tight text-foreground md:text-7xl">
              {t('hero.titleLine2')}
            </DisplayText>
          </View>

          <Text className="max-w-xl text-lg leading-8 text-muted-foreground">
            {t('hero.description')}
          </Text>

          <View className="flex-row flex-wrap gap-3">
            <Button size="lg">
              <Text className="font-medium">{t('hero.primaryCta')}</Text>
              <Icon as={ArrowRight} size={18} className="text-primary-foreground" />
            </Button>
            <Button size="lg" variant="outline">
              <Text className="font-medium">{t('hero.secondaryCta')}</Text>
            </Button>
          </View>

          <View className="flex-row flex-wrap gap-x-12 gap-y-5 pt-2">
            {stats.map((stat) => (
              <View key={stat.key} className="gap-1">
                <DisplayText className="text-3xl font-semibold text-foreground">{t(stat.key)}</DisplayText>
                <Text className="text-sm text-muted-foreground">{t(stat.labelKey)}</Text>
              </View>
            ))}
          </View>
        </View>

        <Card className="w-full flex-1 basis-[300px]">
          <CardContent className="gap-6 p-7">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-xl font-semibold text-foreground">Milo</Text>
                <View className="mt-1 flex-row items-center gap-1">
                  <Icon as={MapPin} size={13} className="text-muted-foreground" />
                  <Text className="text-sm text-muted-foreground">Golden Retriever</Text>
                </View>
              </View>
              <Badge variant="outline">
                <Text className="text-xs">{t('pets.ready')}</Text>
              </Badge>
            </View>

            <View className="bg-muted h-56 items-center justify-center rounded-xl">
              <Icon as={Dog} size={120} strokeWidth={1} className="text-muted-foreground" />
            </View>

            <View className="gap-3">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-2">
                  <Icon as={ShieldCheck} size={16} className="text-muted-foreground" />
                  <Text className="text-sm text-foreground">Vet-checked</Text>
                </View>
                <Text className="text-xs text-muted-foreground">Complete</Text>
              </View>
              <Separator />
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-2">
                  <Icon as={HeartPulse} size={16} className="text-muted-foreground" />
                  <Text className="text-sm text-foreground">Microchipped</Text>
                </View>
                <Text className="text-xs text-muted-foreground">Complete</Text>
              </View>
              <Separator />
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-2">
                  <Icon as={Home} size={16} className="text-muted-foreground" />
                  <Text className="text-sm text-foreground">House trained</Text>
                </View>
                <Text className="text-xs text-muted-foreground">Yes</Text>
              </View>
            </View>
          </CardContent>
        </Card>
      </View>
    </View>
  );
}

const pets = [
  { name: 'Milo', breed: 'Golden Retriever', age: '2 yrs', match: 94, icon: Dog, color: 'bg-amber-100' },
  { name: 'Luna', breed: 'British Shorthair', age: '1 yr', match: 88, icon: Cat, color: 'bg-rose-100' },
  { name: 'Bella', breed: 'French Bulldog', age: '8 mo', match: 91, icon: Dog, color: 'bg-sky-100' },
  { name: 'Oreo', breed: 'Labrador', age: '3 yrs', match: 86, icon: Cat, color: 'bg-emerald-100' },
];

function FeaturedPets() {
  const { t } = useTranslation();
  return (
    <View id="pets" className="w-full gap-9 px-4 md:px-10 lg:px-16">
      <View className="flex-row flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow={t('pets.eyebrow')}
          title={t('pets.title')}
          description={t('pets.description')}
        />
        <Button variant="outline" className="self-end">
          <Text className="font-medium">{t('hero.primaryCta')}</Text>
          <Icon as={ArrowRight} size={16} className="text-muted-foreground" />
        </Button>
      </View>

      <View className="flex-row flex-wrap gap-4">
        {pets.map((pet) => (
          <Card key={pet.name} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]">
            <CardContent className="gap-5 p-5">
              <View className="h-36 items-center justify-center rounded-lg bg-muted">
                <Icon as={pet.icon} size={64} strokeWidth={1} className="text-muted-foreground" />
              </View>
              <View className="gap-2">
                <View className="flex-row items-start justify-between gap-2">
                  <View className="gap-1">
                    <Text className="text-base font-semibold text-foreground">{pet.name}</Text>
                    <Text className="text-sm text-muted-foreground">{pet.breed}</Text>
                  </View>
                  <Text className="text-sm font-semibold text-foreground">{pet.age}</Text>
                </View>
                <View className="gap-1">
                  <View className="flex-row items-center justify-between">
                    <Text className="text-xs text-muted-foreground">Match</Text>
                    <Text className="text-xs font-medium text-foreground">{pet.match}%</Text>
                  </View>
                  <Progress value={pet.match} className="h-1.5" />
                </View>
              </View>
              <Button variant="outline" size="sm" className="w-full">
                <Text className="text-sm">{t('pets.view', { name: pet.name })}</Text>
              </Button>
            </CardContent>
          </Card>
        ))}
      </View>
    </View>
  );
}

const services = [
  { titleKey: 'services.adoption.title', descriptionKey: 'services.adoption.description', icon: HeartHandshake },
  { titleKey: 'services.grooming.title', descriptionKey: 'services.grooming.description', icon: Scissors },
  { titleKey: 'services.vet.title', descriptionKey: 'services.vet.description', icon: Stethoscope },
];

function Services() {
  const { t } = useTranslation();
  return (
    <View id="services" className="w-full gap-9 px-4 md:px-10 lg:px-16">
      <SectionHeading
        eyebrow={t('services.eyebrow')}
        title={t('services.title')}
        description={t('services.description')}
      />
      <View className="flex-row flex-wrap gap-4">
        {services.map((service) => (
          <Card key={service.titleKey} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)]">
            <CardHeader className="gap-4">
              <View className="bg-muted h-11 w-11 items-center justify-center rounded-lg">
                <Icon as={service.icon} size={22} className="text-muted-foreground" />
              </View>
              <CardTitle className="text-xl">{t(service.titleKey)}</CardTitle>
              <CardDescription className="leading-6">{t(service.descriptionKey)}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </View>
    </View>
  );
}

const howSteps = [
  { titleKey: 'how.step1.title', descriptionKey: 'how.step1.description', icon: Search },
  { titleKey: 'how.step2.title', descriptionKey: 'how.step2.description', icon: Users },
  { titleKey: 'how.step3.title', descriptionKey: 'how.step3.description', icon: ShieldCheck },
  { titleKey: 'how.step4.title', descriptionKey: 'how.step4.description', icon: Home },
];

function HowItWorks() {
  const { t } = useTranslation();
  return (
    <View className="border-border bg-muted/40 border-y">
      <View className="w-full gap-10 px-4 py-20 md:px-10 lg:px-16">
        <SectionHeading
          eyebrow={t('how.eyebrow')}
          title={t('how.title')}
          description={t('how.description')}
          center
        />
        <View className="flex-row flex-wrap gap-4">
          {howSteps.map((step, index) => (
            <Card key={step.titleKey} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]">
              <CardHeader className="gap-4">
                <View className="flex-row items-center justify-between">
                  <View className="bg-primary h-8 w-8 items-center justify-center rounded-full">
                    <Text className="text-sm font-semibold text-primary-foreground">{index + 1}</Text>
                  </View>
                  <Icon as={step.icon} size={22} className="text-muted-foreground" />
                </View>
                <CardTitle className="text-lg">{t(step.titleKey)}</CardTitle>
                <CardDescription className="leading-6">{t(step.descriptionKey)}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </View>
      </View>
    </View>
  );
}

const impact = [
  { value: '2,400+', labelKey: 'impact.counter1' },
  { value: '1,800+', labelKey: 'impact.counter2' },
  { value: '12,000+', labelKey: 'impact.counter3' },
  { value: '140+', labelKey: 'impact.counter4' },
];

function Impact() {
  const { t } = useTranslation();
  return (
    <View id="impact" className="w-full gap-10 px-4 py-20 md:px-10 lg:px-16">
      <SectionHeading
        eyebrow={t('impact.eyebrow')}
        title={t('impact.title')}
        description={t('impact.description')}
      />
      <View className="flex-row flex-wrap gap-4">
        {impact.map((item) => (
          <Card key={item.labelKey} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]">
            <CardContent className="gap-2 p-6">
              <DisplayText className="text-4xl font-semibold text-foreground">{item.value}</DisplayText>
              <Text className="text-sm text-muted-foreground">{t(item.labelKey)}</Text>
            </CardContent>
          </Card>
        ))}
      </View>
    </View>
  );
}

const faqs = [
  { qKey: 'faq.q1', aKey: 'faq.a1' },
  { qKey: 'faq.q2', aKey: 'faq.a2' },
  { qKey: 'faq.q3', aKey: 'faq.a3' },
  { qKey: 'faq.q4', aKey: 'faq.a4' },
];

function FAQ() {
  const { t } = useTranslation();
  return (
    <View className="border-border border-t">
      <View className="w-full gap-10 px-4 py-20 md:px-10 lg:px-16">
        <SectionHeading
          eyebrow={t('faq.eyebrow')}
          title={t('faq.title')}
          description={t('faq.description')}
        />
        <View className="w-full gap-4">
          {faqs.map((faq, index) => (
            <Card key={faq.qKey} className="w-full">
              <CardHeader className="gap-3">
                <View className="flex-row gap-3">
                  <Text className="text-sm font-semibold text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </Text>
                  <View className="gap-2">
                    <CardTitle className="text-base">{t(faq.qKey)}</CardTitle>
                    <CardDescription className="leading-7">{t(faq.aKey)}</CardDescription>
                  </View>
                </View>
              </CardHeader>
            </Card>
          ))}
        </View>
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
    <View className="w-full gap-9 px-4 md:px-10 lg:px-16">
      <SectionHeading
        eyebrow={t('testimonials.eyebrow')}
        title={t('testimonials.title')}
        description={t('testimonials.description')}
      />
      <View className="flex-row flex-wrap gap-4">
        {testimonials.map((item) => (
          <Card key={item.nameKey} className="w-full sm:w-[calc(50%-0.5rem)]">
            <CardHeader className="gap-5">
              <View className="flex-row items-center gap-1">
                {[0, 1, 2, 3, 4].map((index) => (
                  <Icon key={index} as={Star} size={15} className="fill-foreground text-foreground" />
                ))}
              </View>
              <DisplayText className="text-lg font-medium leading-8 text-foreground">
                {'\u201C'}
                {t(item.quoteKey)}
                {'\u201D'}
              </DisplayText>
              <View className="flex-row items-center gap-3">
                <View className="bg-muted h-10 w-10 items-center justify-center rounded-full">
                  <Text className="text-sm font-medium text-muted-foreground">
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
        <CardContent className="gap-6 p-7 md:p-12">
          <View className="max-w-xl gap-3">
            <DisplayText className="text-3xl font-semibold text-foreground md:text-4xl">
              {t('newsletter.title')}
            </DisplayText>
            <Text className="text-base leading-7 text-muted-foreground">{t('newsletter.description')}</Text>
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

function CTA() {
  const { t } = useTranslation();
  return (
    <View className="bg-primary w-full">
      <View className="w-full flex-row flex-wrap items-center justify-between gap-6 px-4 py-16 md:px-10 lg:px-16">
        <View className="max-w-2xl gap-3">
          <DisplayText className="text-3xl font-semibold text-primary-foreground md:text-4xl">
            {t('cta.title')}
          </DisplayText>
          <Text className="text-base leading-7 text-primary-foreground/70">{t('cta.description')}</Text>
        </View>
        <View className="flex-row flex-wrap gap-3">
          <Button size="lg" className="bg-background">
            <Text className="font-medium text-foreground">{t('cta.primary')}</Text>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30">
            <Text className="font-medium text-primary-foreground">{t('cta.secondary')}</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

function Footer() {
  const { t } = useTranslation();
  return (
    <View id="contact" className="border-border border-t">
      <View className="w-full gap-10 px-4 py-14 md:px-10 lg:px-16">
        <View className="flex-row flex-wrap items-start justify-between gap-10">
          <View className="max-w-sm gap-4">
            <View className="flex-row items-center gap-2">
              <View className="bg-primary h-8 w-8 items-center justify-center rounded-lg">
                <Icon as={PawPrint} size={18} className="text-primary-foreground" />
              </View>
              <Text className="text-lg font-semibold tracking-tight text-foreground">Petora</Text>
            </View>
            <Text className="text-sm leading-6 text-muted-foreground">{t('footer.tagline')}</Text>
          </View>
          <View className="flex-row flex-wrap gap-x-12 gap-y-2">
            <Text className="text-sm font-medium text-foreground">{t('footer.adopt')}</Text>
            <Text className="text-sm font-medium text-foreground">{t('footer.care')}</Text>
            <Text className="text-sm font-medium text-foreground">{t('footer.about')}</Text>
            <Text className="text-sm font-medium text-foreground">{t('footer.contact')}</Text>
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
      <Navbar />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerStyle={{ gap: 72 }}
        showsVerticalScrollIndicator={false}>
        <View className="pt-16 md:pt-20">
          <Hero />
        </View>
        <FeaturedPets />
        <Services />
        <HowItWorks />
        <Impact />
        <FAQ />
        <Testimonials />
        <Newsletter />
        <CTA />
        <Footer />
      </ScrollView>
    </View>
  );
}
