import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import FeaturesSection from '@/components/landing/FeaturesSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
