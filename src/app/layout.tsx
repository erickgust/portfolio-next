import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const font = localFont({
  src: './fonts/FKTGnarly_Wght-VF.ttf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Erick Gustavo - Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased font-normal`}
      >
        {children}
      </body>
    </html>
  );
}
