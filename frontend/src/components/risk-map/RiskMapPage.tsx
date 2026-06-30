"use client";
import dynamic from 'next/dynamic';
import RiskInsights from './RiskInsights';
import RiskCategoryChart from './RiskCategoryChart';
import RiskAlertsTable from './RiskAlertsTable';
import RecommendedActions from './RecommendedActions';
import StatsHeader from './StatsHeader';

// Disables SSR for Leaflet map to prevent window errors
const FarmRiskMap = dynamic(() => import('./FarmRiskMap'), { ssr: false });

export default function RiskMapPage() {
  return (
    <div className="p-8 bg-[#F9FAFB] min-h-screen">
      <div className="space-y-6">
        <StatsHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Map & Table (66% width) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* CRITICAL FIX: Map Section with its own external header */}
            <div>
              <div className="flex justify-between items-center mb-4 px-1">
                <h2 className="font-bold text-gray-900">Farm Risk Map</h2>
                <button className="text-gray-400 text-xs hover:text-gray-600 transition-colors">
                  ▼
                </button>
              </div>
              <FarmRiskMap />
            </div>

            <RiskAlertsTable />
          </div>

          {/* Right Column: Insights, Chart & Actions (33% width) */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <RiskInsights />
            <RiskCategoryChart />
            <RecommendedActions />
          </div>
        </div>
      </div>
    </div>
  );
}