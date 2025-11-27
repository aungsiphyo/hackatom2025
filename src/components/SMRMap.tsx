import { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { X, Zap, Activity, Shield, Calendar } from 'lucide-react';

interface SMRCenter {
  id: number;
  name: string;
  location: string;
  coordinates: { lng: number; lat: number };
  capacity: string;
  radiationLevel: string;
  status: string;
  description: string;
  yearEstablished: number;
  safetyInfo: string;
}

interface SMRMapProps {
  centers: SMRCenter[];
}

// Replace with your Mapbox access token
const MAPBOX_TOKEN = 'pk.eyJ1IjoidGh1dGFueWFuIiwiYSI6ImNtaWhsZ24wbjAzbnczZHF0MGJ6czR3bzgifQ.X6djIQA3UHkoDDQ3HGvmUQ';

export function SMRMap({ centers }: SMRMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedCenter, setSelectedCenter] = useState<SMRCenter | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return '#22c55e'; // green-500
      case 'Under Construction':
        return '#eab308'; // yellow-500
      case 'Planned':
        return '#3b82f6'; // blue-500
      default:
        return '#6b7280'; // gray-500
    }
  };

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize map
    mapboxgl.accessToken = MAPBOX_TOKEN;
    
    // Calculate center point from all centers
    const avgLng = centers.reduce((sum, c) => sum + c.coordinates.lng, 0) / centers.length;
    const avgLat = centers.reduce((sum, c) => sum + c.coordinates.lat, 0) / centers.length;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [avgLng, avgLat],
      zoom: 8
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers for each SMR center
    centers.forEach((center) => {
      // Create custom marker element
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.width = '40px';
      el.style.height = '40px';
      el.style.cursor = 'pointer';
      
      // Create pulsing dot
      const pulseOuter = document.createElement('div');
      pulseOuter.style.cssText = `
        width: 40px;
        height: 40px;
        position: absolute;
        background-color: ${getStatusColor(center.status)};
        border-radius: 50%;
        opacity: 0.3;
        animation: pulse 2s infinite;
      `;
      
      const pulseInner = document.createElement('div');
      pulseInner.style.cssText = `
        width: 20px;
        height: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${getStatusColor(center.status)};
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      `;
      
      el.appendChild(pulseOuter);
      el.appendChild(pulseInner);

      // Add click event
      el.addEventListener('click', () => {
        setSelectedCenter(center);
      });

      // Add marker to map
      new mapboxgl.Marker({ element: el })
        .setLngLat([center.coordinates.lng, center.coordinates.lat])
        .addTo(map.current!);
    });

    // Add CSS animation for pulse
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0% {
          transform: scale(0.5);
          opacity: 0.7;
        }
        50% {
          transform: scale(1);
          opacity: 0.3;
        }
        100% {
          transform: scale(0.5);
          opacity: 0.7;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [centers]);

  return (
    <div className="relative">
      {/* Map Container */}
      <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-300">
        <div 
          ref={mapContainer} 
          className="w-full h-[500px] sm:h-[600px]"
        />

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg z-10">
          <p className="text-xs text-slate-600 mb-2">Status:</p>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-xs text-slate-700">Active</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="text-xs text-slate-700">Under Construction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-xs text-slate-700">Planned</span>
            </div>
          </div>
        </div>

        {/* Mapbox Attribution Notice */}
        <div className="absolute bottom-4 right-4 bg-blue-50 border border-blue-200 rounded-lg p-2 text-xs text-blue-800 max-w-xs z-10">
          <strong>Note:</strong> Add your Mapbox token in SMRMap.tsx to display the real map
        </div>
      </div>

      {/* Info Card Popup */}
      {selectedCenter && (
        <div 
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCenter(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6 rounded-t-xl relative">
              <button
                onClick={() => setSelectedCenter(null)}
                className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="pr-8 mb-1">{selectedCenter.name}</h3>
              <p className="text-blue-100 text-sm">{selectedCenter.location}</p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <p className="text-slate-600">{selectedCenter.description}</p>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full">
                <div 
                  className="w-2 h-2 rounded-full" 
                  style={{ backgroundColor: getStatusColor(selectedCenter.status) }}
                />
                <span className="text-sm text-slate-700">{selectedCenter.status}</span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Capacity</p>
                    <p className="text-slate-900">{selectedCenter.capacity}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Activity className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Radiation Level</p>
                    <p className="text-sm text-slate-900">{selectedCenter.radiationLevel}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Calendar className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Established</p>
                    <p className="text-slate-900">{selectedCenter.yearEstablished}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Safety</p>
                    <p className="text-sm text-slate-900">Excellent</p>
                  </div>
                </div>
              </div>

              {/* Safety Info */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-green-900">{selectedCenter.safetyInfo}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
