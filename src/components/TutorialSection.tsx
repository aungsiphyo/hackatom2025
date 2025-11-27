import { Play, FileText, AlertTriangle, MapPin, Phone, FileEdit } from 'lucide-react';

export function TutorialSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Video Tutorial */}
      <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 px-6 py-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="bg-red-500 p-2 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-slate-900">How to Report a Disaster</h4>
              <p className="text-sm text-slate-600">Learn when and how to submit emergency reports</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {/* Video Placeholder */}
          <div className="relative aspect-video bg-slate-900 rounded-lg group cursor-pointer">
            <video
              width="600"
              controls
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg"
            >
              <source src="../../public/report_tuto.mov" />
              Your browser does not support the video tag.
            </video>
          </div>

          

          {/* Instructions */}
          <div className="bg-slate-50 rounded-lg p-4">
            <h5 className="text-slate-900 mb-3">Quick Guide:</h5>
            <ol className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="flex-shrink-0 text-slate-400">1.</span>
                <span><span className="text-slate-900">When to Report:</span> Any radiation concerns, power outages near SMR facilities, physical damage, or suspicious activities.</span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 text-slate-400">2.</span>
                <span><span className="text-slate-900">What to Include:</span> Clear description of the issue, your location, and contact number.</span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 text-slate-400">3.</span>
                <span><span className="text-slate-900">How to Submit:</span> Use the Report form below with your current location.</span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 text-slate-400">4.</span>
                <span><span className="text-slate-900">What Happens Next:</span> Our team reviews your report and may contact you for follow-up.</span>
              </li>
            </ol>
          </div>

          <button
            onClick={() => scrollToSection('report')}
            className="w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
          >
            <FileEdit className="w-5 h-5" />
            <span>Go to Report Section</span>
          </button>
        </div>
      </div>

      {/* Website Guide */}
      <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-6 py-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-slate-900">How to Use This Website</h4>
              <p className="text-sm text-slate-600">Navigate and access all features easily</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {/* Navigation Guide */}
          <div className="space-y-4">
            {/* Home */}
            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h5 className="text-slate-900 mb-1">Home Section</h5>
                <p className="text-sm text-slate-600">View the interactive map of all SMR centers, browse facility details, and read recent announcements and updates.</p>
              </div>
            </div>

            {/* Learn */}
            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer" onClick={() => scrollToSection('learn')}>
              <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                <FileText className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h5 className="text-slate-900 mb-1">Learn Section</h5>
                <p className="text-sm text-slate-600">Explore SMR components, read Q&A about nuclear safety, and watch educational tutorials about the technology.</p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer" onClick={() => scrollToSection('contact')}>
              <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h5 className="text-slate-900 mb-1">Contact Section</h5>
                <p className="text-sm text-slate-600">Find contact information for all departments, partners, and emergency response teams.</p>
              </div>
            </div>

            {/* Report */}
            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer" onClick={() => scrollToSection('report')}>
              <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h5 className="text-slate-900 mb-1">Report Section</h5>
                <p className="text-sm text-slate-600">Submit reports about concerns, incidents, or issues in your area with optional location sharing.</p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h5 className="text-blue-900 mb-2">Navigation Tips:</h5>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>• Use the top navigation bar to jump between sections</li>
              <li>• Click on map markers to view detailed facility information</li>
              <li>• Expand Q&A items to read full answers</li>
              <li>• All sections work on mobile devices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
