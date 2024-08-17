import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./GUI/navbarTop";
import SocialIcons from "./GUI/socialIcons";
import Footer from "./GUI/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="bg-gradient-to-r from-gray-800 from-10% via-blue-950 via-30% to-gray-900 to-90% overflow-x-hidden">
        <SocialIcons />
        <Navbar />
        <div className="w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
