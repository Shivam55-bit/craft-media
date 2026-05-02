import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { ThemeProvider } from "@/src/context/theme-provider";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const headingFont = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Best Web Designing Services in Delhi | Craft Media Hub",
  description:
    "Craft Media Hub is a leading Website designing company in Delhi. We provide web designing services, web development services and SEO Services in all over India.",
  keywords: [
    "Web Designing services in Delhi",
    "Website Development",
    "Best Web Designing",
    "Web Development In Delhi",
    "SEO Services",
    "Digital Marketing",
    "E-Commerce Web Designing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
