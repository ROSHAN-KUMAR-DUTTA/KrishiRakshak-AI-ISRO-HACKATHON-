import Sidebar from "@/components/layout/Sidebar";
import "./globals.css";
import Header from "@/components/layout/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full ">
      <body className="h-full flex">
        <div className="h-screen sticky top-0">
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col h-screen overflow-y-auto">
          <Header />
          <main className="flex-1 bg-gray-50">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
