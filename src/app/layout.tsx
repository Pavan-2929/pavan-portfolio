import type { Metadata } from "next";
import "./global.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Calistoga, Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Pavan Kapadiya | M.Tech CSE @ IIIT Delhi",
  description:
    "Portfolio of Pavan Kapadiya, M.Tech Computer Science student at IIIT Delhi and software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "font-sans antialiased",
          inter.variable,
          calistoga.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          enableSystem
          defaultTheme="system"
          disableTransitionOnChange
        >
          <div className="max-w-3xl mx-auto md:px-8 sm:px-6 px-4">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
