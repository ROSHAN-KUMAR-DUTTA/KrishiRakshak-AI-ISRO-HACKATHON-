"use client";
import CalculatorTabs from './CalculatorTabs';
import CalculatorForm from './CalculatorForm';
import CalculationResults from './CalculationResults';
import CalculatorGuideTable from './CalculatorGuideTable';
import CalculatorSidebar from './CalculatorSidebar';
import { Calculator } from 'lucide-react';

export default function CalculatorPage() {
  return (
    <div className="p-8 bg-[#F8FAFC] min-h-screen space-y-6 text-slate-900 antialiased">
      

      <CalculatorTabs />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CalculatorForm />
            <CalculationResults />
          </div>
          <CalculatorGuideTable />
        </div>
        <div className="xl:col-span-1">
          <CalculatorSidebar />
        </div>
      </div>
    </div>
  );
}