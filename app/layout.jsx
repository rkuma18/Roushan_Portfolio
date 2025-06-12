import { Inter, Bebas_Neue } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";


const inter = Inter({
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata = {
  title: "Roushan Kumar",
  description: "You are exploring Roushan's world of insights, travel, and tech.",
  icons: {
    icon: 'favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.variable} ${bebasNeue.variable}`}
        suppressHydrationWarning={true}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}