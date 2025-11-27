import { BookOpen, HelpCircle, Video, Info } from 'lucide-react';
import { ComponentGallery } from './ComponentGallery';
import { QASection } from './QASection';
import { TutorialSection } from './TutorialSection';

export function LearnSection() {
  return (
    <section id="learn" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm">Education & Resources</span>
          </div>
          <h2 className="text-slate-900 mb-4">
            Learn About SMR Technology
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            Understand how Small Modular Reactors work, why they're important for our community, and how you can stay informed and involved.
          </p>
        </div>

        {/* Component Gallery */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-lg">
              <Info className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-slate-900">SMR Components</h3>
              <p className="text-slate-600">Explore the key parts of a Small Modular Reactor and how they work together</p>
            </div>
          </div>
          <ComponentGallery />
        </div>

        {/* Q&A Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-2 rounded-lg">
              <HelpCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-slate-900">Frequently Asked Questions</h3>
              <p className="text-slate-600">Get answers to common questions about SMR technology and our project</p>
            </div>
          </div>
          <QASection />
        </div>

        {/* Tutorial Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-orange-600 to-red-500 p-2 rounded-lg">
              <Video className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-slate-900">Tutorials & Guides</h3>
              <p className="text-slate-600">Learn how to use this website and report issues in your area</p>
            </div>
          </div>
          <TutorialSection />
        </div>
      </div>
    </section>
  );
}
