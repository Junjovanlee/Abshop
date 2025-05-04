import Link from "next/link"
import { ShoppingCart } from "lucide-react"

export default function TermsPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Syarat & Ketentuan</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Terakhir diperbarui: 1 Mei 2024
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl mt-8 space-y-8">
              <div className="prose prose-gray max-w-none dark:prose-invert">
                <p>
                  Selamat datang di ABSHOP. Syarat dan ketentuan berikut menjelaskan peraturan dan ketentuan penggunaan
                  website ABSHOP.
                </p>

                <h2>1. Pendahuluan</h2>
                <p>
                  Dengan mengakses website ini, Anda menyetujui untuk terikat oleh syarat dan ketentuan penggunaan
                  website ini. Jika Anda tidak menyetujui salah satu dari syarat dan ketentuan ini, Anda tidak
                  diperkenankan untuk menggunakan atau mengakses website ini.
                </p>

                <h2>2. Definisi</h2>
                <ul>
                  <li>
                    <strong>"ABSHOP"</strong> mengacu pada website ini, yang merupakan platform e-commerce yang menjual
                    produk Apple dan brand handphone lainnya.
                  </li>
                  <li>
                    <strong>"Pengguna"</strong> mengacu pada individu yang mengakses atau menggunakan layanan ABSHOP.
                  </li>
                  <li>
                    <strong>"Layanan"</strong> mengacu pada semua fitur, fungsi, dan layanan yang disediakan oleh
                    ABSHOP.
                  </li>
                </ul>

                <h2>3. Akun Pengguna</h2>
                <p>
                  Untuk menggunakan beberapa fitur website ini, Anda mungkin perlu membuat akun. Anda bertanggung jawab
                  untuk menjaga kerahasiaan akun dan password Anda dan untuk membatasi akses ke komputer Anda. Anda
                  setuju untuk menerima tanggung jawab atas semua aktivitas yang terjadi di bawah akun atau password
                  Anda.
                </p>

                <h2>4. Pembelian dan Pembayaran</h2>
                <p>
                  Ketika Anda melakukan pembelian melalui ABSHOP, Anda menyetujui untuk memberikan informasi pembelian
                  dan akun yang akurat, lengkap, dan terkini. Semua harga yang ditampilkan adalah dalam Rupiah Indonesia
                  (IDR) dan sudah termasuk pajak yang berlaku.
                </p>
                <p>
                  ABSHOP menawarkan beberapa metode pembayaran, termasuk pembayaran melalui WhatsApp, pembayaran manual
                  (transfer bank), dan COD (Cash on Delivery). Dengan memilih salah satu metode pembayaran, Anda
                  menyetujui syarat dan ketentuan yang berlaku untuk metode tersebut.
                </p>

                <h2>5. Pengiriman dan Pengembalian</h2>
                <p>
                  ABSHOP akan berusaha untuk mengirimkan produk sesuai dengan estimasi waktu pengiriman yang diberikan.
                  Namun, waktu pengiriman dapat bervariasi tergantung pada lokasi dan ketersediaan produk.
                </p>
                <p>
                  Pengembalian produk dapat dilakukan dalam waktu 7 hari setelah penerimaan jika produk dalam kondisi as
                  dilakukan dalam waktu 7 hari setelah penerimaan jika produk dalam kondisi asli, belum digunakan, dan
                  dalam kemasan asli. Biaya pengiriman untuk pengembalian ditanggung oleh pembeli kecuali jika produk
                  cacat atau salah kirim.
                </p>

                <h2>6. Garansi Produk</h2>
                <p>
                  Semua produk baru yang dijual di ABSHOP dilengkapi dengan garansi resmi sesuai dengan kebijakan
                  produsen. Produk second memiliki garansi toko selama 3 bulan. Untuk mengklaim garansi, pelanggan harus
                  menunjukkan bukti pembelian dan kartu garansi yang diberikan.
                </p>

                <h2>7. Hak Kekayaan Intelektual</h2>
                <p>
                  Semua konten yang tersedia di website ABSHOP, termasuk tetapi tidak terbatas pada teks, grafik, logo,
                  ikon tombol, gambar, klip audio, unduhan digital, dan kompilasi data, adalah milik ABSHOP atau
                  penyedia kontennya dan dilindungi oleh hukum hak cipta internasional.
                </p>

                <h2>8. Batasan Tanggung Jawab</h2>
                <p>
                  ABSHOP tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, khusus, atau
                  konsekuensial yang timbul dari penggunaan atau ketidakmampuan untuk menggunakan layanan kami.
                </p>

                <h2>9. Perubahan Syarat dan Ketentuan</h2>
                <p>
                  ABSHOP berhak untuk mengubah syarat dan ketentuan ini kapan saja. Perubahan akan efektif segera
                  setelah diposting di website. Penggunaan berkelanjutan dari website setelah perubahan tersebut
                  merupakan persetujuan Anda terhadap syarat dan ketentuan yang diubah.
                </p>

                <h2>10. Hukum yang Berlaku</h2>
                <p>
                  Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia, dan Anda
                  tunduk pada yurisdiksi non-eksklusif pengadilan di Indonesia.
                </p>

                <h2>11. Kontak</h2>
                <p>
                  Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami melalui:
                  <br />
                  Email: legal@abshop.com
                  <br />
                  Telepon: +62 21-1234-5678
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
