"use client"
import { Footer } from  "@/components/Footer";
import { Header } from  "@/components/Header";
import { ScrollToTop } from "./ScrollToTop";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
