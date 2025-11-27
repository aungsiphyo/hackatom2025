import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X } from 'lucide-react';

const components = [
  {
    id: 1,
    name: 'Reactor Core',
    description: 'The heart of the SMR where nuclear fission occurs in a controlled manner.',
    details: 'The reactor core contains fuel assemblies with enriched uranium. Nuclear reactions generate heat through fission, which is carefully controlled by control rods. The compact design of SMR cores allows for factory fabrication and enhanced safety features.',
    importance: 'Critical for generating the thermal energy needed to produce electricity. Advanced designs ensure passive safety systems activate automatically in emergencies.',
    imageUrl: 'https://images.unsplash.com/photo-1742868305923-b7b103e70b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudWNsZWFyJTIwcmVhY3RvciUyMGNvcmV8ZW58MXx8fHwxNzY0MTk4NTYzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    name: 'Cooling System',
    description: 'Advanced cooling towers and systems that safely dissipate excess heat.',
    details: 'The cooling system uses water or gas to transfer heat from the reactor core to the steam generators. SMRs often incorporate passive cooling systems that work without electricity, using natural circulation and gravity.',
    importance: 'Essential for maintaining safe operating temperatures and preventing overheating. Multiple redundant cooling systems ensure safety even during power outages.',
    imageUrl: 'https://images.unsplash.com/photo-1759109391527-11b6adf2cc5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29saW5nJTIwdG93ZXJzJTIwZW5lcmd5fGVufDF8fHx8MTc2NDI1NzAwN3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    name: 'Control Room',
    description: 'State-of-the-art monitoring and control center with 24/7 operation.',
    details: 'The control room features advanced digital systems that monitor all reactor parameters in real-time. Operators use sophisticated displays and controls to manage reactor operations, and automated systems can respond instantly to any anomalies.',
    importance: 'Provides continuous oversight and control of all reactor systems. Highly trained operators work in shifts to ensure safe, efficient operation at all times.',
    imageUrl: 'https://images.unsplash.com/photo-1664726273592-507d64bbc7e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250cm9sJTIwcm9vbSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0MjU3MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    name: 'Safety Systems',
    description: 'Multiple layers of safety equipment and containment structures.',
    details: 'SMRs feature multiple redundant safety systems including emergency core cooling, containment buildings, and passive safety mechanisms. These systems are designed to prevent and mitigate accidents without human intervention or external power.',
    importance: 'The foundation of nuclear safety. Multiple barriers prevent radioactive materials from escaping, and passive systems provide cooling even in worst-case scenarios.',
    imageUrl: 'https://images.unsplash.com/photo-1760228793179-aeb9b305861f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjBlcXVpcG1lbnQlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2NDIzMDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function ComponentGallery() {
  const [selectedComponent, setSelectedComponent] = useState<typeof components[0] | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {components.map((component) => (
          <button
            key={component.id}
            onClick={() => setSelectedComponent(component)}
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-slate-200 overflow-hidden text-left"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <ImageWithFallback
                src={component.imageUrl}
                alt={component.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-white">{component.name}</h4>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <p className="text-sm text-slate-600 line-clamp-2">{component.description}</p>
              <p className="text-sm text-blue-600 mt-2 group-hover:text-blue-700">Learn more →</p>
            </div>
          </button>
        ))}
      </div>

      {/* Component Detail Modal */}
      {selectedComponent && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedComponent(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Header */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <ImageWithFallback
                src={selectedComponent.imageUrl}
                alt={selectedComponent.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <button
                onClick={() => setSelectedComponent(null)}
                className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-slate-700" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="text-white mb-2">{selectedComponent.name}</h3>
                <p className="text-white/90">{selectedComponent.description}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-slate-900 mb-2">How It Works</h4>
                <p className="text-slate-600">{selectedComponent.details}</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="text-blue-900 mb-2">Why It's Important</h4>
                <p className="text-blue-800">{selectedComponent.importance}</p>
              </div>

              <button
                onClick={() => setSelectedComponent(null)}
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
