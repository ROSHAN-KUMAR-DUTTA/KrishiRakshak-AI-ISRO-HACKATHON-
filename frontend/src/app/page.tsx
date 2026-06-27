import DashboardView from "@/components/dashboard/DashboardView";
import { Suspense } from "react";

export const metadata = {
  title: "Dashboard | KrishiRakshak AI",
};
async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds delay
  return { success: true };
}

export default async function Home() {
  await getData();
  return (
    <Suspense fallback={<div className="h-[500px] flex items-center justify-center">Loading Data...</div>}>
      <DashboardView />
    </Suspense>
  );
}
