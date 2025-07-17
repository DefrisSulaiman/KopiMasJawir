import { Coffee, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Produk', href: '#products' },
    { name: 'Blog', href: '#blog' },
  ];

  const products = [
    { name: 'Kopi Arabika Premium', href: '#' },
    { name: 'Kopi Robusta Strong', href: '#' },
    { name: 'Kopi Luwak Special', href: '#' },
    { name: 'Kopi Blend Signature', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">Kopi Mas Jawir</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Menghadirkan kopi premium Indonesia dengan cita rasa autentik dan kualitas terbaik. 
              Dari perkebunan hingga cangkir Anda, kami pastikan setiap tegukan adalah pengalaman istimewa.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-scale"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Navigasi Cepat</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Produk Unggulan</h3>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <a
                    href={product.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Kontak Kami</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm opacity-80">
                  <p>Jl. Kopi Raya No. 123</p>
                  <p>Jakarta Selatan 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm opacity-80">(021) 1234-5678</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm opacity-80">info@kopimasjawir.com</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm opacity-80">
                  <p>Sen-Sab: 08:00 - 20:00</p>
                  <p>Minggu: 09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-60">
              © {currentYear} Kopi Mas Jawir. Hak cipta dilindungi undang-undang.
            </p>
            <div className="flex space-x-6 text-sm opacity-60">
              <a href="#" className="hover:opacity-100 transition-opacity">
                Kebijakan Privasi
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Syarat & Ketentuan
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;