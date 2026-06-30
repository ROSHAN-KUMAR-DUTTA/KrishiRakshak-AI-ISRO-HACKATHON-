"use client";
import AlertStats from './AlertStats';
import AlertList from './AlertList';
import AlertSidebar from './AlertSidebar';
import { Bell } from 'lucide-react';

export default function AlertsPage() {
  return (
    <div className="p-8 bg-[#F8FAFC] min-h-screen space-y-6 text-slate-900 antialiased font-sans">
      

      <AlertStats />

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-3 h-full">
          <AlertList />
        </div>
        <div className="xl:col-span-1 h-full">
          <AlertSidebar />
        </div>
      </div>
    </div>
  );
}