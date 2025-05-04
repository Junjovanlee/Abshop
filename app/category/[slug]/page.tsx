import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Search, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// This is a mock function to get category data
// In a real app, this would fetch from a database
function getCategoryData(slug: string) {
  const categories = {
    smartphone: {
      title: "Smartphone",
      description: "Temukan berbagai smartphone terbaru dan terbaik",
      products: [
        {
          id: "1",
          title: "iPhone 15 Pro",
          price: "Rp 18.999.000",
          image: "/iphone-15-pro.png",
          condition: "Baru",
        },
        {
          id: "2",
          title: "Samsung S24 Ultra",
          price: "Rp 19.999.000",
          image: "/placeholder.svg?key=e2q9n",
          condition: "Baru",
        },
        {
          id: "3",
          title: "iPhone 14 Pro (Second)",
          price: "Rp 12.999.000",
          image: "/iphone-14-pro-on-desk.png",
          condition: "Second",
        },
        {
          id: "4",
          title: "Samsung S23 (Second)",
          price: "Rp 9.999.000",
          image: "/placeholder.svg?key=np3zo",
          condition: "Second",
        },
        {
          id: "5",
          title: "iPhone 15 Pro Max",
          price: "Rp 22.999.000",
          image: "/iphone-15-pro-max-display.png",
          condition: "Baru",
        },
        {
          id: "6",
          title: "Samsung Galaxy S24",
          price: "Rp 15.999.000",
          image: "/samsung-galaxy-s24.png",
          condition: "Baru",
        },
      ],
    },
    laptop: {
      title: "Laptop & PC",
      description: "Temukan berbagai laptop dan PC terbaru dan terbaik",
      products: [
        {
          id: "1",
          title: "MacBook Air M3",
          price: "Rp 16.499.000",
          image: "/placeholder.svg?key=2vwdw",
          condition: "Baru",
        },
        {
          id: "2",
          title: "MacBook Pro 2022 (Second)",
          price: "Rp 14.499.000",
          image: "/macbook-pro-on-desk.png",
          condition: "Second",
        },
        {
          id: "3",
          title: "MacBook Pro M3",
          price: "Rp 25.999.000",
          image: "/macbook-pro-m3.png",
          condition: "Baru",
        },
        {
          id: "4",
          title: "iMac 24-inch",
          price: "Rp 21.999.000",
          image: "/placeholder.svg?key=tb3zd",
          condition: "Baru",
        },
      ],
    },
    tablet: {
      title: "Tablet",
      description: "Temukan berbagai tablet terbaru dan terbaik",
      products: [
        {
          id: "1",
          title: "iPad Pro",
          price: "Rp 14.999.000",
          image: "/ipad-pro.png",
          condition: "Baru",
        },
        {
          id: "2",
          title: "iPad Air",
          price: "Rp 9.999.000",
          image: "/placeholder.svg?key=mvtur",
          condition: "Baru",
        },
        {
          id: "3",
          title: "Samsung Galaxy Tab S9",
          price: "Rp 12.999.000",
          image: "/placeholder.svg?key=2pfsn",
          condition: "Baru",
        },
      ],
    },
    aksesoris: {
      title: "Aksesoris",
      description: "Temukan berbagai aksesoris untuk gadget Anda",
      products: [
        {
          id: "1",
          title: "AirPods Pro 2",
          price: "Rp 3.999.000",
          image: "/airpods-pro-lifestyle.png",
          condition: "Baru",
        },
        {
          id: "2",
          title: "Apple Watch Series 8 (Second)",
          price: "Rp 4.999.000",
          image: "/apple-watch-lifestyle.png",
          condition: "Second",
        },
        {
          id: "3",
          title: "Apple Pencil",
          price: "Rp 1.999.000",
          image: "/placeholder.svg?key=k57x5",
          condition: "Baru",
        },
        {
          id: "4",
          title: "MagSafe Charger",
          price: "Rp 799.000",
          image: "/placeholder.svg?key=72oq2",
          condition: "Baru",
        },
      ],
    },
  }

  // Default to smartphone if category not found
  return categories[slug as keyof typeof categories] || categories.smartphone
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryData(params.slug)

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
        <div className="container px-4 py-6 md:py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">{category.title}</h1>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span className="text-sm font-medium">Filter:</span>
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Kondisi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Kondisi</SelectItem>
                  <SelectItem value="new">Baru</SelectItem>
                  <SelectItem value="second">Second</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Urutkan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Terbaru</SelectItem>
                  <SelectItem value="price-low">Harga: Rendah ke Tinggi</SelectItem>
                  <SelectItem value="price-high">Harga: Tinggi ke Rendah</SelectItem>
                  <SelectItem value="popular">Terpopuler</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {category.products.map((product, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg border bg-background p-2">
                <Link href={`/product/${product.id}`} className="absolute inset-0 z-10" />
                <div className="relative aspect-square overflow-hidden rounded-md">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-x-0 bottom-0 flex items-center justify-center ${
                      product.condition === "Baru" ? "bg-primary/80" : "bg-black/60"
                    } p-2 text-white`}
                  >
                    <span className="text-xs">{product.condition}</span>
                  </div>
                </div>
                <div className="p-2">
                  <h3 className="font-semibold truncate">{product.title}</h3>
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
          {category.products.length === 0 && (
            <div className="mt-12 text-center">
              <p className="text-muted-foreground">Tidak ada produk yang ditemukan dalam kategori ini.</p>
            </div>
          )}
        </div>
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
