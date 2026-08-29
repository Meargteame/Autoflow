import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle,
  Video,
  Building,
  User,
  Mail,
  ArrowRight
} from 'lucide-react';
import { AuditFormData } from '../types';

const AVAILABLE_DATES = [
  { dayName: "Mon", dateStr: "Sep 01", fullDate: "Monday, Sep 01, 2026" },
  { dayName: "Tue", dateStr: "Sep 02", fullDate: "Tuesday, Sep 02, 2026" },
  { dayName: "Wed", dateStr: "Sep 03", fullDate: "Wednesday, Sep 03, 2026" },
  { dayName: "Thu", dateStr: "Sep 04", fullDate: "Thursday, Sep 04, 2026" },
  { dayName: "Fri", dateStr: "Sep 05", fullDate: "Friday, Sep 05, 2026" },
];

const TIME_SLOTS = [
  "09:30 AM EST",
  "11:00 AM EST",
  "01:30 PM EST",
  "03:00 PM EST",
  "04:30 PM EST",
];

export const AuditBookingSection: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>(AVAILABLE_DATES[0].fullDate);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>(TIME_SLOTS[1]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [formData, setFormData] = useState<AuditFormData>({
    fullName: '',
    workEmail: '',
    companyName: '',
    companyWebsite: '',
    targetIcp: 'Enterprise B2B SaaS ($20k+ ACV)',
    monthlyOutreachVolume: '5,000 - 15,000 prospects / mo',
    currentCrm: 'HubSpot',
    selectedDate: AVAILABLE_DATES[0].fullDate,
    selectedTimeSlot: TIME_SLOTS[1],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.workEmail.trim() || !formData.companyName.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Work Email, Company).');
      return;
    }
    setErrorMessage('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
    }, 450);
  };

  return (
    <section id="audit-booking-section" className="relative py-20 md:py-24 bg-[#0B0D13] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121620] border border-white/10 text-xs font-mono text-[#94A3B8] mb-4">
            <span>Direct Calendar Access</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Schedule a 1-on-1 Outbound Architecture Audit
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-3 leading-relaxed">
            We will analyze your ICP, map your total addressable market, and blueprint the exact secondary domain and enrichment setup for your team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-xl bg-[#121620] border border-white/10 p-6 sm:p-8">
          {isBooked ? (
            <div className="text-center py-8 space-y-4 max-w-lg mx-auto">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">
                Architecture Audit Confirmed
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Your session is scheduled for <span className="text-white font-semibold">{selectedDate} at {selectedTimeSlot}</span>. The Google Meet link and preparatory brief have been dispatched to <span className="text-white font-semibold">{formData.workEmail}</span>.
              </p>
              <div className="p-4 rounded-lg bg-[#0E1118] border border-white/[0.06] text-left text-xs font-mono space-y-1.5">
                <div className="text-[#94A3B8]">Company: <span className="text-white">{formData.companyName}</span></div>
                <div className="text-[#94A3B8]">Target ICP: <span className="text-white">{formData.targetIcp}</span></div>
                <div className="text-[#94A3B8]">Format: <span className="text-emerald-400">30-min Google Meet Video</span></div>
              </div>
              <button
                onClick={() => setIsBooked(false)}
                className="px-5 py-2.5 rounded-lg text-xs font-bold text-[#0B0D13] bg-[#00D2E0] hover:bg-[#00D2E0]/90 transition-colors"
              >
                Schedule Another Slot
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Step 1: Date & Time Picker */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] block mb-3">
                  Step 1: Select Session Time (EST)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-[#94A3B8] block mb-1.5">Available Dates:</span>
                    <div className="grid grid-cols-5 gap-1.5">
                      {AVAILABLE_DATES.map((day) => (
                        <button
                          key={day.dateStr}
                          type="button"
                          onClick={() => setSelectedDate(day.fullDate)}
                          className={`py-2 text-center rounded-lg border text-xs font-mono transition-colors cursor-pointer ${
                            selectedDate === day.fullDate
                              ? 'bg-[#00D2E0] text-[#0B0D13] border-[#00D2E0] font-bold'
                              : 'bg-[#0E1118] text-[#94A3B8] border-white/[0.08] hover:text-white hover:border-white/20'
                          }`}
                        >
                          <span className="text-[10px] block uppercase">{day.dayName}</span>
                          <span>{day.dateStr.split(' ')[1]}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-[#94A3B8] block mb-1.5">Available Slots:</span>
                    <select
                      value={selectedTimeSlot}
                      onChange={(e) => setSelectedTimeSlot(e.target.value)}
                      className="w-full py-2.5 px-3 rounded-lg bg-[#0E1118] border border-white/[0.08] text-white text-xs font-mono focus:outline-none focus:border-[#00D2E0]"
                    >
                      {TIME_SLOTS.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Intake Details */}
              <div className="pt-4 border-t border-white/[0.06]">
                <label className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] block mb-3">
                  Step 2: Company & ICP Profile
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#94A3B8] block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Sarah Jenkins"
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-[#0E1118] border border-white/[0.08] text-white text-xs placeholder:text-[#94A3B8]/40 focus:outline-none focus:border-[#00D2E0]"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-[#94A3B8] block mb-1">Work Email *</label>
                    <input
                      type="email"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleInputChange}
                      placeholder="sarah@company.com"
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-[#0E1118] border border-white/[0.08] text-white text-xs placeholder:text-[#94A3B8]/40 focus:outline-none focus:border-[#00D2E0]"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-[#94A3B8] block mb-1">Company Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Acme Scale"
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-[#0E1118] border border-white/[0.08] text-white text-xs placeholder:text-[#94A3B8]/40 focus:outline-none focus:border-[#00D2E0]"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-[#94A3B8] block mb-1">Current CRM</label>
                    <select
                      name="currentCrm"
                      value={formData.currentCrm}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 rounded-lg bg-[#0E1118] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-[#00D2E0]"
                    >
                      <option value="HubSpot">HubSpot</option>
                      <option value="Salesforce">Salesforce</option>
                      <option value="GoHighLevel">GoHighLevel</option>
                      <option value="Other">Other / Spreadsheets</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-lg font-heading font-bold text-xs sm:text-sm text-[#0B0D13] bg-[#00D2E0] hover:bg-[#00D2E0]/90 transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Confirming Slot...</span>
                  ) : (
                    <>
                      <span>Confirm Audit Booking ({selectedDate} @ {selectedTimeSlot})</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-2 mt-3 text-xs font-mono text-[#94A3B8]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00D2E0]" />
                  <span>30-minute technical architecture review • Zero sales pitch</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
