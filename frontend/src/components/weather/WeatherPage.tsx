"use client";
import WeatherTopBar from './WeatherTopBar';
import WeatherMainContent from './WeatherMainContent';
import WeatherSidebar from './WeatherSidebar';
import { MapPin, Bell } from 'lucide-react';

export default function WeatherPage() {
  return (
    <div className="p-8 bg-[#F9FAFB] min-h-screen space-y-6 text-gray-900">
      
      {/* Header */}
      
      <WeatherTopBar />

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <WeatherMainContent />
        </div>
        <div className="lg:col-span-1 space-y-6">
          <WeatherSidebar />
        </div>
      </div>
      
    </div>
  );
}