import FieldsView from "@/components/fields/FieldsView";
import { Suspense } from "react";

export const metadata = {
  title: "Fields | KrishiRakshak AI",
};


export default async function Home() {
  return (
    <Suspense fallback={<div className="h-125 flex items-center justify-center">Loading Data...</div>}>
      <FieldsView />
    </Suspense>
  );
}
