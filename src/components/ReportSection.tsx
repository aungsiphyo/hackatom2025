import { useState } from 'react';
import { AlertTriangle, MapPin, Phone, FileText, Send, CheckCircle, Loader2 } from 'lucide-react';

interface ReportFormData {
  title: string;
  category: string;
  details: string;
  phone: string;
}

export function ReportSection() {
  const [formData, setFormData] = useState<ReportFormData>({
    title: '',
    category: '',
    details: '',
    phone: ''
  });
  
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [manualLocation, setManualLocation] = useState('');
  const [locationStatus, setLocationStatus] = useState<'idle' | 'requesting' | 'granted' | 'denied'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const requestLocation = () => {
    setLocationStatus('requesting');
    
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setLocationStatus('granted');
        },
        (error) => {
          console.error('Geolocation error:', error);
          setLocationStatus('denied');
        }
      );
    } else {
      setLocationStatus('denied');
    }
  };

  const generateReferenceId = () => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 7);
    return `SMR-${timestamp}-${random}`.toUpperCase();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const refId = generateReferenceId();
    setReferenceId(refId);
    
    // Log the report data (in production, this would be sent to backend)
    console.log('Report submitted:', {
      ...formData,
      location: location || manualLocation,
      referenceId: refId,
      timestamp: new Date().toISOString()
    });
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({ title: '', category: '', details: '', phone: '' });
    setLocation(null);
    setManualLocation('');
    setLocationStatus('idle');
    setIsSubmitted(false);
    setReferenceId('');
  };

  if (isSubmitted) {
    return (
      <section id="report" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-green-200 p-8 sm:p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            
            <h2 className="text-slate-900 mb-4">Report Submitted Successfully</h2>
            
            <div className="bg-slate-50 rounded-lg p-6 mb-6">
              <p className="text-sm text-slate-600 mb-2">Your Reference ID:</p>
              <p className="text-2xl text-slate-900 tracking-wide mb-4">{referenceId}</p>
              <p className="text-xs text-slate-500">Please save this ID for tracking your report</p>
            </div>
            
            <p className="text-slate-600 mb-6">
              Thank you for submitting your report. Our team will review it as soon as possible and may contact you at the phone number you provided for additional information or updates.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h4 className="text-blue-900 mb-2">What Happens Next?</h4>
              <ul className="text-sm text-blue-800 text-left space-y-2">
                <li>• Our emergency response team will assess your report within 1 hour</li>
                <li>• High-priority incidents are escalated immediately to safety personnel</li>
                <li>• You may receive a follow-up call or message within 24 hours</li>
                <li>• Track your report status by calling our hotline with your reference ID</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetForm}
                className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                Submit Another Report
              </button>
              <a
                href="tel:+15559117233"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Emergency Hotline</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="report" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm">Report an Issue</span>
          </div>
          <h2 className="text-slate-900 mb-4">
            Submit a Report
          </h2>
          <p className="text-slate-600 text-lg">
            If you've noticed any concerns or issues related to SMR facilities in your area, please report them here. Our team takes all reports seriously and will respond promptly.
          </p>
        </div>

        {/* Report Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 px-6 py-4 border-b border-slate-200">
            <h3 className="text-slate-900">Report Form</h3>
            <p className="text-sm text-slate-600">All fields marked with * are required</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Problem Title */}
            <div>
              <label htmlFor="title" className="block text-slate-700 mb-2">
                Problem Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                placeholder="Brief description of the issue"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-slate-700 mb-2">
                Incident Category *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="">Select a category...</option>
                <option value="radiation">Radiation Concern</option>
                <option value="power-outage">Power Outage</option>
                <option value="physical-damage">Physical Damage</option>
                <option value="suspicious-activity">Suspicious Activity</option>
                <option value="environmental">Environmental Issue</option>
                <option value="safety-equipment">Safety Equipment Issue</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Problem Details */}
            <div>
              <label htmlFor="details" className="block text-slate-700 mb-2">
                Problem Details *
              </label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                required
                rows={6}
                placeholder="Please provide a detailed description of what you observed, when it occurred, and any other relevant information..."
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
              <p className="text-sm text-slate-500 mt-2">
                Be as specific as possible to help our team respond effectively
              </p>
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-slate-700 mb-2">
                Your Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-sm text-slate-500 mt-2">
                We may contact you for follow-up information or updates
              </p>
            </div>

            {/* Location Section */}
            <div className="border-t border-slate-200 pt-6">
              <h4 className="text-slate-900 mb-4">Location Information</h4>
              
              {locationStatus === 'idle' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-blue-800 mb-3">
                    Sharing your location helps our team respond faster and more accurately. Click the button below to share your current location.
                  </p>
                  <button
                    type="button"
                    onClick={requestLocation}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Share My Location</span>
                  </button>
                </div>
              )}

              {locationStatus === 'requesting' && (
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-center gap-3">
                  <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
                  <span className="text-slate-700">Requesting location access...</span>
                </div>
              )}

              {locationStatus === 'granted' && location && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-green-900 mb-2">Location captured successfully</p>
                      <p className="text-sm text-green-700">
                        Coordinates: {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {locationStatus === 'denied' && (
                <div className="space-y-4">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <p className="text-orange-900 mb-2">Location access denied or unavailable</p>
                    <p className="text-sm text-orange-700">
                      Please enter your location manually below
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="manualLocation" className="block text-slate-700 mb-2">
                      Manual Location (Address or Landmark)
                    </label>
                    <input
                      type="text"
                      id="manualLocation"
                      value={manualLocation}
                      onChange={(e) => setManualLocation(e.target.value)}
                      placeholder="e.g., 123 Main Street or Near Central Park"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Privacy Notice */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-xs text-slate-600">
                <strong>Privacy Notice:</strong> The information you provide will be used solely for incident response and follow-up purposes. Your data will be handled in accordance with privacy regulations and will not be shared with third parties without your consent, except as required by law or for emergency response.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || (!location && !manualLocation && locationStatus !== 'idle')}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting Report...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Submit Report</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Emergency Notice */}
        <div className="mt-8 bg-red-50 border-2 border-red-200 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
            <div>
              <h4 className="text-red-900 mb-2">For Immediate Emergencies</h4>
              <p className="text-red-800 mb-3">
                If you are witnessing an active emergency or immediate safety threat, do not wait for this form. Call emergency services immediately.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="tel:911" 
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 911</span>
                </a>
                <a 
                  href="tel:+15559117233" 
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>SMR Emergency Hotline</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
