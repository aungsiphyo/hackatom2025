import { Phone, Mail, MapPin, Clock, Building2, Shield, Newspaper, Users } from 'lucide-react';

const contacts = [
  {
    id: 1,
    icon: Building2,
    organization: 'PlasmaBrick Headquarters',
    department: 'General Administration',
    contactPerson: 'Dr. Sarah Johnson',
    phone: '+1 (555) 100-2000',
    email: 'info@smrproject.gov',
    address: '123 Energy Boulevard, Central City, 12345',
    officeHours: 'Monday - Friday: 8:00 AM - 6:00 PM',
    category: 'general',
    bgColor: 'from-blue-50 to-cyan-50',
    iconColor: 'bg-blue-500'
  },
  {
    id: 2,
    icon: Shield,
    organization: 'Safety & Emergency Response',
    department: 'Nuclear Safety Division',
    contactPerson: 'Chief Michael Chen',
    phone: '+1 (555) 911-SAFE (7233)',
    emergencyPhone: '911 (Emergencies Only)',
    email: 'safety@smrproject.gov',
    address: '456 Safety Avenue, Central City, 12345',
    officeHours: '24/7 Emergency Hotline Available',
    category: 'safety',
    bgColor: 'from-red-50 to-orange-50',
    iconColor: 'bg-red-500'
  },
  {
    id: 3,
    icon: Users,
    organization: 'Community Relations',
    department: 'Public Engagement Office',
    contactPerson: 'Maria Rodriguez',
    phone: '+1 (555) 100-2100',
    email: 'community@smrproject.gov',
    address: '123 Energy Boulevard, Central City, 12345',
    officeHours: 'Monday - Friday: 9:00 AM - 5:00 PM',
    category: 'community',
    bgColor: 'from-purple-50 to-pink-50',
    iconColor: 'bg-purple-500'
  },
  {
    id: 4,
    icon: Newspaper,
    organization: 'Media & Communications',
    department: 'Press Office',
    contactPerson: 'James Williams',
    phone: '+1 (555) 100-2200',
    email: 'press@smrproject.gov',
    address: '123 Energy Boulevard, Central City, 12345',
    officeHours: 'Monday - Friday: 8:00 AM - 6:00 PM',
    category: 'media',
    bgColor: 'from-green-50 to-emerald-50',
    iconColor: 'bg-green-500'
  },
  {
    id: 5,
    icon: Phone,
    organization: 'Technical Support',
    department: 'Operations & Maintenance',
    contactPerson: 'Dr. Robert Lee',
    phone: '+1 (555) 100-2300',
    email: 'technical@smrproject.gov',
    address: 'Various SMR Facility Locations',
    officeHours: 'Monday - Friday: 7:00 AM - 7:00 PM',
    category: 'technical',
    bgColor: 'from-orange-50 to-yellow-50',
    iconColor: 'bg-orange-500'
  },
  {
    id: 6,
    icon: Building2,
    organization: 'Environmental Protection Agency',
    department: 'Nuclear Regulatory Partnership',
    contactPerson: 'Dr. Emily Park',
    phone: '+1 (555) 300-4000',
    email: 'nuclear@epa.gov',
    address: '789 Environmental Way, Central City, 12345',
    officeHours: 'Monday - Friday: 8:30 AM - 5:30 PM',
    category: 'partner',
    bgColor: 'from-teal-50 to-cyan-50',
    iconColor: 'bg-teal-500'
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <Phone className="w-4 h-4" />
            <span className="text-sm">Get in Touch</span>
          </div>
          <h2 className="text-slate-900 mb-4">
            Contact Us
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            We're here to answer your questions, address concerns, and keep you informed. Reach out to the appropriate department for assistance.
          </p>
        </div>

        {/* Emergency Notice */}
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-12 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="bg-red-500 p-3 rounded-full flex-shrink-0">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-red-900 mb-2">Emergency Contact</h4>
              <p className="text-red-800 mb-3">
                For immediate safety concerns or emergencies involving SMR facilities, call our 24/7 hotline:
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:911" 
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>911</span>
                </a>
                <a 
                  href="tel:+15559117233" 
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 911-SAFE</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <div 
                key={contact.id} 
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-200 overflow-hidden"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${contact.bgColor} px-6 py-4 border-b border-slate-200`}>
                  <div className="flex items-start gap-3">
                    <div className={`${contact.iconColor} p-2 rounded-lg flex-shrink-0`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-slate-900">{contact.organization}</h4>
                      <p className="text-sm text-slate-600">{contact.department}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Contact Person */}
                  {contact.contactPerson && (
                    <div className="flex items-center gap-3 text-sm">
                      <Users className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      <span className="text-slate-700">{contact.contactPerson}</span>
                    </div>
                  )}

                  {/* Phone */}
                  <div className="space-y-2">
                    <a 
                      href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                      className="flex items-center gap-3 text-sm hover:text-blue-600 transition-colors group"
                    >
                      <Phone className="w-4 h-4 text-slate-400 group-hover:text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700 group-hover:text-blue-600">{contact.phone}</span>
                    </a>
                    {contact.emergencyPhone && (
                      <a 
                        href={`tel:${contact.emergencyPhone.replace(/[^0-9+]/g, '')}`}
                        className="flex items-center gap-3 text-sm text-red-600 hover:text-red-700 transition-colors ml-7"
                      >
                        <span>{contact.emergencyPhone}</span>
                      </a>
                    )}
                  </div>

                  {/* Email */}
                  <a 
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3 text-sm hover:text-blue-600 transition-colors group"
                  >
                    <Mail className="w-4 h-4 text-slate-400 group-hover:text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700 group-hover:text-blue-600 break-all">{contact.email}</span>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{contact.address}</span>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-3 text-sm pt-2 border-t border-slate-100">
                    <Clock className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{contact.officeHours}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <a
                      href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                      className="flex-1 px-4 py-2 bg-slate-900 text-white text-sm rounded-lg hover:bg-slate-800 transition-colors text-center"
                    >
                      Call Now
                    </a>
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex-1 px-4 py-2 bg-slate-100 text-slate-700 text-sm rounded-lg hover:bg-slate-200 transition-colors text-center"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-4xl mx-auto">
          <h4 className="text-blue-900 mb-3">Office Visit Information</h4>
          <p className="text-blue-800 mb-4">
            Walk-in visits are welcome during office hours at our headquarters. For security purposes, please bring a valid ID and check in at the reception desk. Facility tours must be scheduled in advance through the Community Relations office.
          </p>
          <p className="text-sm text-blue-700">
            All staff members are trained to assist you in your preferred language. Translation services are available upon request.
          </p>
        </div>
      </div>
    </section>
  );
}
