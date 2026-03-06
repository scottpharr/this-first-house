import type { Metadata, Viewport } from "next"
import { Archivo } from "next/font/google"
import "./globals.css"

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
})

export const metadata: Metadata = {
  title: "This First House | Home Buying TV Show",
  description:
    "Follow Crystal & Jorge as they navigate the process of buying their first home and learn essential skills for maintaining and improving their property.",
}

export const viewport: Viewport = {
  themeColor: "#11114A",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
