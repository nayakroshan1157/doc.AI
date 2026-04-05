module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/consultation/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import axios from "axios"; // Ensure axios is installed
// import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
// const BookAppointment = () => {
//   const { data: session } = useSession();
//   // 1. Component States
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedSlot, setSelectedSlot] = useState("");
//   const [mode, setMode] = useState("Virtual"); // Default mode
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const timeSlots = [
//     "09:00 AM", "10:30 AM", "12:00 PM", 
//     "02:00 PM", "03:30 PM", "05:00 PM"
//   ];
//   // 2. Submission Handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Basic Validation
//     if (!selectedDate || !selectedSlot) {
//       alert("Please select both a date and a time slot.");
//       return;
//     }
//     setLoading(true);
//     try {
//       // Submit to your backend (update URL to your actual API endpoint)
//       const result = await axios.post('http://localhost:5000/consultation', { 
//         patientId: session.user.id, // <--- Add this line
//         doctorName: "Dr. Sarah Chen",
//         date: selectedDate, 
//         slot: selectedSlot, 
//         mode: mode 
//       });
//       console.log("Booking Successful:", result.data);
//       alert("Booking successful");
//       // Redirect to a success page or dashboard
//       router.push('/'); 
//     } catch (error) {
//       console.error("Booking Error:", error.response?.data || error.message);
//       alert("Scheduling failed. This time node might be occupied.");
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div className="min-h-screen bg-[#020617] text-white pt-28 pb-12 px-4">
//       <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
//         <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
//         <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px]"></div>
//       </div>
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
//         {/* LEFT COLUMN (Doctor Info - remains same) */}
//         <div className="lg:col-span-5 space-y-6">
//           <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sticky top-28">
//             <div className="relative w-24 h-24 mb-6">
//               <Image 
//                 src="/doctor-placeholder.png"
//                 alt="Doctor" width={96} height={96}
//                 className="rounded-2xl object-cover border-2 border-blue-500/50"
//               />
//               <div className="absolute -bottom-2 -right-2 bg-green-500 w-5 h-5 rounded-full border-4 border-[#020617] animate-pulse"></div>
//             </div>
//             <h1 className="text-3xl font-black tracking-tight italic uppercase">
//               Dr. Sarah <span className="text-blue-400 not-italic">Chen</span>
//             </h1>
//             <p className="text-teal-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Senior Neuro-Specialist</p>
//             <div className="mt-8 p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-[11px] text-gray-400 italic">
//               "AI Pre-screening synchronization active."
//             </div>
//           </div>
//         </div>
//         {/* RIGHT COLUMN: BOOKING INTERFACE */}
//         <div className="lg:col-span-7 space-y-6">
//           <div className="bg-black/40 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 shadow-2xl">
//             <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
//               <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm">01</span>
//               Configure Appointment
//             </h2>
//             {/* Added onSubmit handler */}
//             <form onSubmit={handleSubmit} className="space-y-8">
//               <div className="space-y-3">
//                 <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Select Protocol Date</label>
//                 <input 
//                   type="date" 
//                   required
//                   className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
//                   onChange={(e) => setSelectedDate(e.target.value)}
//                 />
//               </div>
//               <div className="space-y-3">
//                 <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Available Time Nodes</label>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                   {timeSlots.map((slot) => (
//                     <button
//                       key={slot}
//                       type="button"
//                       onClick={() => setSelectedSlot(slot)}
//                       className={`py-3 rounded-xl border text-sm font-bold transition-all duration-300 ${
//                         selectedSlot === slot 
//                         ? "bg-blue-600 border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.4)] text-white" 
//                         : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30"
//                       }`}
//                     >
//                       {slot}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//               <div className="space-y-3">
//                 <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Consultation Mode</label>
//                 <div className="flex gap-4">
//                   {/* Virtual Option */}
//                   <label className="flex-1 cursor-pointer">
//                     <input type="radio" name="mode" className="hidden peer" checked={mode === "Virtual"} onChange={() => setMode("Virtual")} />
//                     <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center peer-checked:border-teal-500 peer-checked:bg-teal-500/10 transition-all">
//                       <p className="text-lg mb-1">💻</p>
//                       <p className="text-[11px] font-bold uppercase">Virtual</p>
//                     </div>
//                   </label>
//                   {/* In-Person Option */}
//                   <label className="flex-1 cursor-pointer">
//                     <input type="radio" name="mode" className="hidden peer" checked={mode === "In-Person"} onChange={() => setMode("In-Person")} />
//                     <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center peer-checked:border-teal-500 peer-checked:bg-teal-500/10 transition-all">
//                       <p className="text-lg mb-1">🏥</p>
//                       <p className="text-[11px] font-bold uppercase">In-Person</p>
//                     </div>
//                   </label>
//                 </div>
//               </div>
//               <div className="pt-6">
//                 <button 
//                   type="submit"
//                   disabled={!selectedDate || !selectedSlot || loading}
//                   className="w-full bg-gradient-to-r from-blue-600 to-blue-500 py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_10px_40px_rgba(37,99,235,0.5)] transition-all disabled:opacity-30 disabled:cursor-not-allowed flex justify-center items-center"
//                 >
//                   {loading ? (
//                     <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                   ) : (
//                     "Confirm Appointment"
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default BookAppointment;
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
;
;
;
const BookAppointment = ()=>{
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // States
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedSlot, setSelectedSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Virtual");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (session?.user?.email) setEmail(session.user.email);
    }, [
        session
    ]);
    const timeSlots = [
        "09:00 AM",
        "10:30 AM",
        "12:00 PM",
        "02:00 PM",
        "03:30 PM",
        "05:00 PM"
    ];
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!selectedDate || !selectedSlot || !email) {
            alert("Please complete all protocol fields.");
            return;
        }
        setLoading(true);
    // try {
    //   // STEP 1: Save to MongoDB
    //   const res = await axios.post('http://localhost:5000/consultation', { 
    //     patientId: session?.user?.id,
    //     patientEmail: email,
    //     doctorName: "Dr. Sarah Chen",
    //     date: selectedDate, 
    //     slot: selectedSlot, 
    //     mode: mode 
    //   });
    //   // STEP 2: Trigger EmailJS
    //   const templateParams = {
    //     to_name: session?.user?.name || "Patient",
    //     to_email: email,
    //     booking_id: res.data.bookingId,
    //     date: selectedDate,
    //     slot: selectedSlot,
    //     location: mode === "Virtual" ? "Secure Virtual Link" : "MEDIFLO Neuro-Center",
    //   };
    //   await emailjs.send(
    //     process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    //     process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    //     templateParams,
    //     process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    //   );
    //   alert("Booking Confirmed & Email Dispatched!");
    //   router.push('/'); 
    // } catch (error) {
    //   console.error("Process Error:", error);
    //   alert("System Error: Check console for 412 or 500 codes.");
    // } finally {
    //   setLoading(false);
    // }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#020617] text-white pt-28 pb-12 px-4 relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 border border-white/10 rounded-3xl p-8 sticky top-28",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-black italic uppercase",
                                children: [
                                    "Dr. Sarah ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-400",
                                        children: "Chen"
                                    }, void 0, false, {
                                        fileName: "[project]/app/consultation/page.js",
                                        lineNumber: 256,
                                        columnNumber: 76
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/consultation/page.js",
                                lineNumber: 256,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-teal-400 font-bold text-xs tracking-widest mt-2 uppercase",
                                children: "Neuro-Specialist"
                            }, void 0, false, {
                                fileName: "[project]/app/consultation/page.js",
                                lineNumber: 257,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/consultation/page.js",
                        lineNumber: 255,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/consultation/page.js",
                    lineNumber: 254,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-7",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "bg-black/40 border border-white/10 rounded-3xl p-8 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-gray-500 uppercase",
                                        children: "Patient Email"
                                    }, void 0, false, {
                                        fileName: "[project]/app/consultation/page.js",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        value: email,
                                        required: true,
                                        className: "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 mt-2",
                                        onChange: (e)=>setEmail(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/app/consultation/page.js",
                                        lineNumber: 266,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/consultation/page.js",
                                lineNumber: 264,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-gray-500 uppercase",
                                        children: "Select Date"
                                    }, void 0, false, {
                                        fileName: "[project]/app/consultation/page.js",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        required: true,
                                        className: "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 mt-2",
                                        onChange: (e)=>setSelectedDate(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/app/consultation/page.js",
                                        lineNumber: 270,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/consultation/page.js",
                                lineNumber: 268,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-3",
                                children: timeSlots.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setSelectedSlot(s),
                                        className: `py-3 rounded-xl border text-xs font-bold ${selectedSlot === s ? "bg-blue-600 border-blue-400" : "bg-white/5 border-white/10"}`,
                                        children: s
                                    }, s, false, {
                                        fileName: "[project]/app/consultation/page.js",
                                        lineNumber: 274,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/app/consultation/page.js",
                                lineNumber: 272,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: loading,
                                className: "w-full bg-blue-600 py-4 rounded-2xl font-black uppercase tracking-widest",
                                children: loading ? "Synchronizing..." : "Confirm Appointment"
                            }, void 0, false, {
                                fileName: "[project]/app/consultation/page.js",
                                lineNumber: 277,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/consultation/page.js",
                        lineNumber: 263,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/consultation/page.js",
                    lineNumber: 262,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/consultation/page.js",
            lineNumber: 252,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/consultation/page.js",
        lineNumber: 251,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BookAppointment;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f5ed151b._.js.map