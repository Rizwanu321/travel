import {
  HeroSection,
  QuickActions,
  StatsSection,
  FeaturedPackages,
  ServicesSection,
  ReviewsSection,
  CategoriesSection,
  CTASection,
} from '@/components/home';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickActions />
      <StatsSection />
      <FeaturedPackages />
      <ServicesSection />
      <CategoriesSection />
      <ReviewsSection />
      <CTASection />
    </>
  );
}
