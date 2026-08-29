import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { AuditFormData } from '../types';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.workEmail.trim() || !formData.companyName.trim()) {
      setErrorMessage('Please fill in your name, work email, and company.');
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-xl bg-[#121620] border border-white/10 p-6 sm:p-8 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#0E1118] text-[#94A3B8] hover:text-white border border-white/10 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {isBooked ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-white">
              Session Reserved
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
              We have reserved <span className="text-white font-semibold">{selectedDate} at {selectedTimeSlot}</span>. The Google Meet link has been sent to <span className="text-white font-medium">{formData.workEmail}</span>.
            </p>
            <div className="p-4 rounded-lg bg-[#0E1118] border border-white/[0.06] text-xs font-mono text-left space-y-1">
              <div className="text-[#94A3B8]">Company: <span className="text-white">{formData.companyName}</span></div>
              <div className="text-[#94A3B8]">Location: <span className="text-emerald-400">Google Meet Video</span></div>
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg font-bold text-xs bg-[#00D2E0] text-[#0B0D13] hover:bg-[#00D2E0]/90 transition-colors"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="pr-6">
              <span className="text-[10px] font-mono uppercase text-[#00D2E0] font-semibold tracking-wider">
                1-on-1 Strategy Session
              </span>
              <h3 className="text-xl font-heading font-bold text-white">
                Book an Outbound Architecture Audit
              </h3>
              <p className="text-xs text-[#94A3B8] mt-1">
                We'll map your target ICP and show you the exact automated outreach infrastructure for your team.
              </p>
            </div>

            {errorMessage && (
              <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Date and Time Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="text-[11px] font-mono text-[#94A3B8] block mb-1.5">
                  Select Date
                </label>
                <div className="grid grid-cols-5 gap-1">
                  {AVAILABLE_DATES.map((day) => (
                    <button
                      key={day.dateStr}
                      type="button"
                      onClick={() => setSelectedDate(day.fullDate)}
                      className={`py-1.5 text-center rounded-lg border text-xs font-mono transition-colors ${
                        selectedDate === day.fullDate
                          ? 'bg-[#00D2E0] text-[#0B0D13] border-[#00D2E0] font-bold'
                          : 'bg-[#0E1118] text-[#94A3B8] border-white/[0.08] hover:text-white'
                      }`}
                    >
                      <span className="text-[9px] block uppercase">{day.dayName}</span>
                      <span>{day.dateStr.split(' ')[1]}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono text-[#94A3B8] block mb-1.5">
                  Select Slot (EST)
                </label>
                <select
                  value={selectedTimeSlot}
                  onChange={(e) => setSelectedTimeSlot(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg bg-[#0E1118] border border-white/[0.08] text-white text-xs font-mono focus:outline-none focus:border-[#00D2E0]"
                >
                  {TIME_SLOTS.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-[#94A3B8] block mb-1">Your Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Alex Morgan"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-[#0E1118] border border-white/[0.08] text-white text-xs placeholder:text-[#94A3B8]/40 focus:outline-none focus:border-[#00D2E0]"
                />
              </div>

              <div>
                <label className="text-xs text-[#94A3B8] block mb-1">Work Email *</label>
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  placeholder="alex@company.com"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-[#0E1118] border border-white/[0.08] text-white text-xs placeholder:text-[#94A3B8]/40 focus:outline-none focus:border-[#00D2E0]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-[#94A3B8] block mb-1">Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Acme Corp"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-[#0E1118] border border-white/[0.08] text-white text-xs placeholder:text-[#94A3B8]/40 focus:outline-none focus:border-[#00D2E0]"
                />
              </div>

              <div>
                <label className="text-xs text-[#94A3B8] block mb-1">Current CRM</label>
                <select
                  name="currentCrm"
                  value={formData.currentCrm}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-lg bg-[#0E1118] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-[#00D2E0]"
                >
                  <option value="HubSpot">HubSpot</option>
                  <option value="Salesforce">Salesforce</option>
                  <option value="GoHighLevel">GoHighLevel</option>
                  <option value="Other">Other / Spreadsheets</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg font-heading font-bold text-xs sm:text-sm text-[#0B0D13] bg-[#00D2E0] hover:bg-[#00D2E0]/90 transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Reserving Slot...</span>
                ) : (
                  <>
                    <span>Confirm Audit Booking ({selectedTimeSlot})</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
              <div className="flex items-center justify-center gap-2 mt-2 text-[10px] font-mono text-[#94A3B8]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00D2E0]" />
                <span>Zero sales pressure • 30-min technical blueprint</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
