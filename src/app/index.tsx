import { ScrollView, View } from 'react-native';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

function PawMark({ className }: { className?: string }) {
  return (
    <View className={cn('flex-row items-center', className)}>
      <View className="flex-col gap-[3px]">
        <View className="flex-row gap-[3px]">
          <View className="h-2.5 w-2.5 rounded-full bg-current" />
          <View className="h-2.5 w-2.5 rounded-full bg-current" />
        </View>
        <View className="h-2.5 w-2.5 self-start rounded-full bg-current" />
      </View>
      <View className="-ml-[2px] h-8 w-7 rounded-t-[10px] rounded-b-[14px] bg-current" />
    </View>
  );
}

function Header() {
  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center gap-2">
        <PawMark className="text-primary" />
        <Text className="text-lg font-extrabold tracking-tight text-foreground">Petora</Text>
      </View>
      <View className="flex-row items-center gap-2">
        <Button variant="ghost" size="sm">
          <Text>Sign in</Text>
        </Button>
        <Button size="sm">
          <Text className="font-semibold">Get started</Text>
        </Button>
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
    <View className="items-center gap-2 px-2">
      <Text className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</Text>
      <Text className="text-center text-3xl font-extrabold tracking-tight text-foreground">
        {title}
      </Text>
      {description && (
        <Text className="max-w-md text-center text-base leading-6 text-muted-foreground">
          {description}
        </Text>
      )}
    </View>
  );
}

const stats = [
  { value: '2,400+', label: 'Pets adopted' },
  { value: '98%', label: 'Happy families' },
  { value: '12 yrs', label: 'Of trusted care' },
];

