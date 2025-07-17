import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import About from '@/components/About';
import Advantages from '@/components/Advantages';
import Testimonials from '@/components/Testimonials';
import BlogCarousel from '@/components/BlogCarousel';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Advantages />
      <Testimonials />
      <BlogCarousel />
      <WhatsAppCTA />
      <Footer />
    </div>
  );
};

export default Index;
