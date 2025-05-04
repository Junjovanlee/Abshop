import Link from "next/link"
import { ShoppingCart } from "lucide-react"

export default function PrivacyPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Kebijakan Privasi</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Terakhir diperbarui: 1 Mei 2024
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl mt-8 space-y-8">
              <div className="prose prose-gray max-w-none dark:prose-invert">
                <p>
                  ABSHOP menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda. Kebijakan
                  Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi
                  Anda ketika Anda menggunakan website kami.
                </p>

                <h2>1. Informasi yang Kami Kumpulkan</h2>
                <p>Kami dapat mengumpulkan informasi berikut dari Anda:</p>
                <ul>
                  <li>
                    <strong>Informasi Pribadi:</strong> Nama, alamat email, nomor telepon, alamat pengiriman, dan
                    informasi pembayaran.
                  </li>
                  <li>
                    <strong>Informasi Transaksi:</strong> Detail tentang produk yang Anda beli dan riwayat transaksi.
                  </li>
                  <li>
                    <strong>Informasi Teknis:</strong> Alamat IP, jenis browser, perangkat yang digunakan, waktu akses,
                    dan halaman yang dikunjungi.
                  </li>
                  <li>
                    <strong>Informasi Penggunaan:</strong> Bagaimana Anda berinteraksi dengan website kami, produk yang
                    dilihat, dan fitur yang digunakan.
                  </li>
                </ul>

                <h2>2. Bagaimana Kami Menggunakan Informasi Anda</h2>
                <p>Kami menggunakan informasi yang kami kumpulkan untuk:</p>
                <ul>
                  <li>Memproses pesanan dan transaksi Anda</li>
                  <li>Mengirimkan produk yang Anda beli</li>
                  <li>Berkomunikasi dengan Anda tentang pesanan dan produk</li>
                  <li>Memberikan dukungan pelanggan</li>
                  <li>Meningkatkan dan mengembangkan website dan layanan kami</li>
                  <li>Mengirimkan informasi pemasaran jika Anda telah menyetujuinya</li>
                  <li>Mencegah penipuan dan aktivitas ilegal lainnya</li>
                </ul>

                <h2>3. Berbagi Informasi Anda</h2>
                <p>Kami dapat membagikan informasi Anda dengan:</p>
                <ul>
                  <li>
                    <strong>Penyedia Layanan:</strong> Perusahaan yang membantu kami dalam operasi bisnis, seperti
                    pemrosesan pembayaran, pengiriman, dan layanan pelanggan.
                  </li>
                  <li>
                    <strong>Mitra Bisnis:</strong> Perusahaan yang bekerja sama dengan kami untuk menawarkan produk atau
                    layanan.
                  </li>
                  <li>
                    <strong>Otoritas Hukum:</strong> Jika diwajibkan oleh hukum atau untuk melindungi hak, properti,
                    atau keselamatan kami atau orang lain.
                  </li>
                </ul>
                <p>
                  Kami tidak akan menjual atau menyewakan informasi pribadi Anda kepada pihak ketiga untuk tujuan
                  pemasaran tanpa persetujuan eksplisit dari Anda.
                </p>

                <h2>4. Keamanan Data</h2>
                <p>
                  Kami mengimplementasikan langkah-langkah keamanan yang sesuai untuk melindungi informasi pribadi Anda
                  dari akses yang tidak sah, penggunaan, atau pengungkapan. Namun, tidak ada metode transmisi melalui
                  internet atau metode penyimpanan elektronik yang 100% aman. Oleh karena itu, kami tidak dapat menjamin
                  keamanan absolut.
                </p>

                <h2>5. Cookie dan Teknologi Pelacakan</h2>
                <p>
                  Kami menggunakan cookie dan teknologi pelacakan serupa untuk meningkatkan pengalaman Anda di website
                  kami. Cookie adalah file kecil yang ditempatkan di perangkat Anda yang memungkinkan kami untuk
                  mengenali browser Anda dan mengingat informasi tertentu.
                </p>
                <p>
                  Anda dapat mengatur browser Anda untuk menolak semua cookie atau untuk menunjukkan kapan cookie
                  dikirim. Namun, jika Anda tidak menerima cookie, Anda mungkin tidak dapat menggunakan beberapa bagian
                  dari website kami.
                </p>

                <h2>6. Hak Privasi Anda</h2>
                <p>Anda memiliki hak untuk:</p>
                <ul>
                  <li>Mengakses informasi pribadi yang kami miliki tentang Anda</li>
                  <li>Meminta koreksi informasi yang tidak akurat</li>
                  <li>Meminta penghapusan informasi Anda (dengan batasan tertentu)</li>
                  <li>Menolak penggunaan informasi Anda untuk pemasaran langsung</li>
                  <li>Menarik persetujuan Anda kapan saja</li>
                </ul>
                <p>
                  Untuk menggunakan hak-hak ini, silakan hubungi kami melalui informasi kontak yang disediakan di bawah.
                </p>

                <h2>7. Perubahan pada Kebijakan Privasi</h2>
                <p>
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberi tahu Anda tentang
                  perubahan apa pun dengan memposting Kebijakan Privasi baru di halaman ini dan, jika perubahan
                  signifikan, kami akan memberi tahu Anda melalui email.
                </p>

                <h2>8. Kontak</h2>
                <p>
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui:
                  <br />
                  Email: privacy@abshop.com
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
