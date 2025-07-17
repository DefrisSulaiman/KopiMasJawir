import ProductCard from './ProductCard';

const Products = () => {
  const products = [
    {
      name: "Kopi Arabika Premium",
      description: "Kopi arabika pilihan dengan citarasa halus dan aroma yang menggoda. Dipetik langsung dari perkebunan pegunungan.",
      price: "Rp 75.000",
      originalPrice: "Rp 85.000",
      image: "/placeholder.svg",
      rating: 5,
      isPopular: true
    },
    {
      name: "Kopi Robusta Strong",
      description: "Kopi robusta dengan rasa yang kuat dan kafein tinggi. Cocok untuk pecinta kopi dengan karakter bold.",
      price: "Rp 65.000",
      image: "/placeholder.svg",
      rating: 4
    },
    {
      name: "Kopi Luwak Special",
      description: "Kopi luwak asli Indonesia dengan proses fermentasi alami. Cita rasa yang unik dan eksotis.",
      price: "Rp 150.000",
      originalPrice: "Rp 175.000",
      image: "/placeholder.svg",
      rating: 5,
      isPopular: true
    },
    {
      name: "Kopi Toraja Highland",
      description: "Kopi dari dataran tinggi Toraja dengan karakteristik earthy dan full body yang khas.",
      price: "Rp 80.000",
      image: "/placeholder.svg",
      rating: 5
    },
    {
      name: "Kopi Gayo Mountain",
      description: "Kopi Gayo dari Aceh dengan rasa yang clean dan bright acidity yang menyegarkan.",
      price: "Rp 70.000",
      image: "/placeholder.svg",
      rating: 4
    },
    {
      name: "Kopi Blend Signature",
      description: "Campuran istimewa berbagai biji kopi terbaik Indonesia untuk pengalaman rasa yang kompleks.",
      price: "Rp 85.000",
      originalPrice: "Rp 95.000",
      image: "/placeholder.svg",
      rating: 5
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Produk Pilihan Kami
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nikmati koleksi kopi premium terbaik dari berbagai daerah di Indonesia. 
            Setiap biji kopi dipilih dengan teliti untuk memberikan pengalaman terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;