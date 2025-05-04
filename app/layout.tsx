import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ABSHOP - Toko Gadget Terpercaya",
  description:
    "Jual berbagai macam produk Apple dan brand handphone lainnya. Produk baru dan second berkualitas dengan harga terbaik.",
  keywords: "apple, iphone, macbook, samsung, smartphone, gadget, second, bekas, toko online",
  authors: [{ name: "ABSHOP" }],
  creator: "ABSHOP",
  publisher: "ABSHOP",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://abshop.vercel.app",
    title: "ABSHOP - Toko Gadget Terpercaya",
    description:
      "Jual berbagai macam produk Apple dan brand handphone lainnya. Produk baru dan second berkualitas dengan harga terbaik.",
    siteName: "ABSHOP",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABSHOP - Toko Gadget Terpercaya",
    description:
      "Jual berbagai macam produk Apple dan brand handphone lainnya. Produk baru dan second berkualitas dengan harga terbaik.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
