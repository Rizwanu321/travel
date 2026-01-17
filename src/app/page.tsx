import {
  HeroSection,
  QuickActions,
  NavigationTabs,
  FeaturedPackages,
  ServicesSection,
  CategoriesSection,
  ReviewsSection,
  CTASection,
} from '@/components/home';
import { FAQSchema } from '@/components/seo';

export default function HomePage() {
  return (
    <>
      {/* SEO: FAQ Schema for Kerala Tourism Questions */}
      <FAQSchema />

      {/* 1. Hero Section with Booking Form */}
      <HeroSection />

      {/* 2. Quick Actions (Call, Enquire, Directions, Share, WhatsApp) */}
      <QuickActions />

      {/* 3. Navigation Tabs (Overview, Tour Packages, Services, etc.) */}
      <NavigationTabs />

      {/* 4. Tour Packages Section */}
      <section id="packages">
        <FeaturedPackages />
      </section>

      {/* 5. Services Section */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* 6. Categories Section */}
      <section id="categories">
        <CategoriesSection />
      </section>

      {/* 7. Reviews Section */}
      <section id="reviews">
        <ReviewsSection />
      </section>

      {/* 8. Call to Action */}
      <CTASection />
    </>
  );
}
