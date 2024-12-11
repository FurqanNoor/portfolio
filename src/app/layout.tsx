import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-stone-950 container max-w-2xl mx-auto min-h-screen flex flex-col px-4 py-5"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
