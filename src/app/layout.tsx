import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Academia Plus",
  description: "Academic Management System",
};

interface RootLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function RootLayout({ children, title = "Academia Plus" }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`flex h-screen bg-gray-100 ${inter.className}`}>
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header title={title} />
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
