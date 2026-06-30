import AnalyticsPage from "@/components/analytics/AnalyticsPage";
import { Suspense } from "react";

export const metadata = {
  title: "Analytics | KrishiRakshak AI",
};


export default async function Home() {
  return (
    <Suspense fallback={<div className="h-125 flex items-center justify-center">Loading Data...</div>}>
      <AnalyticsPage />
    </Suspense>
  );
}
