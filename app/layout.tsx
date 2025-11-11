import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Entré — Where Every Ticket Opens an Experience",
  description: "Jual tiket online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
