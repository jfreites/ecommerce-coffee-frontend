import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import NextTopLoader from 'nextjs-toploader';
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Coffee",
  description: "Welcome to my ecommerce coffee store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${urbanist.className} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD, 0 0 5px #2299DD"
          />
          <Navbar />
            {children}
            <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
