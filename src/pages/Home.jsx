import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiCalendar, FiMapPin, FiPhone, FiMail, FiDownload, FiCheckCircle, FiInfo, FiChevronRight, FiExternalLink, FiX } from 'react-icons/fi';
import { FaGraduationCap, FaUserFriends, FaGlobe, FaQrcode } from 'react-icons/fa';
import { QRCodeCanvas } from 'qrcode.react';
import { conferenceData } from '../data/conferenceData';
import CountdownTimer from '../components/CountdownTimer';

export default function Home() {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeModalQr, setActiveModalQr] = useState(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  // UPI Pay Link generator: opens UPI apps on mobile with preset parameters
  const upiPayUrl = `upi://pay?pa=${conferenceData.bankDetails.upiId}&pn=${encodeURIComponent(conferenceData.bankDetails.accountName)}&am=4000.00&cu=INR&tn=Pedicon2026`;

  const handleRegisterClick = () => {
    // Open Google Form in new tab
    window.open(conferenceData.googleFormLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      
      {/* ==================================================
          1. TOP PANEL: NATIONAL IAP OFFICE BEARERS
          ================================================== */}
      <section className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white py-6 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] sm:text-xs font-bold text-amber-400 tracking-widest uppercase mb-4">
            Indian Academy of Pediatrics - National Office Bearers 2026
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {conferenceData.officeBearers.map((bearer, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-1">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-400 bg-slate-800 shadow-md">
                  <img
                    src={bearer.image}
                    alt={bearer.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h5 className="font-display font-extrabold text-[10px] tracking-tight leading-tight text-amber-200 uppercase">
                  {bearer.name}
                </h5>
                <p className="text-[8px] text-slate-350 tracking-wider font-semibold">
                  {bearer.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          2. MAIN BANNER & HEADLINE
          ================================================== */}
      <header className="relative py-14 px-4 text-center overflow-hidden bg-gradient-to-b from-indigo-50/50 to-transparent">
        <div className="max-w-6xl mx-auto space-y-4 relative z-10">
          
          {/* Main Titles */}
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-indigo-950 leading-none tracking-tight">
            25<sup>th</sup> JHARKHAND STATE PEDICON
          </h1>
          <p className="font-display font-black text-xl sm:text-3xl text-indigo-900 tracking-tight">
            & 29<sup>th</sup> Annual Conference IAP Jamshedpur
          </p>
          <p className="text-xs sm:text-sm font-bold text-slate-500 max-w-xl mx-auto uppercase tracking-wide">
            (Organised by Indian Academy of Pediatrics, Jamshedpur Branch)
          </p>

          {/* Dates & Venue Cards */}
          <div className="max-w-4xl mx-auto bg-white border border-indigo-100 shadow-xl rounded-3xl p-6 sm:p-8 mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Left: IAP Logo Representation */}
            <div className="flex flex-col items-center space-y-1 md:border-r border-slate-100 pb-4 md:pb-0">
              <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-150">
                <span className="font-display font-black text-xs text-center leading-none">IAP<br/>JSR</span>
              </div>
              <p className="text-[9px] font-bold text-slate-400 tracking-widest uppercase mt-2">Est. Branch</p>
            </div>

            {/* Middle: Event Callout */}
            <div className="space-y-2 md:col-span-1 border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0">
              <div className="flex items-center justify-center gap-1.5 text-indigo-700">
                <FiCalendar className="shrink-0" size={18} />
                <span className="font-display font-black text-base sm:text-lg tracking-tight">
                  12th & 13th Dec 2026
                </span>
              </div>
              <p className="text-[10px] text-amber-600 font-bold bg-amber-50 px-2 py-1 rounded-md inline-block">
                Pre-Conf Workshop: 11th Dec 2026
              </p>
            </div>

            {/* Right: Venue Callout */}
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-indigo-950">
                <FiMapPin className="shrink-0 text-red-500" size={18} />
                <span className="font-display font-extrabold text-sm sm:text-base uppercase tracking-tight">
                  Hotel Ramada, Jamshedpur
                </span>
              </div>
              <p className="text-[10px] text-slate-400">Bistupur Commercial Hub, Jamshedpur</p>
            </div>

          </div>

          {/* Countdown Wrapper */}
          <div className="max-w-2xl mx-auto pt-6">
            <CountdownTimer targetDate="2026-12-12T09:00:00" />
          </div>

        </div>
      </header>

      {/* ==================================================
          3. ORGANISING COMMITTEE SECTION
          ================================================== */}
      <section id="committee" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-10">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-indigo-950 uppercase tracking-tight relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-1/4 after:w-1/2 after:h-[3px] after:bg-indigo-600">
            ORGANISING COMMITTEE
          </h2>
        </div>

        {/* 10 members Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {conferenceData.organisingCommittee.map((member, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200/80 rounded-2xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-indigo-100 bg-slate-50 mb-3 shadow-inner">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="font-display font-extrabold text-xs text-indigo-950 uppercase leading-snug">
                {member.name}
              </h4>
              <p className="text-[9px] text-indigo-600 font-bold uppercase mt-1 tracking-wider">
                {member.role}
              </p>
              {member.detail && (
                <p className="text-[8px] text-slate-400 font-semibold uppercase">
                  {member.detail}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Chief Contacts Grid (Sunil K Singh & Shikhar Deep Jain) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12 pt-10 border-t border-slate-200/60">
          {conferenceData.chiefContacts.map((chief, idx) => (
            <div 
              key={idx}
              className="bg-white border border-indigo-100/80 rounded-3xl p-5 flex items-center gap-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-indigo-200 bg-slate-50 shrink-0 shadow-md">
                <img
                  src={chief.image}
                  alt={chief.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display font-black text-sm sm:text-base text-indigo-950 uppercase leading-tight">
                  {chief.name}
                </h4>
                <p className="text-xs text-indigo-700 font-bold uppercase tracking-wider leading-none">
                  {chief.role}
                </p>
                <div className="flex flex-col pt-1.5 gap-1 text-xs">
                  <a href={`tel:${chief.contact}`} className="font-bold text-slate-600 hover:text-indigo-600 flex items-center gap-1.5">
                    <FiPhone className="text-indigo-500 shrink-0" /> {chief.contact}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          4. REGISTRATION DETAILS & PAYMENT HUBS (Poster footer)
          ================================================== */}
      <section id="registration" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Fees breakdown */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-display font-black text-xl text-indigo-950 border-b border-slate-100 pb-3 uppercase tracking-tight">
                REGISTRATION FEES
              </h3>
              
              <ul className="space-y-4">
                <li className="flex justify-between items-start gap-4 border-b border-slate-50 pb-3">
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">{conferenceData.registrationFees.delegate.label}</h4>
                  </div>
                  <strong className="text-indigo-700 font-display font-black text-base">{conferenceData.registrationFees.delegate.fee}</strong>
                </li>
                
                <li className="flex justify-between items-start gap-4 border-b border-slate-50 pb-3">
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">{conferenceData.registrationFees.pgStudent.label}</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">{conferenceData.registrationFees.pgStudent.note}</p>
                  </div>
                  <strong className="text-indigo-700 font-display font-black text-base">{conferenceData.registrationFees.pgStudent.fee}</strong>
                </li>
                
                <li className="flex justify-between items-start gap-4 border-b border-slate-50 pb-3">
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">{conferenceData.registrationFees.seniorCitizen.label}</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">{conferenceData.registrationFees.seniorCitizen.note}</p>
                  </div>
                  <strong className="text-indigo-700 font-display font-black text-sm bg-indigo-50 px-2 py-0.5 rounded-md">{conferenceData.registrationFees.seniorCitizen.fee}</strong>
                </li>

                <li className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">{conferenceData.registrationFees.accompanying.label}</h4>
                  </div>
                  <strong className="text-indigo-700 font-display font-black text-base">{conferenceData.registrationFees.accompanying.fee}</strong>
                </li>
              </ul>

              {/* Special Accomodation Promo Box */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-850 leading-relaxed">
                <div className="flex gap-2 items-start">
                  <FiInfo size={16} className="text-amber-600 shrink-0 mt-0.5" />
                  <p>
                    <strong>Special Accommodation Offer:</strong> {conferenceData.registrationFees.specialOffer}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Form Trigger Button */}
            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={handleRegisterClick}
                className="w-full py-4 bg-indigo-650 hover:bg-indigo-700 text-white font-extrabold text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Open Google Form Registration <FiChevronRight />
              </button>
              <div className="text-center mt-3">
                <a 
                  href={conferenceData.googleFormLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[10px] text-slate-400 hover:underline inline-flex items-center gap-1"
                >
                  Direct Google Form Link <FiExternalLink size={10} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: QR Codes & Payments */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            
            {/* Left Box: Form Register QR */}
            <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 h-full justify-between">
              <div>
                <span className="text-[10px] bg-indigo-100 text-indigo-700 font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  Register Here
                </span>
                <p className="text-[10px] text-slate-450 mt-1 leading-normal">Scan to fill Google Form</p>
              </div>
              <div 
                onClick={() => setActiveModalQr('register')}
                className="p-2.5 bg-white rounded-xl shadow-inner border border-slate-200/60 my-4 flex items-center justify-center cursor-zoom-in hover:scale-[1.03] transition-transform active:scale-[0.97]"
                title="Click to view full screen"
              >
                <QRCodeCanvas
                  value={conferenceData.googleFormLink}
                  size={180}
                  bgColor={"#ffffff"}
                  fgColor={"#1e1b4b"}
                  level={"H"}
                  includeMargin={true}
                />
              </div>
              <button 
                onClick={handleRegisterClick}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg cursor-pointer"
              >
                Register Online
              </button>
            </div>

            {/* Right Box: Pay QR */}
            <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 h-full justify-between">
              <div>
                <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  Scan Here to Pay
                </span>
                <p className="text-[10px] text-slate-450 mt-1 leading-normal">UPI Transfer (BHIM/GPay)</p>
              </div>
              <div 
                onClick={() => setActiveModalQr('payment')}
                className="p-2.5 bg-white rounded-xl shadow-inner border border-slate-200/60 my-4 flex items-center justify-center cursor-zoom-in hover:scale-[1.03] transition-transform active:scale-[0.97]"
                title="Click to view full screen"
              >
                <QRCodeCanvas
                  value={upiPayUrl}
                  size={180}
                  bgColor={"#ffffff"}
                  fgColor={"#047857"}
                  level={"H"}
                  includeMargin={true}
                />
              </div>
              <span className="text-[10px] text-green-700 font-bold bg-green-50 px-2 py-1 rounded">
                UPI ID: {conferenceData.bankDetails.upiId}
              </span>
            </div>

            {/* Bank details bar at the bottom */}
            <div className="sm:col-span-2 pt-4 border-t border-slate-100 space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Bank Account Transfer Details</h4>
              <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <div>
                  <span className="text-slate-400 block text-[9px] uppercase font-semibold">Account Name</span>
                  <strong className="text-slate-800 font-semibold">{conferenceData.bankDetails.accountName}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[9px] uppercase font-semibold">Bank Name</span>
                  <strong className="text-slate-800 font-semibold">{conferenceData.bankDetails.bankName}</strong>
                </div>
                <div className="pt-1.5">
                  <span className="text-slate-400 block text-[9px] uppercase font-semibold">Account Number</span>
                  <strong className="text-slate-800 font-semibold select-all">{conferenceData.bankDetails.accountNumber}</strong>
                </div>
                <div className="pt-1.5">
                  <span className="text-slate-400 block text-[9px] uppercase font-semibold">IFSC Code</span>
                  <strong className="text-slate-800 font-semibold select-all">{conferenceData.bankDetails.ifscCode}</strong>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          5. FAQS & DIRECTIONS MAPS
          ================================================== */}
      <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-slate-200/60 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* MAP */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-display font-bold text-lg text-slate-800 uppercase tracking-tight">
              Venue Location & Directions
            </h3>
            <div className="rounded-2xl overflow-hidden border border-slate-200 h-[280px] shadow-sm">
              <iframe
                src={conferenceData.venue.googleMapsEmbed}
                className="w-full h-full border-none"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Ramada Jamshedpur Map"
              />
            </div>
          </div>

          {/* FAQs */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-display font-bold text-lg text-slate-800 uppercase tracking-tight">
              Registration FAQ
            </h3>
            
            <div className="space-y-3">
              {conferenceData.faqs.slice(0, 3).map((faq, idx) => (
                <div 
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 text-left font-bold text-xs sm:text-sm text-slate-700 focus:outline-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-indigo-600 font-bold ml-2">
                      {activeFaq === idx ? "−" : "+"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-slate-100"
                      >
                        <p className="p-4 text-xs text-slate-500 leading-relaxed bg-slate-50/50">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Fullscreen QR Modal */}
      <AnimatePresence>
        {activeModalQr && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalQr(null)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl border border-slate-100 flex flex-col items-center space-y-4 cursor-default"
            >
              <div className="w-full flex items-center justify-between border-b border-slate-100 pb-3">
                <span className={`text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider ${
                  activeModalQr === 'register' ? 'bg-indigo-100 text-indigo-700' : 'bg-green-100 text-green-700'
                }`}>
                  {activeModalQr === 'register' ? 'Registration Link' : 'UPI Payment Transfer'}
                </span>
                <button
                  onClick={() => setActiveModalQr(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer border-none"
                  title="Close"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-inner flex items-center justify-center my-4">
                <QRCodeCanvas
                  value={activeModalQr === 'register' ? conferenceData.googleFormLink : upiPayUrl}
                  size={260}
                  bgColor={"#ffffff"}
                  fgColor={activeModalQr === 'register' ? "#1e1b4b" : "#047857"}
                  level={"H"}
                  includeMargin={true}
                />
              </div>

              <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                {activeModalQr === 'register' 
                  ? 'Scan with your smartphone camera to open the Google Registration Form.' 
                  : 'Scan with GPay, PhonePe, Paytm, BHIM, or any UPI app to complete your transaction.'
                }
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
