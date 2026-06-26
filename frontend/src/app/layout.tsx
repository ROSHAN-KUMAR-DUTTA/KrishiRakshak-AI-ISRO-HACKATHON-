import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

export const metadata = {
  title: "404 Page Not Found || KrishiRakshak AI", // Ye default rahega
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full ">
      <body className="h-full flex">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
