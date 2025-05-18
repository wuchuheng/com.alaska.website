import { ContactSection } from '../../components/ContactSection';
import { DownloadSection } from '../../components/DownloadSection';
import { FeaturesSection } from '../../components/FeaturesSection';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
import { HowItWorks } from '../../components/HowItWorks';
import { LanguageProvider } from '../../config/LanguageContext';
import { ThemeProvider } from '../../config/ThemeContext';

function HomePage() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <HeroSection />
            <FeaturesSection />
            <HowItWorks />
            <ContactSection />
            <DownloadSection />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default HomePage;
