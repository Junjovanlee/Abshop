"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Trash2, ArrowLeft, CreditCard, Package } from "lucide-react"
import { useRouter } from "next/navigation"

// Mock cart data
const initialCartItems = [
  {
    id: "1",
    title: "iPhone 15 Pro",
    price: 18999000,
    image: "/iphone-15-pro.png",
    quantity: 1,
  },
  {
    id: "2",
    title: "AirPods Pro 2",
    price: 3999000,
    image: "/airpods-pro-lifestyle.png",
    quantity: 1,
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 50000 : 0 // Free shipping over certain amount could be implemented
  const tax = Math.round(subtotal * 0.11) // 11% tax
  const total = subtotal + shipping + tax

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  // Update quantity
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  // Remove item
  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  // Tambahkan state untuk metode pembayaran
  const [paymentMethod, setPaymentMethod] = useState("whatsapp")

  // Ubah fungsi handleCheckout
  const handleCheckout = async () => {
    if (cartItems.length === 0) return

    setLoading(true)

    try {
      // Format pesan WhatsApp
      const items = cartItems
        .map((item) => `${item.title} (${item.quantity}x) - ${formatCurrency(item.price * item.quantity)}`)
        .join("%0A")

      const totalMessage = `Total: ${formatCurrency(total)}`
      const message = `Halo ABSHOP, saya ingin memesan:%0A${items}%0A${totalMessage}%0ASaya memilih metode pembayaran: ${paymentMethod}`

      // Untuk demo, kita hanya menampilkan alert
      if (paymentMethod === "whatsapp") {
        // Dalam implementasi nyata, ganti nomor WhatsApp dengan nomor toko Anda
        window.open(`https://wa.me/628123456789?text=${message}`, "_blank")
      } else {
        // Untuk COD dan pembayaran manual, tampilkan konfirmasi
        alert(
          `Pesanan Anda telah diterima dengan metode pembayaran ${paymentMethod === "cod" ? "COD" : "Pembayaran Manual"}. Tim kami akan menghubungi Anda segera.`,
        )
      }

      // Clear cart
      setCartItems([])
      router.push("/")
    } catch (error) {
      console.error("Checkout error:", error)
      alert("Terjadi kesalahan saat checkout. Silakan coba lagi.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-dvh">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <ShoppingCart className="h-5 w-5" />
            <span>ABSHOP</span>
          </Link>
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
              Lanjutkan Belanja
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-6">Keranjang Belanja</h1>

          {cartItems.length === 0 ? (
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <ShoppingCart className="h-12 w-12 text-muted-foreground" />
                <h3 className="text-xl font-semibold">Keranjang Anda Kosong</h3>
                <p className="text-muted-foreground">Anda belum menambahkan produk ke keranjang</p>
                <Button asChild className="mt-4">
                  <Link href="/products">Mulai Belanja</Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Item ({cartItems.length})</h3>
                    <div className="divide-y">
                      {cartItems.map((item) => (
                        <div key={item.id} className="py-4 flex gap-4">
                          <div className="relative h-24 w-24 overflow-hidden rounded-md border">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-1 flex-col justify-between">
                            <div>
                              <h4 className="font-medium">{item.title}</h4>
                              <p className="text-sm text-muted-foreground">ID: {item.id}</p>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  -
                                </Button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  +
                                </Button>
                              </div>
                              <div className="flex items-center gap-4">
                                <p className="font-medium">{formatCurrency(item.price * item.quantity)}</p>
                                <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                                  <Trash2 className="h-4 w-4" />
                                  <span className="sr-only">Remove</span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Ringkasan Pesanan</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>{formatCurrency(subtotal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Pengiriman</span>
                        <span>{formatCurrency(shipping)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Pajak (11%)</span>
                        <span>{formatCurrency(tax)}</span>
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between font-medium">
                          <span>Total</span>
                          <span>{formatCurrency(total)}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">Metode Pembayaran</h4>
                        <div className="grid gap-2">
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="whatsapp"
                              name="payment"
                              value="whatsapp"
                              checked={paymentMethod === "whatsapp"}
                              onChange={() => setPaymentMethod("whatsapp")}
                              className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                            />
                            <label htmlFor="whatsapp" className="text-sm font-medium">
                              Checkout via WhatsApp
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="manual"
                              name="payment"
                              value="manual"
                              checked={paymentMethod === "manual"}
                              onChange={() => setPaymentMethod("manual")}
                              className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                            />
                            <label htmlFor="manual" className="text-sm font-medium">
                              Pembayaran Manual (Transfer Bank)
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="cod"
                              name="payment"
                              value="cod"
                              checked={paymentMethod === "cod"}
                              onChange={() => setPaymentMethod("cod")}
                              className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                            />
                            <label htmlFor="cod" className="text-sm font-medium">
                              COD (Cash on Delivery)
                            </label>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full" size="lg" onClick={handleCheckout} disabled={loading}>
                        {loading ? (
                          "Memproses..."
                        ) : (
                          <>
                            {paymentMethod === "whatsapp" ? (
                              <>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="mr-2 h-4 w-4"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Checkout via WhatsApp
                              </>
                            ) : paymentMethod === "cod" ? (
                              <>
                                <Package className="mr-2 h-4 w-4" />
                                Checkout dengan COD
                              </>
                            ) : (
                              <>
                                <CreditCard className="mr-2 h-4 w-4" />
                                Checkout dengan Pembayaran Manual
                              </>
                            )}
                          </>
                        )}
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        Dengan melakukan checkout, Anda menyetujui Syarat & Ketentuan kami
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6">
                    <h3 className="text-sm font-semibold mb-2">Kode Promo</h3>
                    <div className="flex gap-2">
                      <Input placeholder="Masukkan kode promo" />
                      <Button variant="outline">Terapkan</Button>
                    </div>
                  </div>
                </div>
              </div>
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
