"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, SearchIcon, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useSearchParams } from "next/navigation"

// Mock product data
const allProducts = [
  {
    id: "1",
    title: "iPhone 15 Pro",
    price: "Rp 18.999.000",
    image: "/iphone-15-pro.png",
    condition: "Baru",
    category: "smartphone",
    brand: "apple",
  },
  {
    id: "2",
    title: "MacBook Air M3",
    price: "Rp 16.499.000",
    image: "/placeholder.svg?key=2vwdw",
    condition: "Baru",
    category: "laptop",
    brand: "apple",
  },
  {
    id: "3",
    title: "Samsung S24 Ultra",
    price: "Rp 19.999.000",
    image: "/placeholder.svg?key=e2q9n",
    condition: "Baru",
    category: "smartphone",
    brand: "samsung",
  },
  {
    id: "4",
    title: "iPad Pro",
    price: "Rp 14.999.000",
    image: "/ipad-pro.png",
    condition: "Baru",
    category: "tablet",
    brand: "apple",
  },
  {
    id: "5",
    title: "iPhone 14 Pro (Second)",
    price: "Rp 12.999.000",
    image: "/iphone-14-pro-on-desk.png",
    condition: "Second",
    category: "smartphone",
    brand: "apple",
  },
  {
    id: "6",
    title: "MacBook Pro 2022 (Second)",
    price: "Rp 14.499.000",
    image: "/macbook-pro-on-desk.png",
    condition: "Second",
    category: "laptop",
    brand: "apple",
  },
  {
    id: "7",
    title: "Samsung S23 (Second)",
    price: "Rp 9.999.000",
    image: "/placeholder.svg?key=np3zo",
    condition: "Second",
    category: "smartphone",
    brand: "samsung",
  },
  {
    id: "8",
    title: "Apple Watch Series 8 (Second)",
    price: "Rp 4.999.000",
    image: "/apple-watch-lifestyle.png",
    condition: "Second",
    category: "aksesoris",
    brand: "apple",
  },
  {
    id: "9",
    title: "AirPods Pro 2",
    price: "Rp 3.999.000",
    image: "/airpods-pro-lifestyle.png",
    condition: "Baru",
    category: "aksesoris",
    brand: "apple",
  },
  {
    id: "10",
    title: "iPad Air",
    price: "Rp 9.999.000",
    image: "/placeholder.svg?key=mvtur",
    condition: "Baru",
    category: "tablet",
    brand: "apple",
  },
  {
    id: "11",
    title: "Xiaomi 14 Ultra",
    price: "Rp 16.999.000",
    image: "/placeholder.svg?key=769tu",
    condition: "Baru",
    category: "smartphone",
    brand: "xiaomi",
  },
  {
    id: "12",
    title: "Samsung Galaxy Z Fold 5",
    price: "Rp 24.999.000",
    image: "/placeholder.svg?key=efc1o",
    condition: "Baru",
    category: "smartphone",
    brand: "samsung",
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(query)
  const [filteredProducts, setFilteredProducts] = useState(allProducts)
  const [condition, setCondition] = useState("all")
  const [category, setCategory] = useState("all")
  const [brand, setBrand] = useState("all")
  const [sort, setSort] = useState("newest")

  // Filter products based on search query and filters
  useEffect(() => {
    let results = allProducts

    // Filter by search query
    if (query) {
      results = results.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()))
    }

    // Filter by condition
    if (condition !== "all") {
      results = results.filter((product) =>
        condition === "new" ? product.condition === "Baru" : product.condition === "Second",
      )
    }

    // Filter by category
    if (category !== "all") {
      results = results.filter((product) => product.category === category)
    }

    // Filter by brand
    if (brand !== "all") {
      results = results.filter((product) => product.brand === brand)
    }

    // Sort products
    if (sort === "price-low") {
      results = [...results].sort((a, b) => {
        const priceA = Number.parseInt(a.price.replace(/\D/g, ""))
        const priceB = Number.parseInt(b.price.replace(/\D/g, ""))
        return priceA - priceB
      })
    } else if (sort === "price-high") {
      results = [...results].sort((a, b) => {
        const priceA = Number.parseInt(a.price.replace(/\D/g, ""))
        const priceB = Number.parseInt(b.price.replace(/\D/g, ""))
        return priceB - priceA
      })
    }
    // For "newest" we keep the original order

    setFilteredProducts(results)
  }, [query, condition, category, brand, sort])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
  }

  return (
    <div className="flex flex-col min-h-dvh">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <ShoppingCart className="h-5 w-5" />
            <span>ABSHOP</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <form onSubmit={handleSearch} className="relative w-full max-w-sm">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cari produk..."
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-[300px] lg:w-[400px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
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
              <h1 className="text-3xl font-bold">Hasil Pencarian</h1>
              <p className="text-muted-foreground">
                {query ? `Menampilkan hasil untuk "${query}"` : "Semua produk"}
                {filteredProducts.length > 0 ? ` (${filteredProducts.length} produk)` : ""}
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span className="text-sm font-medium">Filter:</span>
              </div>
              <Select value={condition} onValueChange={setCondition}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Kondisi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Kondisi</SelectItem>
                  <SelectItem value="new">Baru</SelectItem>
                  <SelectItem value="second">Second</SelectItem>
                </SelectContent>
              </Select>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Kategori</SelectItem>
                  <SelectItem value="smartphone">Smartphone</SelectItem>
                  <SelectItem value="laptop">Laptop & PC</SelectItem>
                  <SelectItem value="tablet">Tablet</SelectItem>
                  <SelectItem value="aksesoris">Aksesoris</SelectItem>
                </SelectContent>
              </Select>
              <Select value={brand} onValueChange={setBrand}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Brand</SelectItem>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="samsung">Samsung</SelectItem>
                  <SelectItem value="xiaomi">Xiaomi</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Urutkan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Terbaru</SelectItem>
                  <SelectItem value="price-low">Harga: Rendah ke Tinggi</SelectItem>
                  <SelectItem value="price-high">Harga: Tinggi ke Rendah</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {filteredProducts.map((product, index) => (
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
          ) : (
            <div className="mt-12 text-center py-12 border rounded-lg">
              <SearchIcon className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
              <h2 className="mt-4 text-xl font-semibold">Tidak ada produk yang ditemukan</h2>
              <p className="mt-2 text-muted-foreground">Coba gunakan kata kunci lain atau ubah filter pencarian Anda</p>
              <Button asChild className="mt-6">
                <Link href="/products">Lihat Semua Produk</Link>
              </Button>
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
