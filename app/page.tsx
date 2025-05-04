import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ShoppingCart,
  Phone,
  Smartphone,
  Laptop,
  Shield,
  CreditCard,
  Package,
  Search,
  Tablet,
  Headphones,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <ShoppingCart className="h-5 w-5" />
            <span>ABSHOP</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cari produk..."
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-[300px] lg:w-[400px]"
              />
            </div>
            <nav className="flex gap-6">
              <Link href="/products" className="text-sm font-medium hover:underline underline-offset-4">
                Produk
              </Link>
              <Link href="/new-arrivals" className="text-sm font-medium hover:underline underline-offset-4">
                Baru
              </Link>
              <Link href="/second-hand" className="text-sm font-medium hover:underline underline-offset-4">
                Second
              </Link>
              <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
                Tentang
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                0
              </span>
            </Link>
            <Link
              href="/login"
              className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Login
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 border-b">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    ABSHOP - Toko Gadget Terpercaya
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Jual berbagai macam produk Apple dan brand handphone lainnya. Produk baru dan second berkualitas
                    dengan harga terbaik.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/products"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Belanja Sekarang
                  </Link>
                  <Link
                    href="/promo"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Lihat Promo
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?key=spp2t"
                  width={550}
                  height={550}
                  alt="ABSHOP Featured Products"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Produk Unggulan</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Temukan produk Apple dan smartphone terbaru dengan kualitas terbaik
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4">
              {[
                {
                  title: "iPhone 15 Pro",
                  price: "Rp 18.999.000",
                  image: "/iphone-15-pro.png",
                },
                {
                  title: "MacBook Air M3",
                  price: "Rp 16.499.000",
                  image: "/placeholder.svg?key=2vwdw",
                },
                {
                  title: "Samsung S24 Ultra",
                  price: "Rp 19.999.000",
                  image: "/placeholder.svg?key=e2q9n",
                },
                {
                  title: "iPad Pro",
                  price: "Rp 14.999.000",
                  image: "/ipad-pro.png",
                },
              ].map((product, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg border bg-background p-2">
                  <Link href={`/product/${index}`} className="absolute inset-0 z-10" />
                  <div className="relative aspect-square overflow-hidden rounded-md">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={200}
                      height={200}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-black/60 p-2 text-white">
                      <span className="text-xs">Baru</span>
                    </div>
                  </div>
                  <div className="p-2">
                    <h3 className="font-semibold">{product.title}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold">{product.price}</p>
                      <Button size="sm" variant="outline" className="z-20 relative">
                        <ShoppingCart className="h-4 w-4" />
                        <span className="sr-only">Add to cart</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link
                href="/products"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Lihat Semua Produk
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Kategori Produk</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Temukan produk berdasarkan kategori yang Anda inginkan
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Smartphone",
                  icon: <Smartphone className="h-10 w-10 mb-2" />,
                  description: "iPhone, Samsung, Xiaomi, dan lainnya",
                },
                {
                  title: "Laptop & PC",
                  icon: <Laptop className="h-10 w-10 mb-2" />,
                  description: "MacBook, iMac, dan PC Gaming",
                },
                {
                  title: "Tablet",
                  icon: <Tablet className="h-10 w-10 mb-2" />,
                  description: "iPad, Samsung Tab, dan lainnya",
                },
                {
                  title: "Aksesoris",
                  icon: <Headphones className="h-10 w-10 mb-2" />,
                  description: "Headphone, Charger, Case, dan lainnya",
                },
              ].map((category, index) => (
                <Link href={`/category/${category.title.toLowerCase()}`} key={index}>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center transition-all hover:border-primary hover:shadow-md">
                    {category.icon}
                    <h3 className="text-xl font-bold">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Brand Populer</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Temukan produk dari brand favorit Anda
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3 lg:grid-cols-6">
              {[
                { name: "Apple", logo: "/apple-logo-minimalist.png" },
                { name: "Samsung", logo: "/samsung-logo.png" },
                { name: "Xiaomi", logo: "/xiaomi-logo.png" },
                { name: "OPPO", logo: "/placeholder.svg?key=s78sv" },
                { name: "Vivo", logo: "/placeholder.svg?key=i9ai1" },
                { name: "Realme", logo: "/placeholder.svg?key=1wchn" },
              ].map((brand, index) => (
                <Link href={`/brand/${brand.name.toLowerCase()}`} key={index}>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 text-center transition-all hover:border-primary hover:shadow-md">
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={brand.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                    <h3 className="text-sm font-medium">{brand.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Produk Second Berkualitas</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dapatkan gadget second dengan kondisi terbaik dan harga terjangkau
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4">
              {[
                {
                  title: "iPhone 14 Pro (Second)",
                  price: "Rp 12.999.000",
                  image: "/iphone-14-pro-on-desk.png",
                },
                {
                  title: "MacBook Pro 2022 (Second)",
                  price: "Rp 14.499.000",
                  image: "/macbook-pro-on-desk.png",
                },
                {
                  title: "Samsung S23 (Second)",
                  price: "Rp 9.999.000",
                  image: "/placeholder.svg?key=np3zo",
                },
                {
                  title: "Apple Watch Series 8 (Second)",
                  price: "Rp 4.999.000",
                  image: "/apple-watch-lifestyle.png",
                },
              ].map((product, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg border bg-background p-2">
                  <Link href={`/product/${index + 4}`} className="absolute inset-0 z-10" />
                  <div className="relative aspect-square overflow-hidden rounded-md">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={200}
                      height={200}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-black/60 p-2 text-white">
                      <span className="text-xs">Second</span>
                    </div>
                  </div>
                  <div className="p-2">
                    <h3 className="font-semibold">{product.title}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold">{product.price}</p>
                      <Button size="sm" variant="outline" className="z-20 relative">
                        <ShoppingCart className="h-4 w-4" />
                        <span className="sr-only">Add to cart</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link
                href="/second-hand"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Lihat Semua Produk Second
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Produk Terbaru</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Produk terbaru yang baru saja ditambahkan ke katalog kami
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4">
              {[
                {
                  title: "iPhone 15 Pro Max",
                  price: "Rp 22.999.000",
                  image: "/iphone-15-pro-max-display.png",
                  date: "2 jam yang lalu",
                },
                {
                  title: "Samsung Galaxy S24",
                  price: "Rp 15.999.000",
                  image: "/samsung-galaxy-s24.png",
                  date: "5 jam yang lalu",
                },
                {
                  title: "MacBook Pro M3",
                  price: "Rp 25.999.000",
                  image: "/macbook-pro-m3.png",
                  date: "1 hari yang lalu",
                },
                {
                  title: "AirPods Max",
                  price: "Rp 8.999.000",
                  image: "/placeholder.svg?key=wv7s2",
                  date: "2 hari yang lalu",
                },
              ].map((product, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg border bg-background p-2">
                  <Link href={`/product/${index + 10}`} className="absolute inset-0 z-10" />
                  <div className="relative aspect-square overflow-hidden rounded-md">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={200}
                      height={200}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                      Baru
                    </div>
                    <div className="absolute bottom-2 right-2 rounded-full bg-background/80 px-2 py-1 text-xs font-medium backdrop-blur-sm">
                      {product.date}
                    </div>
                  </div>
                  <div className="p-2">
                    <h3 className="font-semibold">{product.title}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold">{product.price}</p>
                      <Button size="sm" variant="outline" className="z-20 relative">
                        <ShoppingCart className="h-4 w-4" />
                        <span className="sr-only">Add to cart</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link
                href="/new-arrivals"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Lihat Semua Produk Terbaru
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mengapa Memilih ABSHOP?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Kami menyediakan layanan terbaik untuk kebutuhan gadget Anda
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
                <Shield className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Keamanan Terjamin</h3>
                <p className="text-sm text-muted-foreground">
                  Sistem keamanan backend yang ketat mencegah manipulasi harga dan data
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
                <CreditCard className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Xendit Payment Gateway</h3>
                <p className="text-sm text-muted-foreground">
                  Pembayaran aman dan mudah dengan berbagai metode pembayaran
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
                <Package className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Pengiriman Cepat</h3>
                <p className="text-sm text-muted-foreground">
                  Pengiriman ke seluruh Indonesia dengan berbagai pilihan kurir
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
                <Smartphone className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Produk Berkualitas</h3>
                <p className="text-sm text-muted-foreground">Semua produk dijamin asli dan berkualitas tinggi</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
                <Phone className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Layanan Pelanggan 24/7</h3>
                <p className="text-sm text-muted-foreground">Tim dukungan pelanggan siap membantu kapan saja</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
                <Laptop className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Garansi Resmi</h3>
                <p className="text-sm text-muted-foreground">Semua produk baru dilengkapi dengan garansi resmi</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Berlangganan Newsletter ABSHOP</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dapatkan info terbaru tentang produk dan promo menarik dari ABSHOP
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <div className="grid w-full gap-2">
                <form className="flex gap-2">
                  <Input type="email" placeholder="Masukkan email Anda" className="max-w-lg flex-1" />
                  <Button type="submit">Berlangganan</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  Kami tidak akan mengirimkan spam.{" "}
                  <Link href="/privacy" className="underline underline-offset-2">
                    Kebijakan Privasi
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} ABSHOP. Hak Cipta Dilindungi.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/terms" className="text-xs hover:underline underline-offset-4">
            Syarat & Ketentuan
          </Link>
          <Link href="/privacy" className="text-xs hover:underline underline-offset-4">
            Kebijakan Privasi
          </Link>
          <Link href="/about" className="text-xs hover:underline underline-offset-4">
            Tentang Kami
          </Link>
          <Link href="/contact" className="text-xs hover:underline underline-offset-4">
            Kontak
          </Link>
        </nav>
      </footer>
    </div>
  )
}
