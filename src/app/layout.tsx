import "./globals.css";
import type { Metadata } from "next";
import Footer from "./(components)/Footer";
import { DM_Sans } from "next/font/google";
import { UserProvider } from "./(userContext)/user";

const dmSans = DM_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-dmsans",
});

export const metadata: Metadata = {
  title: "Photo Plus",
  description: "Discover new photos, and upload your photos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${dmSans.className}`}>
        <UserProvider>
          {children}
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
