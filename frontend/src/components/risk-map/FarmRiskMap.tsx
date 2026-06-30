"use client";
import { MapContainer, TileLayer, Polygon, ZoomControl, Marker } from 'react-leaflet';
import L from 'leaflet';
import { Maximize2, Layers } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

const createNumberIcon = (num: number) => {
  return L.divIcon({
    html: `
      <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 26px; height: 26px;">
        <div style="position: absolute; width: 100%; height: 100%; border-radius: 50%; background: white; opacity: 0.4; animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
        <div style="background: white; color: #111827; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 11px; box-shadow: 0 4px 12px rgba(0,0,0,0.25); border: 1px solid #f3f4f6; z-index: 10;">
          ${num}
        </div>
      </div>
    `,
    className: '',
    iconSize: [26, 26],
    iconAnchor: [13, 13]
  });
};

export default function FarmRiskMap() {
  const fields = [
    { id: 1, center: [23.609, 86.103], color: '#ef4444', coords: [[23.615, 86.095], [23.616, 86.110], [23.611, 86.116], [23.605, 86.110], [23.603, 86.098], [23.606, 86.094]] },
    { id: 2, center: [23.600, 86.096], color: '#f97316', coords: [[23.606, 86.094], [23.603, 86.098], [23.595, 86.101], [23.597, 86.091]] },
    { id: 3, center: [23.600, 86.106], color: '#ef4444', coords: [[23.603, 86.098], [23.605, 86.110], [23.598, 86.111], [23.595, 86.101]] },
    { id: 6, center: [23.603, 86.117], color: '#f97316', coords: [[23.611, 86.116], [23.608, 86.123], [23.596, 86.118], [23.598, 86.111], [23.605, 86.110]] },
    { id: 8, center: [23.592, 86.097], color: '#65a30d', coords: [[23.597, 86.091], [23.595, 86.101], [23.587, 86.104], [23.589, 86.093]] },
    { id: 9, center: [23.593, 86.109], color: '#f97316', coords: [[23.595, 86.101], [23.598, 86.111], [23.596, 86.118], [23.589, 86.113], [23.587, 86.104]] }
  ];

  return (
    <div className="relative h-[550px] w-full bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
      
      {/* Controls */}
      <div className="absolute top-4 right-4 z-[400]">
        <button className="bg-white/90 backdrop-blur px-3 py-2 rounded-xl shadow-sm border border-gray-100 text-xs font-bold text-gray-700 flex items-center gap-1.5 hover:bg-white hover:shadow-md active:scale-95 transition-all">
          <Maximize2 size={14} /> Expand
        </button>
      </div>
      <div className="absolute top-[85px] left-[10px] z-[400]">
        <button className="bg-white/90 backdrop-blur p-2 rounded-xl shadow-sm border border-gray-100 text-gray-700 hover:bg-white hover:text-green-600 active:scale-95 transition-all">
          <Layers size={18} />
        </button>
      </div>

      <MapContainer center={[23.602, 86.106]} zoom={15.4} zoomControl={false} className="h-full w-full z-0">
        <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
        <ZoomControl position="topleft" />
        {fields.map((field) => (
          <div key={field.id}>
            <Polygon positions={field.coords as any} pathOptions={{ color: 'white', weight: 1.5, fillColor: field.color, fillOpacity: 0.7 }} />
            <Marker position={field.center as any} icon={createNumberIcon(field.id)} />
          </div>
        ))}
      </MapContainer>

      {/* Overlays */}
      <div className="absolute bottom-4 left-4 z-[400] bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 min-w-[140px]">
        <p className="text-xs font-black mb-3 text-gray-900 tracking-wide uppercase">Risk Level</p>
        <div className="space-y-3 text-xs font-bold text-gray-600">
          <div className="flex items-center gap-2.5"><div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-inner"></div> High Risk</div>
          <div className="flex items-center gap-2.5"><div className="w-3.5 h-3.5 rounded-full bg-orange-500 shadow-inner"></div> Moderate Risk</div>
          <div className="flex items-center gap-2.5"><div className="w-3.5 h-3.5 rounded-full bg-yellow-400 shadow-inner"></div> Low Risk</div>
          <div className="flex items-center gap-2.5"><div className="w-3.5 h-3.5 rounded-full bg-[#65a30d] shadow-inner"></div> Minimal</div>
        </div>
      </div>
    </div>
  );
}