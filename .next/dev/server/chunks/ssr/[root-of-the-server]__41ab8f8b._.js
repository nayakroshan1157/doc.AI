module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/app/consultation/page.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
// import emailjs from "@emailjs/browser";
// const BookAppointment = () => {
//   const { data: session } = useSession();
//   const router = useRouter();
//   // 1. Component States
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedSlot, setSelectedSlot] = useState("");
//   const [email, setEmail] = useState(""); 
//   const [mode, setMode] = useState("Virtual");
//   const [loading, setLoading] = useState(false);
//   // Sync email when session loads
//   useEffect(() => {
//     if (session?.user?.email) setEmail(session.user.email);
//   }, [session]);
//   const timeSlots = ["09:00 AM", "10:30 AM", "12:00 PM", "02:00 PM", "03:30 PM", "05:00 PM"];
//   // 2. Submission Handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!selectedDate || !selectedSlot || !email) {
//       alert("Please complete all protocol fields.");
//       return;
//     }
//     setLoading(true);
//     try {
//       // STEP 1: Save to MongoDB (Axios call)
//       const res = await axios.post('http://localhost:5000/consultation', { 
//         patientId: session?.user?.id,
//         patientEmail: email,
//         doctorName: "Dr. Sarah Chen",
//         date: selectedDate, 
//         slot: selectedSlot, 
//         mode: mode 
//       });
//       // STEP 2: Prepare All Information for EmailJS Dispatch
//      const templateParams = {
//   to_name: session?.user?.name || "Valued Patient",
//   to_email: email,
//   booking_id: res.data.bookingId,
//   patient_id: session?.user?.id || "GUEST_ID",
//   doctor_name: "Dr. Sarah Chen",
//   date: selectedDate,
//   slot: selectedSlot,
//   mode: mode,
//   status: "Confirmed",
//   location_detail: mode === "Virtual" 
//     ? "Secure Neural Video Link" 
//     : "MEDIFLO neuro-Center, Level 4",
//   // FORCE THE MESSAGE STRING HERE
//   message: `Protocol Mode: ${mode}. Please ${mode === "Virtual" ? "check your internet" : "arrive 15 mins early"}.`
// };
//       // STEP 3: Dispatch via EmailJS
//       await emailjs.send(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
//         templateParams,
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
//       );
//       alert("Full Protocol Synchronized. Email dispatched to " + email);
//       router.push('/'); 
//     } catch (error) {
//       console.error("System Dispatch Error:", error);
//       alert("Booking saved but email dispatch failed. Error: " + (error.text || "Connection Fault"));
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div className="min-h-screen bg-[#020617] text-white pt-28 pb-12 px-4 relative">
//       {/* Background Decor */}
//       <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
//         <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
//         <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px]"></div>
//       </div>
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
//         {/* Left Column: Doctor Profile */}
//         <div className="lg:col-span-5">
//           <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sticky top-28">
//             <div className="relative w-24 h-24 mb-6">
//               <Image 
//                 src="/doctor-placeholder.png" 
//                 alt="Doctor" width={96} height={96}
//                 className="rounded-2xl border-2 border-blue-500/50"
//               />
//               <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-4 border-[#020617]"></div>
//             </div>
//             <h1 className="text-3xl font-black italic uppercase tracking-tight">
//               Dr. Sarah <span className="text-blue-400 not-italic">Chen</span>
//             </h1>
//             <p className="text-teal-400 font-bold text-xs uppercase tracking-widest mt-2">Senior Neuro-Specialist</p>
//           </div>
//         </div>
//         {/* Right Column: Booking Interface */}
//         <div className="lg:col-span-7">
//           <form onSubmit={handleSubmit} className="bg-black/40 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 space-y-6 shadow-2xl">
//             <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
//               <span className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-sm">01</span>
//               Appointment Protocol
//             </h2>
//             {/* Email Field */}
//             <div className="space-y-2">
//               <label className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Email for Dispatch</label>
//               <input 
//                 type="email" 
//                 value={email} 
//                 required 
//                 className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all" 
//                 onChange={(e) => setEmail(e.target.value)} 
//               />
//             </div>
//             {/* Date Picker */}
//             <div className="space-y-2">
//               <label className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Protocol Date</label>
//               <input 
//                 type="date" 
//                 required 
//                 className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all text-white" 
//                 onChange={(e) => setSelectedDate(e.target.value)} 
//               />
//             </div>
//             {/* Time Grid */}
//             <div className="space-y-2">
//               <label className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Time Nodes</label>
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                 {timeSlots.map(s => (
//                   <button 
//                     key={s} 
//                     type="button" 
//                     onClick={() => setSelectedSlot(s)} 
//                     className={`py-3 rounded-xl border text-xs font-bold transition-all ${
//                       selectedSlot === s 
//                       ? "bg-blue-600 border-blue-400 shadow-lg shadow-blue-600/20" 
//                       : "bg-white/5 border-white/10 hover:border-white/30"
//                     }`}
//                   >
//                     {s}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             {/* Mode Selection */}
//             <div className="grid grid-cols-2 gap-4">
//               <div 
//                 onClick={() => setMode("Virtual")} 
//                 className={`p-4 rounded-2xl border cursor-pointer text-center transition-all ${mode === 'Virtual' ? 'bg-teal-500/10 border-teal-500' : 'bg-white/5 border-white/10'}`}
//               >
//                 <span className="block text-xl mb-1">💻</span>
//                 <span className="text-[10px] uppercase font-black">Virtual</span>
//               </div>
//               <div 
//                 onClick={() => setMode("In-Person")} 
//                 className={`p-4 rounded-2xl border cursor-pointer text-center transition-all ${mode === 'In-Person' ? 'bg-teal-500/10 border-teal-500' : 'bg-white/5 border-white/10'}`}
//               >
//                 <span className="block text-xl mb-1">🏥</span>
//                 <span className="text-[10px] uppercase font-black">In-Person</span>
//               </div>
//             </div>
//             {/* Submit */}
//             <button 
//               type="submit" 
//               disabled={loading} 
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-500 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
//             >
//               {loading ? "Synchronizing Grid..." : "Confirm Appointment"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default BookAppointment;
}),
"[project]/app/consultation/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/consultation/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__41ab8f8b._.js.map