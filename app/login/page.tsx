"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShoppingCart, Eye, EyeOff } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      // In a real app, this would redirect to dashboard or home page after successful login
      window.location.href = "/"
    }, 1500)
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false)
      // In a real app, this would redirect to verification page or login
      window.location.href = "/"
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <ShoppingCart className="h-5 w-5" />
            <span>ABSHOP</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="mx-auto w-full max-w-md">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Daftar</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Login ke Akun Anda</CardTitle>
                  <CardDescription>Masukkan email dan password untuk mengakses akun Anda</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="nama@example.com" required />
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password">Password</Label>
                          <Link
                            href="/forgot-password"
                            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                          >
                            Lupa password?
                          </Link>
                        </div>
                        <div className="relative">
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full px-3 py-2"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                          </Button>
                        </div>
                      </div>
                      <Button type="submit" disabled={isLoading}>
                        {isLoading ? "Memproses..." : "Login"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <div className="relative my-4 w-full">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Atau lanjutkan dengan</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline">Google</Button>
                    <Button variant="outline">Facebook</Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="register">
              <Card>
                <CardHeader>
                  <CardTitle>Buat Akun Baru</CardTitle>
                  <CardDescription>Daftar untuk mendapatkan akses ke semua fitur ABSHOP</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegister}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Nama Lengkap</Label>
                        <Input id="name" type="text" placeholder="Nama Lengkap" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="nama@example.com" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full px-3 py-2"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                          </Button>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="confirm-password">Konfirmasi Password</Label>
                        <Input
                          id="confirm-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          required
                        />
                      </div>
                      <Button type="submit" disabled={isLoading}>
                        {isLoading ? "Memproses..." : "Daftar"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <p className="mt-2 text-xs text-center text-muted-foreground">
                    Dengan mendaftar, Anda menyetujui{" "}
                    <Link href="/terms" className="underline underline-offset-4">
                      Syarat & Ketentuan
                    </Link>{" "}
                    dan{" "}
                    <Link href="/privacy" className="underline underline-offset-4">
                      Kebijakan Privasi
                    </Link>{" "}
                    kami.
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
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
