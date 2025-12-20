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
"[project]/app/about/page.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client";
// import Link from "next/link";
// import { motion } from "framer-motion";
// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
//   transition:{ duration: 0.6 }
// };
// const stagger = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2
//     }
//   }
// };
// export default function AboutDocAI() {
//   return (
//     <section className="bg-gradient-to-b from-blue-50 via-white to-green-50 py-16">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
//             About 
//         <Link
//           href="/" className="text-white m-4 hover:text-blue-300 transition duration-300">
//          DOC.<span className="text-blue-400">AI</span>
//         </Link>
//           </h1>
//           <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
//             Doc.AI is an AI-powered healthcare platform designed to assist
//             doctors and patients with early disease prediction, preventive
//             care, and personalized medical insights.
//           </p>
//         </motion.div>
//         {/* What is Doc.AI */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={stagger}
//           className="grid md:grid-cols-2 gap-12 items-center mb-20"
//         >
//           <motion.div variants={fadeUp}>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//               What is Doc.AI?
//             </h2>
//             <p className="text-gray-600 leading-relaxed mb-4">
//               Doc.AI combines artificial intelligence with clinical knowledge
//               to analyze patient symptoms, lab reports, vitals, and medical
//               history.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//               It supports early detection of diabetes, heart disease, and
//               maternal health risks, enabling timely medical intervention.
//             </p>
//           </motion.div>
//           <motion.div
//             variants={fadeUp}
//             className="bg-gray-50 rounded-xl p-8 shadow-sm"
//           >
//             <ul className="space-y-4 text-gray-700">
//               <li>✔ AI-assisted disease prediction</li>
//               <li>✔ Preventive healthcare analytics</li>
//               <li>✔ Personalized treatment insights</li>
//               <li>✔ Secure & ethical data handling</li>
//             </ul>
//           </motion.div>
//         </motion.div>
//         {/* Mission & Vision */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={stagger}
//           className="grid md:grid-cols-2 gap-12 mb-20"
//         >
//           <motion.div
//             variants={fadeUp}
//             className="bg-blue-50 p-8 rounded-xl"
//           >
//             <h3 className="text-xl font-semibold text-blue-800 mb-3">
//               Our Mission
//             </h3>
//             <p className="text-gray-700 leading-relaxed">
//               To make quality healthcare accessible using AI-driven early
//               disease detection and preventive care.
//             </p>
//           </motion.div>
//           <motion.div
//             variants={fadeUp}
//             className="bg-green-50 p-8 rounded-xl"
//           >
//             <h3 className="text-xl font-semibold text-green-800 mb-3">
//               Our Vision
//             </h3>
//             <p className="text-gray-700 leading-relaxed">
//               To transform healthcare by empowering doctors with intelligent
//               clinical decision support systems.
//             </p>
//           </motion.div>
//         </motion.div>
//         {/* How It Works */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={stagger}
//           className="mb-20"
//         >
//           <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
//             How Doc.AI Works
//           </h2>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { title: "Data Collection", desc: "Collects symptoms, reports, and vitals." },
//               { title: "AI Analysis", desc: "ML models analyze health patterns." },
//               { title: "Prediction", desc: "Predicts disease probability." },
//               { title: "Doctor Support", desc: "Assists doctors in decision-making." }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeUp}
//                 className="bg-gray-50 p-6 rounded-xl shadow-sm text-center"
//               >
//                 <h4 className="font-semibold mb-2">{item.title}</h4>
//                 <p className="text-gray-600 text-sm">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//         {/* Ethics */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           transition={{ duration: 0.7 }}
//           className="bg-gray-900 text-white rounded-2xl p-10 text-center"
//         >
//           <h2 className="text-2xl font-semibold mb-4">
//             Ethical & Responsible AI
//           </h2>
//           <p className="text-gray-300 max-w-3xl mx-auto">
//             Doc.AI follows ethical AI practices, ensuring transparency,
//             fairness, and data privacy while assisting—not replacing—
//             medical professionals.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
}),
"[project]/app/about/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/about/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__749194e6._.js.map