import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./icons.css";
import "react-quill/dist/quill.snow.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export const metadata = {
  alternates: {
    canonical: `https://homebaba.ae/`,
  },
  title: "Off Plan Properties for Sale in UAE",
  description:
    "Find the latest Off Plan Properties for sale in UAE with the UAE's most user-friendly off plan portal. Search new homes to buy from leading estate marketplace in UAE.",
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  category: "real estate",
};

async function getCities() {
  const res = await fetch("https://api.homebaba.ae/api/all-city", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function RootLayout({ children }) {
  let cities = await getCities();
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar cities={cities}></Navbar>
        {children}
        <Footer cities={cities}></Footer>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
