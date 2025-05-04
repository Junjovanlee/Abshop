"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Share2, Shield, Truck, ArrowLeft, Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This is a mock function to simulate getting product data
// In a real application, this would fetch from a database
function getProductData(id: string) {
  const products = [
    {
      id: "0",
      title: "iPhone 15 Pro",
      price: "Rp 18.999.000",
      image: "/iphone-15-pro.png",
      condition: "Baru",
      description:
        "iPhone 15 Pro dengan chip A17 Pro, kamera 48MP, dan layar Super Retina XDR. Tersedia dalam warna Titanium Natural, Titanium Biru, Titanium Putih, dan Titanium Hitam.",
      specs: [
        "Chip A17 Pro dengan CPU 6-core dan GPU 5-core",
        "Layar Super Retina XDR 6.1 inch",
        "Kamera Pro 48MP dengan Telephoto 3x optical zoom",
        "Memori 256GB/512GB/1TB",
        "iOS 17",
        "USB-C, Face ID, 5G",
      ],
      stock: 15,
    },
    {
      id: "1",
      title: "MacBook Air M3",
      price: "Rp 16.499.000",
      image: "/placeholder.svg?key=ierqs",
      condition: "Baru",
      description:
        "MacBook Air dengan chip M3, layar Liquid Retina, dan baterai tahan hingga 18 jam. Desain tipis dan ringan dengan performa luar biasa.",
      specs: [
        "Chip Apple M3 dengan CPU 8-core dan GPU 10-core",
        "Layar Liquid Retina 13.6 inch",
        "Memori 8GB/16GB/24GB unified memory",
        "Penyimpanan 256GB/512GB/1TB/2TB SSD",
        "macOS Sonoma",
        "MagSafe charging, 2 port Thunderbolt/USB 4",
      ],
      stock: 10,
    },
    // More products would be defined here
  ]

  // Find product by ID or return the first one as fallback
  return products.find((p) => p.id === id) || products[0]
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductData(params.id)

  return (
    <div className="flex flex-col min-h-dvh">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <ShoppingCart className="h-5 w-5" />
            <span>ABSHOP</span>
          </Link>
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
          <div className="mb-6">
            <Link
              href="/products"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Kembali ke Produk
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted">
                <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
                <div className="absolute top-2 right-2 flex gap-2">
                  <Button size="icon" variant="ghost" className="rounded-full bg-background/80 backdrop-blur-sm">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Add to wishlist</span>
                  </Button>
                  <Button size="icon" variant="ghost" className="rounded-full bg-background/80 backdrop-blur-sm">
                    <Share2 className="h-5 w-5" />
                    <span className="sr-only">Share</span>
                  </Button>
                </div>
                <div className="absolute bottom-2 left-2 rounded-full bg-background/80 px-2 py-1 text-xs font-medium backdrop-blur-sm">
                  {product.condition}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="relative aspect-square cursor-pointer overflow-hidden rounded-md border bg-muted"
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={`${product.title} view ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <h1 className="text-3xl font-bold">{product.title}</h1>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">(120 ulasan)</span>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-3xl font-bold text-primary">{product.price}</p>
                <p className="text-sm text-muted-foreground">Termasuk pajak & biaya</p>
              </div>

              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span>Garansi Resmi {product.condition === "Baru" ? "1 Tahun" : "3 Bulan"}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="h-4 w-4 text-blue-500" />
                  <span>Pengiriman Cepat ke Seluruh Indonesia</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span className={product.stock > 5 ? "text-green-500" : "text-amber-500"}>
                    {product.stock > 0 ? `Stok: ${product.stock} tersisa` : "Stok Habis"}
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <Button className="w-full" size="lg">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Tambahkan ke Keranjang
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  onClick={() => {
                    // Format pesan WhatsApp
                    const message = `Halo ABSHOP, saya tertarik dengan produk ${product.title} seharga ${product.price}. Mohon informasi lebih lanjut.`
                    window.open(`https://wa.me/628123456789?text=${encodeURIComponent(message)}`, "_blank")
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Beli via WhatsApp
                </Button>
              </div>

              <Tabs defaultValue="description" className="mt-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Deskripsi</TabsTrigger>
                  <TabsTrigger value="specs">Spesifikasi</TabsTrigger>
                  <TabsTrigger value="reviews">Ulasan</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-4">
                  <div className="text-sm leading-relaxed">
                    <p>{product.description}</p>
                  </div>
                </TabsContent>
                <TabsContent value="specs" className="mt-4">
                  <ul className="list-inside list-disc space-y-2 text-sm">
                    {product.specs?.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="reviews" className="mt-4">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Belum ada ulasan untuk produk ini</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Produk Terkait</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg border bg-background p-2">
                  <Link href={`/product/${index + 2}`} className="absolute inset-0 z-10" />
                  <div className="relative aspect-square overflow-hidden rounded-md">
                    <Image
                      src={`/placeholder.svg?key=42lml&height=200&width=200&query=apple product ${index + 1}`}
                      alt={`Related product ${index + 1}`}
                      width={200}
                      height={200}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="font-semibold truncate">Produk Terkait {index + 1}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold">Rp {(10 + index).toFixed(3)}.000</p>
                      <Button size="sm" variant="outline" className="z-20 relative">
                        <ShoppingCart className="h-4 w-4" />
                        <span className="sr-only">Add to cart</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
