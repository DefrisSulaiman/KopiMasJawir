import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const BlogPost = () => {
  const { id } = useParams();

  // Mock data - in real app, this would come from API
  const blogPosts = [
    {
      id: "1",
      title: "Sejarah Kopi Indonesia: Dari Kolonial Hingga Modern",
      content: `
        <p>Indonesia telah menjadi salah satu produsen kopi terbesar di dunia selama berabad-abad. Perjalanan kopi Indonesia dimulai pada masa kolonial Belanda di abad ke-17, ketika tanaman kopi pertama kali diperkenalkan di pulau Jawa.</p>
        
        <p>Pada tahun 1696, Belanda mulai menanam kopi di daerah yang sekarang dikenal sebagai Jakarta. Tanaman kopi ini berasal dari biji kopi Arabika yang dibawa dari Yemen. Kondisi iklim dan tanah Indonesia yang subur terbukti sangat cocok untuk budidaya kopi.</p>
        
        <p>Selama masa kolonial, sistem tanam paksa atau cultuurstelsel diterapkan, memaksa petani lokal untuk menanam kopi dan tanaman ekspor lainnya. Meskipun sistem ini memberikan keuntungan besar bagi pemerintah kolonial, hal ini juga menimbulkan penderitaan bagi rakyat Indonesia.</p>
        
        <p>Setelah kemerdekaan Indonesia pada tahun 1945, industri kopi mulai berkembang dengan pendekatan yang lebih berkelanjutan. Pemerintah Indonesia mulai mendukung petani kopi lokal dan mengembangkan berbagai varietas kopi unggul.</p>
        
        <p>Hari ini, Indonesia dikenal sebagai produsen kopi robusta terbesar keempat di dunia dan memiliki berbagai kopi specialty yang terkenal seperti Kopi Luwak, Kopi Toraja, dan Kopi Aceh Gayo. Industri kopi Indonesia terus berkembang dengan fokus pada kualitas dan keberlanjutan.</p>
        
        <p>Masa depan kopi Indonesia terlihat cerah dengan semakin banyaknya petani yang beralih ke metode organik dan fair trade. Pemerintah juga terus mendukung penelitian dan pengembangan untuk meningkatkan kualitas dan produktivitas kopi Indonesia.</p>
      `,
      image: "/placeholder.svg",
      date: "15 Januari 2024",
      readTime: "8 menit",
      author: "Tim Kopi Mas Jawir",
      authorImage: "/placeholder.svg",
      category: "Sejarah",
      excerpt: "Perjalanan panjang kopi Indonesia dari masa kolonial Belanda hingga menjadi salah satu produsen kopi terbaik di dunia."
    },
    {
      id: "2",
      title: "Tips Menyeduh Kopi yang Sempurna di Rumah",
      content: `
        <p>Menyeduh kopi yang sempurna di rumah bukanlah hal yang mustahil. Dengan peralatan sederhana dan teknik yang tepat, Anda bisa menikmati secangkir kopi berkualitas tinggi layaknya di kedai kopi favorit.</p>
        
        <p>Langkah pertama yang paling penting adalah memilih biji kopi berkualitas. Pilihlah biji kopi yang baru disangrai (roasted) maksimal 2-4 minggu setelah tanggal roasting. Biji kopi yang terlalu lama akan kehilangan aroma dan rasa alaminya.</p>
        
        <p>Grinding atau penggilingan biji kopi sebaiknya dilakukan sesaat sebelum diseduh. Tingkat kehalusan gilingan harus disesuaikan dengan metode seduh yang akan digunakan. Untuk French press gunakan gilingan kasar, untuk V60 gunakan gilingan medium, dan untuk espresso gunakan gilingan halus.</p>
        
        <p>Rasio kopi dan air sangat menentukan kekuatan dan rasa kopi. Rasio yang umum digunakan adalah 1:15 hingga 1:17, artinya 1 gram kopi untuk 15-17 ml air. Anda bisa menyesuaikan rasio ini sesuai dengan selera.</p>
        
        <p>Suhu air juga sangat penting. Gunakan air dengan suhu 90-96°C. Air yang terlalu panas akan membakar kopi dan menghasilkan rasa pahit, sedangkan air yang terlalu dingin tidak akan mengekstrak rasa kopi dengan optimal.</p>
        
        <p>Teknik penuangan juga mempengaruhi hasil akhir. Untuk metode pour over seperti V60, lakukan blooming terlebih dahulu dengan menuangkan sedikit air dan biarkan selama 30 detik. Kemudian lanjutkan dengan penuangan secara perlahan dan melingkar.</p>
        
        <p>Terakhir, nikmati kopi Anda segera setelah diseduh untuk mendapatkan rasa dan aroma yang optimal. Jangan biarkan kopi terlalu lama di atas pemanas karena akan merusak rasa.</p>
      `,
      image: "/placeholder.svg",
      date: "12 Januari 2024",
      readTime: "6 menit",
      author: "Barista Ahli",
      authorImage: "/placeholder.svg",
      category: "Tutorial",
      excerpt: "Panduan lengkap untuk menyeduh kopi yang nikmat di rumah dengan peralatan sederhana yang mudah didapat."
    },
    {
      id: "3",
      title: "Perbedaan Arabika dan Robusta: Mana yang Cocok untuk Anda?",
      content: `
        <p>Dalam dunia kopi, dua varietas utama yang mendominasi pasar global adalah Arabika dan Robusta. Memahami perbedaan keduanya akan membantu Anda memilih jenis kopi yang sesuai dengan selera dan kebutuhan.</p>
        
        <p>Kopi Arabika (Coffea arabica) dikenal sebagai varietas premium dengan karakteristik rasa yang kompleks dan halus. Arabika tumbuh di dataran tinggi dengan ketinggian 600-2000 meter di atas permukaan laut. Kondisi geografis ini memberikan pengaruh signifikan terhadap profil rasa yang dihasilkan.</p>
        
        <p>Dari segi rasa, Arabika memiliki keasaman yang lebih tinggi dan rasa yang lebih manis dibandingkan Robusta. Kandungan kafein Arabika juga lebih rendah, sekitar 0.8-1.4%, yang membuatnya tidak terlalu pahit. Arabika sering memiliki note rasa buah-buahan, floral, atau bahkan cokelat tergantung asal dan proses pengolahan.</p>
        
        <p>Di sisi lain, Robusta (Coffea canephora) adalah varietas yang lebih tahan terhadap hama dan penyakit. Robusta dapat tumbuh di dataran yang lebih rendah dan memiliki produktivitas yang lebih tinggi dibandingkan Arabika. Hal ini membuat harga Robusta umumnya lebih ekonomis.</p>
        
        <p>Robusta memiliki kandungan kafein yang lebih tinggi, sekitar 1.7-4%, yang memberikan rasa pahit yang lebih kuat. Robusta juga menghasilkan crema yang lebih tebal saat dijadikan espresso, sehingga sering digunakan dalam campuran espresso blend.</p>
        
        <p>Secara profil rasa, Robusta cenderung memiliki body yang lebih penuh dan rasa yang lebih earthy atau woody. Meskipun sering dianggap inferior, Robusta berkualitas tinggi dapat memiliki rasa yang sangat nikmat dengan karakteristik uniknya sendiri.</p>
        
        <p>Pilihan antara Arabika dan Robusta sangat bergantung pada preferensi personal. Jika Anda menyukai kopi dengan rasa yang kompleks dan tidak terlalu pahit, Arabika mungkin pilihan yang tepat. Namun jika Anda menyukai kopi yang kuat dan bold dengan kandungan kafein tinggi, Robusta bisa menjadi pilihan yang menarik.</p>
      `,
      image: "/placeholder.svg",
      date: "10 Januari 2024",
      readTime: "7 menit",
      author: "Coffee Expert",
      authorImage: "/placeholder.svg",
      category: "Edukasi",
      excerpt: "Mengenal karakteristik unik dari kedua jenis kopi ini dan bagaimana memilih yang sesuai dengan selera Anda."
    }
  ];

  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artikel tidak ditemukan</h1>
          <Link to="/">
            <Button>Kembali ke Beranda</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/80 backdrop-blur-sm z-10">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Beranda
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Category Badge */}
        <div className="mb-4">
          <Badge variant="default" className="text-sm">
            {post.category}
          </Badge>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 mb-8 text-muted-foreground">
          <div className="flex items-center">
            <img 
              src={post.authorImage} 
              alt={post.author}
              className="h-10 w-10 rounded-full mr-3"
            />
            <div>
              <p className="font-medium text-foreground">{post.author}</p>
              <div className="flex items-center text-sm">
                <Calendar className="h-3 w-3 mr-1" />
                {post.date}
              </div>
            </div>
          </div>
          
          <Separator orientation="vertical" className="h-8" />
          
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime} baca
          </div>
          
          <Separator orientation="vertical" className="h-8" />
          
          <Button variant="ghost" size="sm" className="p-2">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-lg text-muted-foreground mb-6 font-medium leading-relaxed">
            {post.excerpt}
          </div>
          
          <div 
            className="text-foreground leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-muted/50 rounded-lg">
          <div className="flex items-center mb-4">
            <img 
              src={post.authorImage} 
              alt={post.author}
              className="h-16 w-16 rounded-full mr-4"
            />
            <div>
              <h3 className="font-bold text-lg">{post.author}</h3>
              <p className="text-muted-foreground">Penulis & Coffee Expert</p>
            </div>
          </div>
          <p className="text-muted-foreground">
            Berpengalaman lebih dari 10 tahun di industri kopi Indonesia. 
            Passionate dalam berbagi pengetahuan tentang dunia kopi kepada masyarakat luas.
          </p>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link to="/">
            <Button size="lg">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;