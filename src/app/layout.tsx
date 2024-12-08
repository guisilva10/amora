import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Amora",
  description: "Crie seu currículo em minutos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased dark`}>{children}</body>
    </html>
  );
}
