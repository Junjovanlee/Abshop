"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ShoppingCart, Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hubungi Kami</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Kami siap membantu Anda dengan pertanyaan, saran, atau masalah yang Anda miliki
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl mt-12 grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Informasi Kontak</h2>
                  <p className="text-muted-foreground">
                    Jangan ragu untuk menghubungi kami melalui salah satu kontak di bawah ini:
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Alamat</h3>
                      <p className="text-sm text-muted-foreground">
                        Jl. Raya Gadget No. 123, Kota Jakarta Selatan, 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Telepon</h3>
                      <p className="text-sm text-muted-foreground">+62 812-3456-7890</p>
                      <p className="text-sm text-muted-foreground">+62 21-1234-5678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">info@abshop.com</p>
                      <p className="text-sm text-muted-foreground">support@abshop.com</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Jam Operasional</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="font-medium">Senin - Jumat</p>
                      <p className="text-muted-foreground">09:00 - 21:00 WIB</p>
                    </div>
                    <div>
                      <p className="font-medium">Sabtu - Minggu</p>
                      <p className="text-muted-foreground">10:00 - 20:00 WIB</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border overflow-hidden h-64 md:h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.29353357698!2d106.7588023!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1651234567890!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="rounded-lg border p-6">
                <h2 className="text-2xl font-bold mb-4">Kirim Pesan</h2>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center space-y-4 py-12">
                    <div className="rounded-full bg-green-100 p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium">Pesan Terkirim!</h3>
                    <p className="text-center text-muted-foreground">
                      Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>Kirim Pesan Lagi</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nama Lengkap
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Masukkan nama lengkap Anda"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Masukkan email Anda"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subjek
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Masukkan subjek pesan"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Pesan
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Masukkan pesan Anda"
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                    </Button>
                  </form>
                )}
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
