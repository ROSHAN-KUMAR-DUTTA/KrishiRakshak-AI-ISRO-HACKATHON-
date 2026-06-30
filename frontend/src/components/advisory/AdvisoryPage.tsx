"use client";
import AdvisoryStats from './AdvisoryStats';
import AdvisoryList from './AdvisoryList';
import AIInsights from './AIInsights';
import AdvisoryChart from './AdvisoryChart';
import QuickActions from './QuickActions';
import { Leaf } from 'lucide-react';

export default function AdvisoryPage() {
  return (
    <div className="p-8 bg-[#F9FAFB] min-h-screen">
      

      <div className="space-y-6">
        <AdvisoryStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <AdvisoryList />
            
            {/* General Farm Advisory Banner */}
            <div className="bg-white p-5 rounded-2xl border border-green-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] flex items-center justify-between group hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-50 text-green-600 rounded-xl group-hover:scale-110 transition-transform">
                  <Leaf size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">General Farm Advisory</h4>
                  <p className="text-sm text-gray-500">Current weather conditions are favorable for crop growth. Maintain regular field monitoring.</p>
                </div>
              </div>
              <button className="text-sm font-bold text-green-700 flex items-center gap-2 border border-green-200 px-4 py-2 rounded-lg hover:bg-green-50 active:scale-95 transition-all">
                View Detailed Report →
              </button>
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-6">
            <AIInsights />
            <AdvisoryChart />
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
}