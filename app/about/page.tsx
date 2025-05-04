import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"

export default function AboutPage() {
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
              <Link href="/about" className="text-sm font-medium underline underline-offset-4">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tentang ABSHOP</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Toko gadget terpercaya dengan produk berkualitas dan layanan terbaik
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-8 space-y-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <Image
                    src="/store-image.png"
                    alt="ABSHOP Store"
                    width={500}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="md:w-1/2 space-y-4">
                  <h2 className="text-2xl font-bold">Sejarah Kami</h2>
                  <p className="text-muted-foreground">
                    ABSHOP didirikan pada tahun 2020 dengan visi menjadi toko gadget terpercaya yang menyediakan produk
                    Apple dan berbagai brand handphone lainnya dengan kualitas terbaik dan harga yang kompetitif.
                  </p>
                  <p className="text-muted-foreground">
                    Berawal dari toko kecil di pusat kota, kini ABSHOP telah berkembang menjadi salah satu toko gadget
                    terkemuka dengan ribuan pelanggan setia di seluruh Indonesia.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-center">Visi & Misi</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-lg border p-6">
                    <h3 className="text-xl font-bold mb-2">Visi</h3>
                    <p className="text-muted-foreground">
                      Menjadi toko gadget terpercaya dan terdepan di Indonesia yang menyediakan produk berkualitas
                      dengan layanan terbaik.
                    </p>
                  </div>
                  <div className="rounded-lg border p-6">
                    <h3 className="text-xl font-bold mb-2">Misi</h3>
                    <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                      <li>Menyediakan produk gadget berkualitas dengan harga kompetitif</li>
                      <li>Memberikan layanan pelanggan yang ramah dan profesional</li>
                      <li>Menjaga kepercayaan pelanggan dengan kejujuran dan transparansi</li>
                      <li>Terus berinovasi mengikuti perkembangan teknologi terbaru</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-center">Tim Kami</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Ahmad Rizki",
                      position: "Founder & CEO",
                      image: "/placeholder.svg?key=u3f80",
                    },
                    {
                      name: "Siti Nuraini",
                      position: "Marketing Manager",
                      image: "/placeholder.svg?key=zoprs",
                    },
                    {
                      name: "Budi Santoso",
                      position: "Technical Support",
                      image: "/placeholder.svg?key=jk3cp",
                    },
                    {
                      name: "Dewi Lestari",
                      position: "Customer Service",
                      image: "/placeholder.svg?key=tpx3r",
                    },
                  ].map((member, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="relative w-24 h-24 mb-2 overflow-hidden rounded-full">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-medium">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.position}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-center">Keunggulan Kami</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="rounded-lg border p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">Produk Berkualitas</h3>
                    <p className="text-muted-foreground">
                      Semua produk kami dijamin asli dan berkualitas tinggi dengan garansi resmi.
                    </p>
                  </div>
                  <div className="rounded-lg border p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">Harga Kompetitif</h3>
                    <p className="text-muted-foreground">
                      Kami menawarkan harga yang kompetitif untuk semua produk kami.
                    </p>
                  </div>
                  <div className="rounded-lg border p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">Layanan Terbaik</h3>
                    <p className="text-muted-foreground">
                      Tim kami siap membantu Anda dengan layanan yang ramah dan profesional.
                    </p>
                  </div>
                </div>
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
