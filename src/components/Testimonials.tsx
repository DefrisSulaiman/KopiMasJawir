import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Pengusaha",
      image: "/placeholder.svg",
      rating: 5,
      comment: "Kopi Mas Jawir benar-benar luar biasa! Rasanya autentik dan aromanya menggoda. Sudah 2 tahun jadi pelanggan setia dan tidak pernah kecewa."
    },
    {
      name: "Sari Dewi",
      role: "Coffee Enthusiast",
      image: "/placeholder.svg",
      rating: 5,
      comment: "Sebagai pecinta kopi, saya sangat merekomendasikan Kopi Mas Jawir. Kualitasnya premium dengan harga yang sangat terjangkau."
    },
    {
      name: "Ahmad Rahman",
      role: "Kafe Owner",
      image: "/placeholder.svg",
      rating: 5,
      comment: "Untuk keperluan kafe saya, Kopi Mas Jawir menjadi supplier terpercaya. Konsistensi rasa dan kualitasnya sangat baik."
    },
    {
      name: "Linda Hartono",
      role: "Ibu Rumah Tangga",
      image: "/placeholder.svg",
      rating: 4,
      comment: "Keluarga saya menyukai semua varian kopi dari Mas Jawir. Terutama yang arabika premium, rasanya halus dan tidak bikin sakit perut."
    },
    {
      name: "Ridwan Fauzi",
      role: "Mahasiswa",
      image: "/placeholder.svg",
      rating: 5,
      comment: "Harga mahasiswa friendly tapi rasa premium! Kopi robusta strong-nya cocok banget buat begadang ngerjain tugas."
    },
    {
      name: "Maya Sari",
      role: "Office Worker",
      image: "/placeholder.svg",
      rating: 5,
      comment: "Pengiriman cepat, packaging rapi, dan yang penting kopinya enak! Jadi teman setia di hari-hari kerja yang padat."
    }
  ];

  return (
    <section id="testimonials" className="py-20 coffee-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kata Mereka Tentang Kami
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dengarkan pengalaman nyata dari ribuan pelanggan yang telah 
            merasakan kualitas premium Kopi Mas Jawir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover-scale border-0 shadow-lg relative overflow-hidden fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </p>

                {/* User Info */}
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center fade-in-up">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">1000+</div>
              <div className="text-sm text-muted-foreground">Pelanggan Puas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
              <div className="text-sm text-muted-foreground">Rating Rata-rata</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Repeat Order</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">24h</div>
              <div className="text-sm text-muted-foreground">Pengiriman</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;