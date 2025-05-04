import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Search, Filter, ChevronDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProductsPage() {
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
              <Link href="/products" className="text-sm font-medium underline underline-offset-4">
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
              <h1 className="text-3xl font-bold">Semua Produk</h1>
              <p className="text-muted-foreground">Temukan berbagai produk Apple dan smartphone terbaik</p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span className="text-sm font-medium">Filter:</span>
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Kategori</SelectItem>
                  <SelectItem value="iphone">iPhone</SelectItem>
                  <SelectItem value="macbook">MacBook</SelectItem>
                  <SelectItem value="ipad">iPad</SelectItem>
                  <SelectItem value="samsung">Samsung</SelectItem>
                  <SelectItem value="other">Lainnya</SelectItem>
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
            {[
              {
                title: "iPhone 15 Pro",
                price: "Rp 18.999.000",
                image: "/iphone-15-pro.png",
                condition: "Baru",
              },
              {
                title: "MacBook Air M3",
                price: "Rp 16.499.000",
                image: "/placeholder.svg?key=swt1r",
                condition: "Baru",
              },
              {
                title: "Samsung S24 Ultra",
                price: "Rp 19.999.000",
                image: "/placeholder.svg?key=ya0mt",
                condition: "Baru",
              },
              {
                title: "iPad Pro",
                price: "Rp 14.999.000",
                image: "/ipad-pro.png",
                condition: "Baru",
              },
              {
                title: "iPhone 14 Pro (Second)",
                price: "Rp 12.999.000",
                image: "/iphone-14-pro-on-desk.png",
                condition: "Second",
              },
              {
                title: "MacBook Pro 2022 (Second)",
                price: "Rp 14.499.000",
                image: "/macbook-pro-on-desk.png",
                condition: "Second",
              },
              {
                title: "Samsung S23 (Second)",
                price: "Rp 9.999.000",
                image: "/placeholder.svg?key=378vd",
                condition: "Second",
              },
              {
                title: "Apple Watch Series 8 (Second)",
                price: "Rp 4.999.000",
                image: "/apple-watch-lifestyle.png",
                condition: "Second",
              },
              {
                title: "AirPods Pro 2",
                price: "Rp 3.999.000",
                image: "/airpods-pro-lifestyle.png",
                condition: "Baru",
              },
              {
                title: "iPad Air",
                price: "Rp 9.999.000",
                image: "/placeholder.svg?key=mvtur",
                condition: "Baru",
              },
              {
                title: 'MacBook Pro 16"',
                price: "Rp 29.999.000",
                image: "/placeholder.svg?height=200&width=200&query=macbook pro 16",
                condition: "Baru",
              },
              {
                title: "iPhone 13 (Second)",
                price: "Rp 8.999.000",
                image: "/placeholder.svg?height=200&width=200&query=iphone 13",
                condition: "Second",
              },
              {
                title: "Samsung Z Fold 5",
                price: "Rp 24.999.000",
                image: "/placeholder.svg?height=200&width=200&query=samsung z fold",
                condition: "Baru",
              },
              {
                title: "Google Pixel 8 Pro",
                price: "Rp 14.999.000",
                image: "/placeholder.svg?height=200&width=200&query=google pixel 8 pro",
                condition: "Baru",
              },
              {
                title: "Xiaomi 14 Ultra",
                price: "Rp 16.999.000",
                image: "/placeholder.svg?height=200&width=200&query=xiaomi 14 ultra",
                condition: "Baru",
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
                  <div
                    className={`absolute inset-x-0 bottom-0 flex items-center justify-center ${product.condition === "Baru" ? "bg-primary/80" : "bg-black/60"} p-2 text-white`}
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
          <div className="mt-8 flex items-center justify-center gap-2">
            <Button variant="outline" size="icon" disabled>
              <ChevronDown className="h-4 w-4 rotate-90" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button size="sm" variant="outline" className="h-8 w-8">
              1
            </Button>
            <Button size="sm" variant="ghost" className="h-8 w-8">
              2
            </Button>
            <Button size="sm" variant="ghost" className="h-8 w-8">
              3
            </Button>
            <Button size="sm" variant="ghost" className="h-8 w-8">
              4
            </Button>
            <Button size="sm" variant="ghost" className="h-8 w-8">
              5
            </Button>
            <Button variant="outline" size="icon">
              <ChevronDown className="h-4 w-4 -rotate-90" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
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
