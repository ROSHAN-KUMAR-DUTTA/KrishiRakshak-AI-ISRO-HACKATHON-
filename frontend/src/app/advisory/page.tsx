import AdvisoryPage from "@/components/advisory/AdvisoryPage";
import { Suspense } from "react";

export const metadata = {
  title: "Advisory | KrishiRakshak AI",
};


export default async function Home() {
  return (
    <Suspense fallback={<div className="h-125 flex items-center justify-center">Loading Data...</div>}>
      <AdvisoryPage />
    </Suspense>
  );
}
