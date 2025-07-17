import { Button } from '@/components/ui/button';
import { Coffee, Award, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center coffee-hero px-12">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6 fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold font-custom leading-tight">
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
<a href="#contact">
  <Button
  size="lg"
  variant="outline"
  className="
    relative
    overflow-hidden
    border-white text-white
    hover:text-[hsl(var(--coffee-dark))]
    z-10
    before:content-['']
    before:absolute
    before:inset-0
    before:bg-white
    before:scale-y-0
    before:origin-bottom
    before:transition-transform
    before:duration-300
    hover:before:scale-y-100
  "
>
<span className="relative z-20 transition-colors duration-300 flex items-center">
  <Coffee className="mr-2 h-5 w-5" /> 
  Pesan Sekarang
</span>
</Button>
</a>
<a href="#products">
  <Button
  size="lg"
  variant="outline"
  className="
    relative
    overflow-hidden
    border-white text-white
    hover:text-[hsl(var(--coffee-dark))]
    z-10
    before:content-['']
    before:absolute
    before:inset-0
    before:bg-white
    before:scale-y-0
    before:origin-bottom
    before:transition-transform
    before:duration-300
    hover:before:scale-y-100
  "
>
  <span className="relative z-20 transition-colors duration-300">
    Lihat Produk
  </span>
</Button>
</a>
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
                  <span className="text-2xl font-bold">20+</span>
                </div>
                <p className="text-sm opacity-80">Pelanggan Puas</p>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-2 mb-2">
                  <Coffee className="h-5 w-5" />
                  <span className="text-2xl font-bold">6</span>
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