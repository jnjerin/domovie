import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Do Movie",
  description: "Your guide to movie recommendations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
