"use client";
import { Brain, Droplet, TrendingUp, ShieldAlert, PiggyBank } from 'lucide-react';

export default function AIInsights() {
  const stats = [
    { icon: Droplet, title: "Water Savings Potential", desc: "With recommended irrigation scheduling", value: "15-20%", color: "text-blue-500", bg: "text-blue-500" },
    { icon: TrendingUp, title: "Yield Improvement", desc: "Expected with following advisories", value: "8-12%", color: "text-green-600", bg: "text-green-500" },
    { icon: ShieldAlert, title: "Risk Reduction", desc: "Reduced crop failure risk", value: "25%", color: "text-green-600", bg: "text-orange-500" },
    { icon: PiggyBank, title: "Cost Optimization", desc: "Potential cost savings", value: "12-18%", color: "text-green-600", bg: "text-purple-500" },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-50">
        <h3 className="text-sm font-bold text-gray-900">AI Insights</h3>
      </div>
      
      <div className="p-4 space-y-4">
        <div className="bg-[#f0fdf4] border border-[#dcfce7] p-3.5 rounded-lg flex gap-3">
          <Brain className="text-green-600 shrink-0 mt-0.5" size={16} />
          <div>
            <h4 className="text-[12px] font-bold text-gray-900">Smart Recommendation</h4>
            <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
              3 fields need immediate attention. Irrigate <span className="font-bold">Field 7</span> and <span className="font-bold">Field 5</span> for better yield.
            </p>
          </div>
        </div>

        <div className="space-y-4 pt-1">
          {stats.map((s, i) => (
            <div key={i} className="flex justify-between items-start">
              <div className="flex gap-3">
                <s.icon size={14} className={`${s.bg} mt-0.5 shrink-0`} strokeWidth={2.5} />
                <div>
                  <p className="font-bold text-[12px] text-gray-900">{s.title}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">{s.desc}</p>
                </div>
              </div>
              <span className={`font-bold text-[12px] ${s.color}`}>{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}