import { Button } from '@/components/ui/button';
import { Coffee, Users, Award, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Coffee,
      title: "Kualitas Premium",
      description: "Hanya biji kopi terbaik yang dipilih untuk menghasilkan citarasa yang luar biasa."
    },
    {
      icon: Users,
      title: "Komunitas Petani",
      description: "Mendukung petani lokal dengan memberikan harga yang adil dan berkelanjutan."
    },
    {
      icon: Award,
      title: "Pengalaman Bertahun-tahun",
      description: "Lebih dari 20 tahun pengalaman dalam dunia kopi Indonesia."
    },
    {
      icon: Heart,
      title: "Dibuat dengan Cinta",
      description: "Setiap proses dilakukan dengan penuh perhatian dan dedikasi."
    }
  ];

  return (
    <section id="about" className="py-20 coffee-about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center px-12">
          {/* Image */}
          <div className="relative fade-in-up">
            <img
              src="/placeholder.svg"
              alt="Tentang Kopi Mas Jawir"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-xl">
              <div className="text-white text-center">
                <Coffee className="h-8 w-8 mx-auto mb-1" />
                <span className="text-sm font-bold">1+ Bulan</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 fade-in-up">
            <div>
              <h2 className="text-3xl md:text-4xl font-custom mb-4">
                Tentang Kopi Mas Jawir
              </h2>
              <p className="dark-color text-lg leading-relaxed ">
                apa ya
              </p>
            </div>

            <div>
              <p className="dark-color leading-relaxed mb-6">
                apa ya
              </p>

              <Button size="lg" className="hover-scale">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 px-12">
          <h3 className="text-2xl md:text-3xl font-custom text-center mb-12">
            Nilai-Nilai Kami
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-md hover-scale fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;