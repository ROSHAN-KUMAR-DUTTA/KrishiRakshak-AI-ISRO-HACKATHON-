import DashboardView from "@/components/dashboard/DashboardView";
import { Suspense } from "react";

export const metadata = {
  title: "Dashboard | KrishiRakshak AI",
};


export default async function Home() {
  return (
    <Suspense fallback={<div className="h-125 flex items-center justify-center">Loading Data...</div>}>
      <DashboardView />
    </Suspense>
  );
}