function Hero() {
  return (
    <View className="overflow-hidden rounded-3xl border border-border bg-accent">
      <View className="absolute -top-12 -right-10 h-40 w-40 rounded-full bg-primary/20" />
      <View className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-secondary" />
      <View className="relative z-10 gap-4 px-6 py-12 sm:px-14 sm:py-16">
        <View className="items-center gap-4">
          <Badge variant="outline" className="border-primary/30 bg-white/60">
            <Text className="text-xs font-semibold tracking-wide text-primary">
              Adoption reimagined
            </Text>
          </Badge>
          <PawMark className="text-primary" />
          <Text className="max-w-xl text-center text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
            Every pet deserves a forever home
          </Text>
          <Text className="max-w-md text-center text-base leading-7 text-muted-foreground sm:text-lg">
            Discover thousands of adorable rescues and pedigree pets. From playful puppies to cuddly
            kittens — your new best friend is waiting.
          </Text>
          <View className="mt-2 flex-row flex-wrap justify-center gap-3">
            <Button size="lg">
              <Text className="font-semibold">Browse pets</Text>
            </Button>
            <Button size="lg" variant="outline">
              <Text className="font-semibold">How it works</Text>
            </Button>
          </View>
        </View>

        <View className="mt-4 flex-row items-center justify-center">
          {stats.map((stat, index) => (
            <View key={stat.label} className="flex-row items-center">
              {index > 0 && <View className="mx-4 h-8 w-px bg-border sm:mx-6" />}
              <View className="items-center">
                <Text className="text-2xl font-extrabold text-foreground">{stat.value}</Text>
                <Text className="mt-0.5 text-xs text-muted-foreground">{stat.label}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const pets = [
  {
    name: 'Milo',
    breed: 'Golden Retriever',
    age: '2 yrs',
    price: '$350',
    color: 'bg-primary/15',
  },
  {
    name: 'Luna',
    breed: 'British Shorthair',
    age: '1 yr',
    price: '$280',
    color: 'bg-secondary',
  },
  {
    name: 'Bella',
    breed: 'French Bulldog',
    age: '8 mo',
    price: '$420',
    color: 'bg-primary/10',
  },
  {
    name: 'Oreo',
    breed: 'Labrador',
    age: '3 yrs',
    price: '$300',
    color: 'bg-accent',
  },
];

function FeaturedPets() {
  return (
    <View className="gap-8">
      <SectionHeading
        eyebrow="Meet our pets"
        title="Featured companions"
        description="Hand-picked pets looking for a loving family, each vet-checked and ready to go home."
      />
      <View className="flex-row flex-wrap gap-4">
        {pets.map((pet) => (
          <Card key={pet.name} className="w-full gap-4 rounded-2xl p-5 sm:w-[calc(50%-0.5rem)]">
            <View className="flex-row items-center gap-4">
              <Avatar alt={`${pet.name} profile`} className="h-16 w-16 rounded-2xl">
                <AvatarFallback className={cn('bg-primary/15', pet.color)}>
                  <Text className="text-xl font-bold text-primary">{pet.name[0]}</Text>
                </AvatarFallback>
              </Avatar>
              <View className="flex-1">
                <Text className="text-lg font-bold text-foreground">{pet.name}</Text>
                <Text className="text-sm text-muted-foreground">{pet.breed}</Text>
              </View>
            </View>
            <Separator />
            <View className="flex-row items-center justify-between">
              <Badge variant="secondary" className="bg-primary/10">
                <Text className="text-xs font-medium text-primary">{pet.age}</Text>
              </Badge>
              <Text className="text-base font-extrabold text-primary">{pet.price}</Text>
            </View>
            <Button variant="outline" size="sm" className="w-full">
              <Text className="font-medium">View {pet.name}</Text>
            </Button>
          </Card>
        ))}
      </View>
    </View>
  );
}

const services = [
  {
    title: 'Adoption',
    initial: 'A',
    description:
      'Thoughtful matching connects you with pets whose energy, age, and personality fit your home.',
    color: 'bg-primary/15',
    textColor: 'text-primary',
  },
  {
    title: 'Grooming & care',
    initial: 'G',
    description:
      'Professional grooming, nutrition plans, and supplies to keep every pet looking and feeling great.',
    color: 'bg-secondary',
    textColor: 'text-secondary-foreground',
  },
  {
    title: 'Vet & health',
    initial: 'V',
    description:
      'Every pet is fully vaccinated, microchipped, and checked by our partner veterinarians.',
    color: 'bg-accent',
    textColor: 'text-accent-foreground',
  },
];

function Services() {
  return (
    <View className="gap-8">
      <SectionHeading
        eyebrow="Why Petora"
        title="Care from paw to heart"
        description="We go beyond adoption with services that support pets for a lifetime."
      />
      <View className="flex-row flex-wrap gap-4">
        {services.map((service) => (
          <Card key={service.title} className="w-full gap-3 rounded-2xl p-5 sm:w-[calc(33.333%-0.7rem)]">
            <View
              className={cn(
                'h-12 w-12 items-center justify-center rounded-xl',
                service.color
              )}>
              <Text className={cn('text-xl font-extrabold', service.textColor)}>
                {service.initial}
              </Text>
            </View>
            <Text className="text-base font-bold text-foreground">{service.title}</Text>
            <Text className="text-sm leading-5 text-muted-foreground">{service.description}</Text>
          </Card>
        ))}
      </View>
    </View>
  );
}

const testimonials = [
  {
    name: 'Sarah & Buddy',
    initials: 'SB',
    quote:
      'Adopting Buddy through Petora was the best decision. The team matched us perfectly and supported us every step of the way.',
    color: 'bg-primary/15',
  },
  {
    name: 'David M.',
    initials: 'DM',
    quote:
      'From the vet check to the welcome kit, everything felt personal. Luna settled in within a day — she finally feels at home.',
    color: 'bg-secondary',
  },
];

function Testimonials() {
  return (
    <View className="gap-8">
      <SectionHeading
        eyebrow="Happy tails"
        title="Loved by families"
        description="Real stories from families who found their forever friend with us."
      />
      <View className="flex-row flex-wrap gap-4">
        {testimonials.map((item) => (
          <Card key={item.name} className="w-full gap-3 rounded-2xl p-5 sm:w-[calc(50%-0.5rem)]">
            <View className="flex-row items-center gap-3">
              <Avatar alt={`${item.name} avatar`} className="h-11 w-11">
                <AvatarFallback className={cn('bg-primary/15', item.color)}>
                  <Text className="text-sm font-bold text-primary">{item.initials}</Text>
                </AvatarFallback>
              </Avatar>
              <View className="flex-1">
                <Text className="text-sm font-bold text-foreground">{item.name}</Text>
                <Text className="text-xs tracking-widest text-primary">★★★★★</Text>
              </View>
            </View>
            <Text className="text-sm leading-6 text-muted-foreground">{item.quote}</Text>
          </Card>
        ))}
      </View>
    </View>
  );
}

function Newsletter() {
  return (
    <Card className="gap-5 rounded-3xl border-0 bg-primary p-8 sm:p-10">
      <View className="items-center gap-3">
        <Text className="text-center text-3xl font-extrabold tracking-tight text-primary-foreground">
          Stay in the loop
        </Text>
        <Text className="max-w-md text-center text-base leading-6 text-primary-foreground/80">
          Get adoption alerts and pet care tips delivered straight to your inbox.
        </Text>
      </View>
      <View className="flex-row flex-wrap gap-3">
        <Input
          placeholder="you@example.com"
          className="flex-1 border-transparent bg-white/90 text-foreground"
        />
        <Button className="bg-white">
          <Text className="font-semibold text-primary">Subscribe</Text>
        </Button>
      </View>
    </Card>
  );
}

function Footer() {
  return (
    <View className="border-t border-border pt-8">
      <View className="flex-row items-center gap-2">
        <PawMark className="text-primary" />
        <Text className="text-base font-extrabold tracking-tight text-foreground">Petora</Text>
      </View>
      <View className="mt-4 flex-row flex-wrap gap-x-6 gap-y-2">
        <Text className="text-sm text-muted-foreground">Adopt</Text>
        <Text className="text-sm text-muted-foreground">Care</Text>
        <Text className="text-sm text-muted-foreground">About</Text>
        <Text className="text-sm text-muted-foreground">Contact</Text>
      </View>
      <Text className="mt-6 text-xs text-muted-foreground">
        © 2026 Petora. Made with love for pets everywhere.
      </Text>
    </View>
  );
}

export default function LandingScreen() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ flexGrow: 1 }}>
      <View className="mx-auto w-full max-w-3xl flex-1 gap-14 px-5 pt-6 pb-16">
        <Header />
        <Hero />
        <FeaturedPets />
        <Services />
        <Testimonials />
        <Newsletter />
        <Footer />
      </View>
    </ScrollView>
  );
}