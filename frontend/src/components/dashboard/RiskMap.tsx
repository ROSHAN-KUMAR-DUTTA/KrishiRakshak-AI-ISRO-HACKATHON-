"use client";
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet';
import { Layers } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Mock field data positioned closely together to mimic the reference image
const fieldData = [
  { id: 1, risk: "Low", color: "#22c55e", coords: [[23.840, 86.450], [23.842, 86.450], [23.842, 86.453], [23.840, 86.453]] },
  { id: 2, risk: "Low", color: "#22c55e", coords: [[23.840, 86.454], [23.842, 86.454], [23.842, 86.457], [23.840, 86.457]] },
  { id: 3, risk: "Moderate", color: "#f59e0b", coords: [[23.837, 86.450], [23.839, 86.450], [23.839, 86.453], [23.837, 86.453]] },
  { id: 4, risk: "High", color: "#ea580c", coords: [[23.837, 86.454], [23.839, 86.454], [23.839, 86.457], [23.837, 86.457]] },
  { id: 5, risk: "Critical", color: "#ef4444", coords: [[23.834, 86.450], [23.836, 86.450], [23.836, 86.453], [23.834, 86.453]] },
];

const RiskMap = () => {
  useEffect(() => {
    import('leaflet').then((L) => {
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: '/marker-icon-2x.png',
        iconUrl: '/marker-icon.png',
        shadowUrl: '/marker-shadow.png',
      });
    });
  }, []);

  const centerPosition: [number, number] = [23.838, 86.453];

  return (
    <div className="h-full w-full relative group">
      {/* Map Container */}
      <MapContainer 
        center={centerPosition} 
        zoom={15} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%', zIndex: 0 }}
      >
        {/* Esri World Imagery (Satellite) */}
        <TileLayer
          attribution='&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        
        {fieldData.map((field) => (
          <Polygon 
            key={field.id} 
            positions={field.coords as [number, number][]} 
            pathOptions={{ color: 'white', weight: 1, fillColor: field.color, fillOpacity: 0.7 }}
          >
            <Popup className="text-sm">
              <strong>Risk Level: {field.risk}</strong>
            </Popup>
          </Polygon>
        ))}
      </MapContainer>

      {/* Layers Button Overlay (Top Right) */}
      <button className="absolute top-4 right-4 z-[400] bg-white px-3 py-1.5 rounded shadow-md flex items-center gap-2 text-sm font-bold text-gray-700">
        <Layers size={16} />
        Layers
      </button>

      {/* Legend Overlay (Bottom Right) */}
      <div className="absolute bottom-4 right-4 z-[400] bg-white p-3 rounded shadow-md w-32">
        <h4 className="text-xs font-bold text-gray-800 mb-2">Risk Level</h4>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 text-xs text-gray-600"><span className="w-3 h-3 rounded-full bg-[#22c55e]"></span> Low</div>
          <div className="flex items-center gap-2 text-xs text-gray-600"><span className="w-3 h-3 rounded-full bg-[#f59e0b]"></span> Moderate</div>
          <div className="flex items-center gap-2 text-xs text-gray-600"><span className="w-3 h-3 rounded-full bg-[#ea580c]"></span> High</div>
          <div className="flex items-center gap-2 text-xs text-gray-600"><span className="w-3 h-3 rounded-full bg-[#ef4444]"></span> Critical</div>
        </div>
      </div>
    </div>
  );
};

export default RiskMap;