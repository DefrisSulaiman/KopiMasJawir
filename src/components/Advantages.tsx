import { Leaf, Shield, Truck, Clock, Award, Star } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: Leaf,
      title: "100% Organik",
      description: "Kopi kami ditanam secara organik tanpa pestisida berbahaya",
      color: "text-green-600"
    },
    {
      icon: Shield,
      title: "Kualitas Terjamin",
      description: "Setiap batch kopi melalui kontrol kualitas yang ketat",
      color: "text-blue-600"
    },
    {
      icon: Truck,
      title: "Pengiriman Cepat",
      description: "Dikirim fresh dalam 24 jam ke seluruh Sangatta",
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: " Fresh",
      description: "Disangrai fresh setiap hari untuk kesegaran maksimal",
      color: "text-orange-600"
    },
    {
      icon: Award,
      title: "Bersertifikat",
      description: "Adakah sertif nya",
      color: "text-yellow-600"
    },
    {
      icon: Star,
      title: "Rasa Autentik",
      description: "Mempertahankan citarasa Jawir yang khas",
      color: "text-red-600"
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-background px-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-custom mb-4">
            Keunggulan Kopi Mas Jawir
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mengapa memilih kopi kami? Berikut adalah keunggulan yang membuat 
            Kopi Mas Jawir menjadi pilihan terbaik untuk pecinta kopi sejati.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 p-3 rounded-full bg-gray-100 group-hover:bg-primary/10 transition-colors duration-300`}>
                    <IconComponent className={`h-6 w-6 ${advantage.color} group-hover:text-primary transition-colors duration-300`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center fade-in-up">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-custom mb-4">
              Siap Merasakan Perbedaannya?
            </h3>
            <p className="text-muted-foreground text-lg mb-6 max-w-lg mx-auto">
              Bergabunglah dengan ribuan pelanggan yang telah merasakan kualitas 
              premium Kopi Mas Jawir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-scale">
                Pesan Sekarang
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Lihat Katalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;