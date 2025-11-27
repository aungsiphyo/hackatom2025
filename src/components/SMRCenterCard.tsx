import { MapPin, Zap, Activity, Calendar } from 'lucide-react';

interface SMRCenter {
  id: number;
  name: string;
  location: string;
  capacity: string;
  radiationLevel: string;
  status: string;
  description: string;
  yearEstablished: number;
}

interface SMRCenterCardProps {
  center: SMRCenter;
}

export function SMRCenterCard({ center }: SMRCenterCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Under Construction':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Planned':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-200 overflow-hidden">
      {/* Status Badge */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-6 py-3 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <h4 className="text-slate-900">{center.name}</h4>
          <span className={`px-3 py-1 rounded-full text-xs border ${getStatusColor(center.status)}`}>
            {center.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Location */}
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-slate-500">Location</p>
            <p className="text-slate-900">{center.location}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600">{center.description}</p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="flex items-start gap-2">
            <Zap className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-xs text-slate-500">Capacity</p>
              <p className="text-slate-900">{center.capacity}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 text-purple-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-xs text-slate-500">Est.</p>
              <p className="text-slate-900">{center.yearEstablished}</p>
            </div>
          </div>
        </div>

        {/* Radiation Level */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="flex items-start gap-2">
            <Activity className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-green-700">Radiation Level</p>
              <p className="text-sm text-green-900">{center.radiationLevel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
