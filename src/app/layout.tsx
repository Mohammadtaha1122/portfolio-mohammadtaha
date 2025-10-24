import type { Metadata } from "next";
import "../style/globals.css";
import Navbar from "@/components/navbar";
import { ContextProvider } from "@/context/context";
import Footer from "@/components/footer";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "محمدطاها | Mohammad Taha | Frontend Developer",
  description: `Hi! I'm MohammadTaha, a young frontend developer passionate about React and building modern web experiences.
  سلام! من محمدطاها هستم، یک توسعه‌دهنده جوان فرانت‌اند که به ری اکت و ساخت تجربیات وب مدرن علاقه دارم.`,
  keywords: [
    "react", "react js", "next", "next js",
    "front end", "front end developer",
    "mohammadtaha","mohammadtaha portfolio" , "mohammadtaha maleki",
    "mohammadtaha maleki portfolio",
    "tailwind", "tailwindcss", "typescript",
    "portfolio",
    "ری اکت", "ری اکت جی اس", "نکست", "نکست جی اس",
    "فرانت اند", "فرانت اند دولوپر", "محمدطاها", "محمدطاها ملکی", "محمدطاها پورتفولیو", "محمدطاها ملکی پورتفولیو", "پورتفولیو",
    "تیلویند", "تیلویند سی اس اس", "تایپ اسکریپت", "محمدطاها نمونه کار ها", "محمدطاها ملکی نمونه کار ها",
    "web development", "frontend development", "javascript developer",
    "توسعه وب", "برنامه نویس جاوااسکریپت", "توسعه‌دهنده فرانت‌اند"
  ],
  authors: [{ name: "MohammadTaha" }, { name: "محمدطاها" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "محمدطاها | Mohammad Taha | Frontend Developer",
    description: `Hi! I'm MohammadTaha, a young frontend developer passionate about React and building modern web experiences.
  سلام! من محمدطاها هستم، یک توسعه‌دهنده جوان فرانت‌اند که به ری اکت و ساخت تجربیات وب مدرن علاقه دارم.`,
    url: "https://www.mohammadtaha-portfolio.ir",
    siteName: "MohammadTaha Portfolio",
    images: [
      {
        url: "/grathImg.jpg",
        width: 1200,
        height: 630,
        alt: "MohammadTaha Portfolio Preview",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.mohammadtaha-portfolio.ir",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "محمدطاها ملکی MohammadTaha Maleki",
              "url": "https://www.mohammadtaha-portfolio.ir",
              "image": "https://www.mohammadtaha-portfolio.ir/assets/images/profilLogo.png",
              "logo": "https://mohammadtaha-portfolio.ir/grathImg.jpg",
              "sameAs": [
                "https://github.com/Mohammadtaha1122",
                "https://www.linkedin.com/in/mohammadtaha-maleki-885170384/",
                "https://www.karlancer.com/profile/825958"
              ],
              "jobTitle": "Frontend Developer",
              "knowsAbout": [
                "Frontend Development",
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "Responsive Design",
                "Web Performance Optimization"
              ]
            }),
          }}
        />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <meta name="google-site-verification" content="oY8CW8rm_ddjWCSbsRCAecg3EKE33lYDJrEIlwuAHP0" />
        <meta property="og:image" content="/grathImg.jpg" />
      </head>

      <body className={`${poppins.variable} font-sans`}>
        <ContextProvider>
          <Navbar />
          <div dir="rtl" className="min-h-screen">{children}</div>
          <SpeedInsights />
          <Analytics />
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
