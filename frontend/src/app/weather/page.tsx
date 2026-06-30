import WeatherPage from "@/components/weather/WeatherPage";
import { Suspense } from "react";

export const metadata = {
  title: "Weather | KrishiRakshak AI",
};


export default async function Home() {
  return (
    <Suspense fallback={<div className="h-125 flex items-center justify-center">Loading Data...</div>}>
      <WeatherPage />
    </Suspense>
  );
}
