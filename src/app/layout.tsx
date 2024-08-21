// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Academia Plus",
  description: "Academic Management System",
};

const pageTitles: { [key: string]: string } = {
  "/dashboard": "Dashboard",
  "/attendance": "Attendance",
  "/marks": "Marks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "Academia Plus";

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
