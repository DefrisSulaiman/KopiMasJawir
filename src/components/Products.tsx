import ProductCard from './ProductCard';

const Products = () => {
  const products = [
    {
      name: "Kopi Hitam Mas Jawir",
      description: "belum",
      price: "Rp 8.000",
      originalPrice: "Rp 10.000",
      image: "/placeholder.svg",
      rating: 5,
      isPopular: true
    },
    {
      name: "Kopi Susu Mas Guren",
      description: "belum",
      price: "Rp 8.000",
      originalPrice: "Rp 10.000",
      image: "/placeholder.svg",
      rating: 4
    },
    {
      name: "Mas Macho",
      description: "belum",
      price: "Rp 12.000",
      originalPrice: "Rp 15.000",
      image: "/placeholder.svg",
      rating: 5,
      isPopular: true
    },
    {
      name: "Mas Cokro",
      description: "belum",
      price: "Rp 15.000",
      originalPrice: "Rp 20.000",
      image: "/placeholder.svg",
      rating: 5
    },
    {
      name: "Mas Hazel",
      description: "belum",
      price: "Rp 12.000",
      originalPrice: "Rp 15.000",
      image: "/placeholder.svg",
      rating: 4
    },
    {
      name: "Mbak Perssik",
      description: "belum",
      price: "Rp 12.000",
      originalPrice: "Rp 20.000",
      image: "/placeholder.svg",
      rating: 5
    }
  ];

  return (
    <section id="products" className="py-20 coffee-products px-12">
      <div className="container mx-auto">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-5xl font-custom mb-4 neutral-color">
            Produk Pilihan Kami
          </h2>
          <p className=" text-lg max-w-2xl mx-auto light-color">
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