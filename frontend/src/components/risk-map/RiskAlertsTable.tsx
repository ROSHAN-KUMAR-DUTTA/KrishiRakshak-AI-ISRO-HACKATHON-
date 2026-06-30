"use client";

export default function RiskAlertsTable() {
  const alerts = [
    { id: 1, name: "Field 1 - North Plot", type: "Pest (Fall Armyworm)", severity: "High", date: "22 Jun 2026, 08:30 AM" },
    { id: 3, name: "Field 3 - Central East", type: "Disease (BLB)", severity: "High", date: "22 Jun 2026, 07:15 AM" },
    { id: 2, name: "Field 2 - West Plot", type: "Drought Stress", severity: "Moderate", date: "21 Jun 2026, 06:40 PM" },
    { id: 6, name: "Field 6 - East Plot", type: "Drought Stress", severity: "Moderate", date: "21 Jun 2026, 05:20 PM" },
    { id: 9, name: "Field 9 - South Plot", type: "Disease (BLB)", severity: "Moderate", date: "20 Jun 2026, 11:10 AM" },
    { id: 8, name: "Field 8 - South West", type: "Weather (High Wind)", severity: "Low", date: "20 Jun 2026, 09:00 AM" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] overflow-hidden">
      <div className="p-6 border-b border-gray-50 flex justify-between items-center">
        <h3 className="font-bold text-gray-900">Risk Alerts</h3>
        <button className="text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors">Filter ≡</button>
      </div>
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50/50 text-gray-500 font-bold text-xs uppercase tracking-wider">
          <tr>
            <th className="p-4 pl-6">Field</th>
            <th className="p-4">Risk Type</th>
            <th className="p-4">Severity</th>
            <th className="p-4">Detected On</th>
            <th className="p-4 pr-6 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50/80">
          {alerts.map((a) => (
            <tr key={a.id} className="group hover:bg-gray-50/80 hover:shadow-sm transition-all cursor-pointer">
              <td className="p-4 pl-6 flex items-center gap-3">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white shadow-inner group-hover:scale-110 transition-transform ${a.severity === 'High' ? 'bg-red-500' : a.severity === 'Moderate' ? 'bg-orange-500' : 'bg-[#65a30d]'}`}>{a.id}</div>
                <span className="font-bold text-gray-900 group-hover:text-green-700 transition-colors">{a.name}</span>
              </td>
              <td className="p-4 text-gray-600 font-medium">{a.type}</td>
              <td className="p-4">
                <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${a.severity === 'High' ? 'text-red-600 bg-red-50' : a.severity === 'Moderate' ? 'text-orange-600 bg-orange-50' : 'text-[#65a30d] bg-green-50'}`}>{a.severity}</span>
              </td>
              <td className="p-4 text-gray-400 font-medium text-xs">{a.date}</td>
              <td className="p-4 pr-6 text-right">
                <button className="border border-gray-200 text-gray-600 px-4 py-1.5 rounded-lg font-bold text-xs group-hover:border-green-300 group-hover:text-green-700 group-hover:bg-green-50 active:scale-95 transition-all">
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}