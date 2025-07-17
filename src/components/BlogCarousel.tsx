import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BlogCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const blogPosts = [
    {
      title: "Sejarah Kopi Indonesia: Dari Kolonial Hingga Modern",
      excerpt: "Perjalanan panjang kopi Indonesia dari masa kolonial Belanda hingga menjadi salah satu produsen kopi terbaik di dunia.",
      image: "/placeholder.svg",
      date: "15 Januari 2024",
      author: "Tim Kopi Mas Jawir",
      category: "Sejarah"
    },
    {
      title: "Tips Menyeduh Kopi yang Sempurna di Rumah",
      excerpt: "Panduan lengkap untuk menyeduh kopi yang nikmat di rumah dengan peralatan sederhana yang mudah didapat.",
      image: "/placeholder.svg",
      date: "12 Januari 2024",
      author: "Barista Ahli",
      category: "Tutorial"
    },
    {
      title: "Perbedaan Arabika dan Robusta: Mana yang Cocok untuk Anda?",
      excerpt: "Mengenal karakteristik unik dari kedua jenis kopi ini dan bagaimana memilih yang sesuai dengan selera Anda.",
      image: "/placeholder.svg",
      date: "10 Januari 2024",
      author: "Coffee Expert",
      category: "Edukasi"
    },
    {
      title: "Perkebunan Kopi Organik: Masa Depan Industri Kopi",
      excerpt: "Bagaimana metode organik tidak hanya menghasilkan kopi berkualitas tinggi tapi juga ramah lingkungan.",
      image: "/placeholder.svg",
      date: "8 Januari 2024",
      author: "Sustainability Team",
      category: "Lingkungan"
    },
    {
      title: "Kopi Luwak: Mitos dan Fakta di Balik Kopi Termahal",
      excerpt: "Mengungkap kebenaran di balik kopi luwak, proses pembuatannya, dan mengapa harganya begitu tinggi.",
      image: "/placeholder.svg",
      date: "5 Januari 2024",
      author: "Research Team",
      category: "Edukasi"
    }
  ];

  const itemsPerPage = 3;
  const totalSlides = Math.ceil(blogPosts.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentPosts = () => {
    const start = currentSlide * itemsPerPage;
    return blogPosts.slice(start, start + itemsPerPage);
  };

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12 fade-in-up">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Blog & Artikel
            </h2>
            <p className="text-muted-foreground text-lg">
              Pelajari lebih dalam tentang dunia kopi bersama para ahli
            </p>
          </div>
          
          <div className="hidden md:flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
                  {blogPosts
                    .slice(slideIndex * itemsPerPage, (slideIndex + 1) * itemsPerPage)
                    .map((post, index) => (
                      <Card
                        key={index}
                        className="hover-scale border-0 shadow-lg overflow-hidden group"
                      >
                        <div className="relative">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        <CardContent className="p-6">
                          <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {post.date}
                            </div>
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              {post.author}
                            </div>
                          </div>

                          <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>

                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>

                          <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:bg-transparent">
                            Baca Selengkapnya
                            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center space-x-2 mt-6">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;