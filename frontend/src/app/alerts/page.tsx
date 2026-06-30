import AlertsPage from "@/components/alerts/AlertsPage";
import { Suspense } from "react";

export const metadata = {
  title: "Calculator | KrishiRakshak AI",
};


export default async function Home() {
  return (
    <Suspense fallback={<div className="h-125 flex items-center justify-center">Loading Data...</div>}>
      <AlertsPage />
    </Suspense>
  );
}
