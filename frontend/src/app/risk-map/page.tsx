import RiskMapPage from "@/components/risk-map/RiskMapPage";
import { Suspense } from "react";

export const metadata = {
  title: "Risk Map | KrishiRakshak AI",
};


export default async function Home() {
  return (
    <Suspense fallback={<div className="h-125 flex items-center justify-center">Loading Data...</div>}>
      <RiskMapPage />
    </Suspense>
  );
}
