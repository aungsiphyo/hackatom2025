import { useState } from 'react';
import { MapPin, Zap, Activity, Calendar, ArrowRight, Shield, Factory } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SMRMap } from './SMRMap';
import { SMRCenterCard } from './SMRCenterCard';
import { NewsCard } from './NewsCard';

const smrCenters = [
  {
    id: 1,
    name: 'Aurora Bay SMR Center',
    location: 'Insein, Northern Yangon',
    coordinates: { lng: 96.0994, lat: 16.9299 }, // North Yangon area
    capacity: '300 MW',
    radiationLevel: 'Normal - 0.12 μSv/h (below natural background)',
    status: 'Active',
    description: 'Primary energy facility serving the northern metropolitan area with clean, reliable power.',
    yearEstablished: 2021,
    safetyInfo: 'Continuous monitoring with automated safety systems. No incidents recorded.'
  },
  {
    id: 2,
    name: 'Riverside SMR Facility',
    location: 'Yangon River, Central Region',
    coordinates: { lng: 96.1561, lat: 16.7967 }, // Central Yangon near river
    capacity: '250 MW',
    radiationLevel: 'Normal - 0.10 μSv/h (below natural background)',
    status: 'Active',
    description: 'Modular reactor providing sustainable energy to industrial and residential sectors.',
    yearEstablished: 2022,
    safetyInfo: 'Triple redundancy safety systems. Regular safety drills conducted monthly.'
  },
  {
    id: 3,
    name: 'Highland SMR Station',
    location: 'Hlegu, Eastern District',
    coordinates: { lng: 96.4333, lat: 17.0833 }, // East of Yangon
    capacity: '200 MW',
    radiationLevel: 'Normal - 0.11 μSv/h (below natural background)',
    status: 'Active',
    description: 'Supporting remote communities with stable, low-carbon electricity generation.',
    yearEstablished: 2023,
    safetyInfo: 'Advanced containment systems with 24/7 monitoring and response teams.'
  },
  {
    id: 4,
    name: 'Coastal Point SMR',
    location: 'Thanlyin, Southern District',
    coordinates: { lng: 96.2494, lat: 16.7639 }, // South Yangon coastal area
    capacity: '300 MW',
    radiationLevel: 'Normal - 0.09 μSv/h (below natural background)',
    status: 'Under Construction',
    description: 'Next-generation SMR facility designed to power coastal communities and desalination plants.',
    yearEstablished: 2025,
    safetyInfo: 'Enhanced seismic-resistant design with multiple backup power systems.'
  }
];

const newsItems = [
  {
    id: 1,
    title: 'Community Safety Drill Successfully Completed',
    date: '2025-11-25',
    category: 'Safety',
    description: 'Aurora Bay and Riverside SMR centers conducted joint emergency response training with local authorities. Over 200 community members participated in the safety awareness program.',
    fullContent: 'The recent community safety drill at Aurora Bay and Riverside SMR centers demonstrated our commitment to transparency and preparedness. Local emergency services, facility staff, and community volunteers practiced coordinated response procedures. The drill included evacuation protocols, radiation monitoring demonstrations, and communication system tests. Feedback from participants has been overwhelmingly positive, with many expressing increased confidence in our safety measures.'
  },
  {
    id: 2,
    title: 'Highland SMR Achieves Record Safety Performance',
    date: '2025-11-20',
    category: 'Achievement',
    description: 'The Highland SMR Station has completed 500 consecutive days without any safety incidents, setting a new regional benchmark for operational excellence.',
    fullContent: 'Highland SMR Station has set a new standard for nuclear safety with 500 incident-free operational days. This milestone reflects our rigorous safety protocols, continuous staff training, and state-of-the-art monitoring systems. The facility has been recognized by international nuclear safety organizations for its exemplary performance.'
  },
  {
    id: 3,
    title: 'New Coastal Point SMR Construction Milestone',
    date: '2025-11-15',
    category: 'Development',
    description: 'Foundation work completed ahead of schedule. The new SMR facility is on track for commissioning in late 2026, bringing clean energy to southern coastal communities.',
    fullContent: 'Construction of the Coastal Point SMR has reached a significant milestone with the completion of foundation work two weeks ahead of schedule. The facility incorporates the latest safety innovations, including enhanced seismic resistance and advanced cooling systems. Once operational, it will provide clean energy to 250,000 homes while supporting desalination operations for fresh water production.'
  },
  {
    id: 4,
    title: 'Open House: Visit Aurora Bay SMR Center',
    date: '2025-12-05',
    category: 'Event',
    description: 'Join us for a public open house on December 5th. Tour the facility, meet our experts, and learn about nuclear safety and clean energy technology. Registration now open.',
    fullContent: 'We invite all citizens to attend our open house event at Aurora Bay SMR Center on December 5th, 2025. The event will feature guided tours of the facility (non-restricted areas), interactive exhibits on nuclear technology, Q&A sessions with nuclear engineers and safety experts, and demonstrations of radiation monitoring equipment. Registration is free but required for security purposes. Spaces are limited.'
  }
];

export function HomeSection() {
  const [selectedNews, setSelectedNews] = useState<typeof newsItems[0] | null>(null);

  return (
    <section id="home" className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4" />
            <span className="text-sm">Powering Our Future with Clean Energy</span>
          </div>
          <h2 className="text-slate-900 mb-4">
            Welcome to the SMR Project
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            Small Modular Reactors (SMRs) are bringing safe, reliable, and clean nuclear energy to communities across our region. Explore our facilities, learn about our commitment to safety, and stay informed about our progress.
          </p>
        </div>

        {/* SMR Centers Map */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-blue-600" />
            <h3 className="text-slate-900">SMR Centers Map</h3>
          </div>
          <SMRMap centers={smrCenters} />
        </div>

        {/* SMR Centers Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Factory className="w-6 h-6 text-blue-600" />
            <h3 className="text-slate-900">Our SMR Centers</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {smrCenters.map((center) => (
              <SMRCenterCard key={center.id} center={center} />
            ))}
          </div>
        </div>

        {/* Recent News & Announcements */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-blue-600" />
            <h3 className="text-slate-900">Recent Activities & Announcements</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.map((news) => (
              <NewsCard 
                key={news.id} 
                news={news} 
                onReadMore={() => setSelectedNews(news)}
              />
            ))}
          </div>
        </div>

        {/* News Modal */}
        {selectedNews && (
          <div 
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedNews(null)}
          >
            <div 
              className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mb-3">
                    {selectedNews.category}
                  </span>
                  <h3 className="text-slate-900 mb-2">{selectedNews.title}</h3>
                  <p className="text-sm text-slate-500">
                    {new Date(selectedNews.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedNews(null)}
                  className="text-slate-400 hover:text-slate-600 text-2xl leading-none"
                >
                  ×
                </button>
              </div>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-700">{selectedNews.fullContent}</p>
              </div>
              <button
                onClick={() => setSelectedNews(null)}
                className="mt-6 w-full sm:w-auto px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
