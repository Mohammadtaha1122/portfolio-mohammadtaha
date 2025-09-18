import type { Metadata } from "next";
import "../style/globals.css";
import Navbar from "@/components/navbar";
import { ContextProvider } from "@/context/context";
import Footer from "@/components/footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "MohammadTaha | Frontend Developer",
  description: "Hi! I'm MohammadTaha, a young frontend developer passionate about React and building modern web experiences.",
<<<<<<< HEAD
  // keywords: [
  //   "react", "react js", "next", "next js",
  //   "front end", "front end developer",
  //   "mohammadtaha", "mohammadtaha maleki",
  //   "tailwind", "tailwindcss", "typescript",
  //   "portfolio",
  //   "ری اکت", "ری اکت جی اس", "نکست", "نکست جی اس",
  //   "فرانت اند", "فرانت اند دولوپر", "محمدطاها", "محمدطاها ملکی", "پورتفولیو",
  //   "تیلویند", "تیلویند سی اس اس", "تایپ اسکریپت",
  //   "web development", "frontend development", "javascript developer",
  //   "توسعه وب", "برنامه نویس جاوااسکریپت", "توسعه‌دهنده فرانت‌اند"
  // ],
  // authors: [{name:"MohammadTaha"},{name:"محمدطاها"}],
  // robots: "index, follow",
  // viewport: "width=device-width, initial-scale=1.0",
=======
  keywords: [
    "react", "react js", "next", "next js",
    "front end", "front end developer",
    "mohammadtaha", "mohammadtaha maleki",
    "tailwind", "tailwindcss", "typescript",
    "portfolio",
    "ری اکت", "ری اکت جی اس", "نکست", "نکست جی اس",
    "فرانت اند", "فرانت اند دولوپر", "محمدطاها", "محمدطاها ملکی", "پورتفولیو",
    "تیلویند", "تیلویند سی اس اس", "تایپ اسکریپت",
    "web development", "frontend development", "javascript developer",
    "توسعه وب", "برنامه نویس جاوااسکریپت", "توسعه‌دهنده فرانت‌اند"
  ],
  authors: [{name:"MohammadTaha"},{name:"محمدطاها"}],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
>>>>>>> 9a7fc00c464259779a457d32000e9a7a26d61706
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
      </head>

      <body className={`${poppins.variable} font-sans`}>
        <ContextProvider>
          <Navbar />
          <div dir="rtl" className="min-h-screen">{children}</div>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
