import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
});

export const metadata = {
  title: "lnkfr",
  description: "Share your works",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>{children}</body>
    </html>
  );
}
