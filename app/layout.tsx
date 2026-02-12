import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

//Custom fonts
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
 
})

export const metadata: Metadata = {
  title: "Nafshan Portfolio website",
  description: "UI/UX Designer Portflio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
