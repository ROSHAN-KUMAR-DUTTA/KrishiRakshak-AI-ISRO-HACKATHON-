"use client";
import React from 'react';
import { Calendar, MapPin, Download, AlertTriangle, Droplet, HeartPulse, TrendingUp, ChevronRight, ArrowUpRight, ArrowDownRight, FileText } from 'lucide-react';
import AnalyticsStats from './AnalyticsStats';
import TabsFilter from './TabsFilter';
import HealthTrendChart from './HealthTrendChart';
import CategoryCharts from './CategoryCharts';
import TopFieldsTable from './TopFieldsTable';
import WaterUsageChart from './WaterUsageTrend';

export default function AnalyticsPage() {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-[#f8fafc] min-h-screen text-slate-800 font-sans w-full selection:bg-green-100 selection:text-green-900">
      
      {/* Header Section */}
      

      <AnalyticsStats />

      <div className="mt-8 mb-6">
        <TabsFilter />
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* Left Column (Main Charts & Tables) */}
        <div className="xl:col-span-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <HealthTrendChart />
            <CategoryCharts type="health" />
            <WaterUsageChart />
            <CategoryCharts type="crop" />
          </div>
          <TopFieldsTable />
        </div>

        {/* Right Column (Insights & Reports) */}
        <div className="xl:col-span-4 space-y-6">
          
          {/* Key Insights */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-md transition-shadow duration-300 w-full">
            <h3 className="text-[15px] font-bold text-slate-800 mb-5">Key Insights</h3>
            <div className="space-y-5">
              {[
                { icon: HeartPulse, title: "Health Improvement", desc: "2 fields show significant health improvement this week", color: "green" },
                { icon: Droplet, title: "Water Efficiency", desc: "15,420 L water saved through smart irrigation", color: "blue" },
                { icon: AlertTriangle, title: "Risk Alert", desc: "2 fields are in critical condition needs immediate attention", color: "orange" },
                { icon: TrendingUp, title: "Productivity", desc: "Overall productivity increased by 12% this month", color: "purple" }
              ].map((insight, i) => (
                <div key={i} className="flex gap-3.5 group cursor-pointer">
                  <div className={`bg-${insight.color}-50 p-2.5 rounded-xl h-fit group-hover:scale-110 transition-transform`}>
                    <insight.icon className={`w-5 h-5 text-${insight.color}-600 stroke-[2.5]`} />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-slate-800 group-hover:text-green-700 transition-colors">{insight.title}</h4>
                    <p className="text-[12px] text-slate-500 mt-0.5 leading-relaxed font-medium pr-2">{insight.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="text-green-600 text-[13px] font-bold mt-5 flex items-center group w-full py-2 hover:bg-green-50 rounded-lg px-2 -ml-2 transition-colors">
              View Detailed Insights <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Performance vs Last Month */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-md transition-shadow duration-300 w-full">
            <h3 className="text-[15px] font-bold text-slate-800 mb-5">Performance vs Last Month</h3>
            <div className="space-y-4">
              {[
                { icon: HeartPulse, label: "Avg. Field Health", val: "8%", trend: "up", iconColor: "text-green-500" },
                { icon: Droplet, label: "Water Saved", val: "12%", trend: "up", iconColor: "text-blue-500" },
                { icon: TrendingUp, label: "Productivity Index", val: "15%", trend: "up", iconColor: "text-purple-500" },
                { icon: AlertTriangle, label: "At Risk Fields", val: "10%", trend: "down", iconColor: "text-orange-500" },
                { icon: AlertTriangle, label: "Critical Fields", val: "20%", trend: "down", iconColor: "text-red-500", fill: true }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-[13px] group hover:bg-slate-50 p-2 -mx-2 rounded-lg transition-colors cursor-default">
                  <span className="flex items-center gap-2.5 text-slate-600 font-semibold">
                    <item.icon className={`w-4 h-4 ${item.iconColor} ${item.fill ? 'fill-current' : ''}`} /> {item.label}
                  </span>
                  <span className={`font-bold flex items-center gap-1 ${item.trend === 'up' ? 'text-green-600' : 'text-red-500'}`}>
                    {item.trend === 'up' ? <ArrowUpRight className="w-3.5 h-3.5 stroke-3" /> : <ArrowDownRight className="w-3.5 h-3.5 stroke-3" />}
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Reports & Downloads */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-md transition-shadow duration-300 w-full">
            <h3 className="text-[15px] font-bold text-slate-800 mb-5">Reports & Downloads</h3>
            <div className="space-y-4">
              {[
                { title: "Analytics Report", desc: "Comprehensive farm analytics" },
                { title: "Field Health Report", desc: "Detailed field health analysis" },
                { title: "Water Usage Report", desc: "Water consumption analysis" }
              ].map((report, i) => (
                <div key={i} className="flex justify-between items-center group cursor-pointer p-2 -mx-2 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="bg-blue-50 p-2.5 rounded-xl group-hover:scale-105 transition-transform"><FileText className="w-5 h-5 text-blue-600" /></div>
                    <div>
                      <h4 className="text-[13px] font-bold text-slate-800">{report.title}</h4>
                      <p className="text-[11px] font-medium text-slate-500">{report.desc}</p>
                    </div>
                  </div>
                  <div className="p-2 bg-white border border-slate-200 rounded-lg group-hover:border-green-200 group-hover:bg-green-50 transition-colors">
                    <Download className="w-4 h-4 text-slate-400 group-hover:text-green-600 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
            <button className="text-green-600 text-[13px] font-bold mt-5 flex items-center group w-full py-2 hover:bg-green-50 rounded-lg px-2 -ml-2 transition-colors">
              View All Reports <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}