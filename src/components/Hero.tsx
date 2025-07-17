import { Button } from '@/components/ui/button';
import { Coffee, Award, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center coffee-gradient">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6 fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Kopi Mas Jawir
              <span className="block text-2xl md:text-3xl font-normal mt-2">
                Nikmatnya Kopi Asli Indonesia
              </span>
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              Rasakan kenikmatan kopi premium pilihan terbaik dari perkebunan Indonesia. 
              Diolah dengan cinta untuk memberikan pengalaman minum kopi yang tak terlupakan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="hover-scale">
                <Coffee className="mr-2 h-5 w-5" />
                Pesan Sekarang
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary hover-scale">
                Lihat Produk
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5" />
                  <span className="text-2xl font-bold">100%</span>
                </div>
                <p className="text-sm opacity-80">Kopi Asli</p>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="h-5 w-5" />
                  <span className="text-2xl font-bold">1000+</span>
                </div>
                <p className="text-sm opacity-80">Pelanggan Puas</p>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-2 mb-2">
                  <Coffee className="h-5 w-5" />
                  <span className="text-2xl font-bold">50+</span>
                </div>
                <p className="text-sm opacity-80">Varian Kopi</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative bounce-in">
            <div className="relative z-10">
              <img
                src="/placeholder.svg"
                alt="Kopi Mas Jawir"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-white/20 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-black/10 rounded-2xl -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;