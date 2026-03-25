import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ParallaxBackground } from "@/components/ParallaxBackground"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "The Satvabhala Foundation",
  description: "Non-Profit Organization for BPD Awareness",
  icons: {
    icon: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${plusJakartaSans.variable} font-sans antialiased relative`}>
        <ParallaxBackground />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
