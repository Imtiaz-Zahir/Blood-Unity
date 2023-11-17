import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { cookies } from "next/headers";
import verifyCookie from "@/customFunctions/verifyCookie";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  return (
    <html lang="en">
      <body className={rajdhani.className}>
        <Nav isLogin={verifyCookie(token) as boolean} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
