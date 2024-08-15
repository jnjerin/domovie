import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Providers from "./Providers";
import Navbar from "@/Components/Navbar";
import SearchBox from "@/Components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Do Movie",
  description: "Your guide to movie recommendations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
