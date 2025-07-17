import { MessageCircle, Phone, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppCTA = () => {
  const whatsappNumber = "6281234567890"; // Ganti dengan nomor WhatsApp yang benar
  const message = "Halo! Saya tertarik dengan produk Kopi Mas Jawir. Bisa info lebih lanjut?";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="py-20 coffee-cta">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-custom mb-6 dark-color">
              Siap Memesan Kopi Premium Kami?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto medium-color">
              Hubungi kami sekarang juga untuk konsultasi gratis dan dapatkan penawaran 
              terbaik untuk kopi pilihan Anda!
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 mb-12">
            {/* WhatsApp CTA */}
            <div className="coffee-hero backdrop-blur-md rounded-2xl p-8 fade-in-up">
              <MessageCircle className="h-16 w-16 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-bold mb-3 light-color">Chat WhatsApp</h3>
              <p className="opacity-90 mb-6 medium-color">
                Respon cepat untuk konsultasi dan pemesanan langsung
              </p>
              <Button
                size="lg"
                className="w-full bg-green-500 hover:bg-green-600 text-white border-0"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat Sekarang
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 fade-in-up medium-color">
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto mb-3 opacity-80" />
              <h4 className="font-semibold mb-2">Jam Operasional</h4>
              <p className="text-sm opacity-80">
                Senin - Sabtu: 08:00 - 20:00<br />
                Minggu: 09:00 - 18:00
              </p>
            </div>
            
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-3 opacity-80" />
              <h4 className="font-semibold mb-2">Lokasi Toko</h4>
              <p className="text-sm opacity-80">
                Jl. Kopi Raya No. 123<br />
                Jakarta Selatan 12345
              </p>
            </div>
            
            <div className="text-center">
              <MessageCircle className="h-8 w-8 mx-auto mb-3 opacity-80" />
              <h4 className="font-semibold mb-2">Respon Time</h4>
              <p className="text-sm opacity-80">
                WhatsApp: &lt; 5 menit<br />
                Telepon: Langsung tersambung
              </p>
            </div>
          </div>

          {/* Floating WhatsApp Button */}
          <div className="fixed bottom-6 right-6 z-50">
            <Button
              size="lg"
              className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl animate-pulse"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;