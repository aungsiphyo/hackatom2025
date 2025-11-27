import { useState } from 'react';
import { ChevronDown, CheckCircle, AlertCircle } from 'lucide-react';

const qaItems = [
  {
    id: 1,
    question: 'Why does our region need SMR?',
    answer: 'Our region needs Small Modular Reactors for several critical reasons:',
    details: [
      'Energy Security: SMRs provide reliable, baseload power that is not dependent on weather conditions or fuel imports, ensuring stable electricity supply even during crises.',
      'Environmental Benefits: Nuclear energy produces zero greenhouse gas emissions during operation, helping our region meet climate goals while providing consistent power.',
      'Economic Growth: SMRs create high-skilled jobs, reduce energy costs over time, and attract industries that need reliable power.',
      'Grid Stability: Unlike intermittent renewable sources, SMRs provide constant power output, complementing solar and wind energy in a balanced energy mix.',
      'Energy Independence: Reduces reliance on imported fossil fuels, protecting our region from price volatility and supply disruptions.'
    ],
    category: 'general'
  },
  {
    id: 2,
    question: 'Why mobile SMR? Pros & Cons',
    category: 'technology',
    pros: [
      'Flexible Deployment: Can be transported to remote areas, disaster zones, or regions with growing energy demand.',
      'Rapid Installation: Factory-built modules reduce on-site construction time from years to months.',
      'Disaster Response: Can be quickly deployed to areas affected by natural disasters to restore power infrastructure.',
      'Scalable Solution: Multiple units can be added incrementally as energy demand grows, avoiding oversized infrastructure.',
      'Lower Initial Investment: Smaller financial commitment compared to large traditional nuclear plants, making them accessible to more communities.',
      'Enhanced Safety: Smaller reactor cores and advanced passive safety systems reduce risk.'
    ],
    cons: [
      'Regulatory Complexity: Mobile deployment requires coordination across multiple jurisdictions and regulatory frameworks.',
      'Transportation Logistics: Moving reactor modules requires specialized equipment, secure routes, and careful planning.',
      'Public Perception: Some communities may have concerns about mobile nuclear facilities that require ongoing education and transparency.',
      'Infrastructure Requirements: Sites must still have appropriate cooling, security, and grid connection infrastructure.',
      'Limited Track Record: As a newer technology, there is less operational history compared to traditional nuclear plants.',
      'Decommissioning: Long-term plans for relocating or decommissioning mobile units need careful consideration.'
    ]
  },
  {
    id: 3,
    question: 'Is nuclear energy safe?',
    answer: 'Yes, modern nuclear energy, especially SMR technology, is among the safest forms of electricity generation:',
    details: [
      'Multiple Safety Barriers: SMRs use defense-in-depth approach with multiple independent layers of safety systems.',
      'Passive Safety Systems: Unlike older reactors, SMRs can cool down automatically without electricity or human intervention.',
      'Small Core Design: Smaller reactor cores produce less heat, making them inherently easier to control and cool.',
      'Rigorous Regulation: Nuclear facilities are subject to the strictest safety regulations and continuous inspections.',
      'Statistical Safety: Nuclear power has one of the lowest death rates per unit of energy produced compared to other sources.',
      'Radiation Monitoring: Continuous monitoring ensures radiation levels remain far below harmful levels for workers and the public.'
    ],
    category: 'safety'
  },
  {
    id: 4,
    question: 'What about nuclear waste?',
    answer: 'Nuclear waste management is a key consideration, and SMRs actually improve upon traditional approaches:',
    details: [
      'Reduced Volume: SMRs produce significantly less waste than traditional reactors per unit of energy generated.',
      'Secure Storage: All waste is securely contained in robust containers and stored on-site in monitored facilities.',
      'Long-term Solutions: Advanced recycling technologies can reuse up to 95% of spent fuel, further reducing waste.',
      'Minimal Environmental Impact: Unlike fossil fuels, nuclear waste is solid and contained, not released into the atmosphere.',
      'Next-Gen Technology: Newer SMR designs can even use some types of existing nuclear waste as fuel.',
      'Geological Disposal: Long-term plans include permanent geological repositories in stable rock formations.'
    ],
    category: 'environment'
  }
];

export function QASection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleQuestion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {qaItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden"
        >
          {/* Question Header */}
          <button
            onClick={() => toggleQuestion(item.id)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
          >
            <h4 className="text-slate-900 pr-4">{item.question}</h4>
            <ChevronDown 
              className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                openId === item.id ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Answer Content */}
          {openId === item.id && (
            <div className="px-6 pb-6 space-y-4">
              {item.answer && (
                <p className="text-slate-700">{item.answer}</p>
              )}

              {/* Details List */}
              {item.details && (
                <div className="space-y-3">
                  {item.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-600">{detail}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Pros & Cons */}
              {item.pros && item.cons && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                  {/* Pros */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h5 className="text-green-900 mb-3">Advantages</h5>
                    <div className="space-y-2">
                      {item.pros.map((pro, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-green-800">{pro}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cons */}
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h5 className="text-orange-900 mb-3">Considerations</h5>
                    <div className="space-y-2">
                      {item.cons.map((con, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-orange-800">{con}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
