// // "use client";
// // import Link from "next/link";
// // import { motion } from "framer-motion";

// // const fadeUp = {
// //   hidden: { opacity: 0, y: 40 },
// //   visible: { opacity: 1, y: 0 },
// //   transition:{ duration: 0.6 }
// // };

// // const stagger = {
// //   hidden: {},
// //   visible: {
// //     transition: {
// //       staggerChildren: 0.2
// //     }
// //   }
// // };

// // export default function AboutDocAI() {
// //   return (
// //     <section className="bg-gradient-to-b from-blue-50 via-white to-green-50 py-16">
// //       <div className="max-w-7xl mx-auto px-6">

// //         {/* Header */}
// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={fadeUp}
// //           transition={{ duration: 0.6 }}
// //           className="text-center mb-16"
// //         >
// //           <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
// //             About 
// //         <Link
// //           href="/" className="text-white m-4 hover:text-blue-300 transition duration-300">
        
         
// //          DOC.<span className="text-blue-400">AI</span>
// //         </Link>
        

// //           </h1>
// //           <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
// //             Doc.AI is an AI-powered healthcare platform designed to assist
// //             doctors and patients with early disease prediction, preventive
// //             care, and personalized medical insights.
// //           </p>
// //         </motion.div>

// //         {/* What is Doc.AI */}
// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={stagger}
// //           className="grid md:grid-cols-2 gap-12 items-center mb-20"
// //         >
// //           <motion.div variants={fadeUp}>
// //             <h2 className="text-2xl font-semibold text-gray-800 mb-4">
// //               What is Doc.AI?
// //             </h2>
// //             <p className="text-gray-600 leading-relaxed mb-4">
// //               Doc.AI combines artificial intelligence with clinical knowledge
// //               to analyze patient symptoms, lab reports, vitals, and medical
// //               history.
// //             </p>
// //             <p className="text-gray-600 leading-relaxed">
// //               It supports early detection of diabetes, heart disease, and
// //               maternal health risks, enabling timely medical intervention.
// //             </p>
// //           </motion.div>

// //           <motion.div
// //             variants={fadeUp}
// //             className="bg-gray-50 rounded-xl p-8 shadow-sm"
// //           >
// //             <ul className="space-y-4 text-gray-700">
// //               <li>✔ AI-assisted disease prediction</li>
// //               <li>✔ Preventive healthcare analytics</li>
// //               <li>✔ Personalized treatment insights</li>
// //               <li>✔ Secure & ethical data handling</li>
// //             </ul>
// //           </motion.div>
// //         </motion.div>

// //         {/* Mission & Vision */}
// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={stagger}
// //           className="grid md:grid-cols-2 gap-12 mb-20"
// //         >
// //           <motion.div
// //             variants={fadeUp}
// //             className="bg-blue-50 p-8 rounded-xl"
// //           >
// //             <h3 className="text-xl font-semibold text-blue-800 mb-3">
// //               Our Mission
// //             </h3>
// //             <p className="text-gray-700 leading-relaxed">
// //               To make quality healthcare accessible using AI-driven early
// //               disease detection and preventive care.
// //             </p>
// //           </motion.div>

// //           <motion.div
// //             variants={fadeUp}
// //             className="bg-green-50 p-8 rounded-xl"
// //           >
// //             <h3 className="text-xl font-semibold text-green-800 mb-3">
// //               Our Vision
// //             </h3>
// //             <p className="text-gray-700 leading-relaxed">
// //               To transform healthcare by empowering doctors with intelligent
// //               clinical decision support systems.
// //             </p>
// //           </motion.div>
// //         </motion.div>

// //         {/* How It Works */}
// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={stagger}
// //           className="mb-20"
// //         >
// //           <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
// //             How Doc.AI Works
// //           </h2>

// //           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {[
// //               { title: "Data Collection", desc: "Collects symptoms, reports, and vitals." },
// //               { title: "AI Analysis", desc: "ML models analyze health patterns." },
// //               { title: "Prediction", desc: "Predicts disease probability." },
// //               { title: "Doctor Support", desc: "Assists doctors in decision-making." }
// //             ].map((item, index) => (
// //               <motion.div
// //                 key={index}
// //                 variants={fadeUp}
// //                 className="bg-gray-50 p-6 rounded-xl shadow-sm text-center"
// //               >
// //                 <h4 className="font-semibold mb-2">{item.title}</h4>
// //                 <p className="text-gray-600 text-sm">{item.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.div>

// //         {/* Ethics */}
// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={fadeUp}
// //           transition={{ duration: 0.7 }}
// //           className="bg-gray-900 text-white rounded-2xl p-10 text-center"
// //         >
// //           <h2 className="text-2xl font-semibold mb-4">
// //             Ethical & Responsible AI
// //           </h2>
// //           <p className="text-gray-300 max-w-3xl mx-auto">
// //             Doc.AI follows ethical AI practices, ensuring transparency,
// //             fairness, and data privacy while assisting—not replacing—
// //             medical professionals.
// //           </p>
// //         </motion.div>

// //       </div>
// //     </section>
// //   );
// // }



"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import AI from "./Book with bookmark.json"
import AII from "./Doctor, Medical, Surgeon, Healthcare Animation.json"
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

// export default function DocAIPage() {
//   return (
//     <main className="bg-gradient-to-b from-blue-50 via-white to-green-50">

//       {/* ================= HERO ================= */}
//       <section className="h-125px flex items-center justify-center px-6">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fadeUp}
//           transition={{ duration: 0.8 }}
//           className="text-center max-w-4xl"
//         >
//           <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
//             Smarter Healthcare with{" "}
//             <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
//               DOC.AI
//             </span>
//           </h1>
//           <p className="mt-6 text-lg text-gray-600">
//             AI-powered disease prediction, preventive care, and
//             intelligent doctor assistance.
//           </p>

//           <div className="mt-8 flex justify-center gap-4">
//             <a href="#about" className="px-6 py-3 bg-blue-600 text-white rounded-xl">
//               Learn More
//             </a>
//             <a href="#ethics" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl">
//               Ethics
//             </a>
//           </div>
//         </motion.div>
//       </section>
//       {/* ===== AII  LOTTIE ABOVE ABOUT ===== */}


//       {/* ================= ABOUT ================= */}
//       <section id="about" className="py-24 px-6">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={stagger}
//           className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
//         >
// <section className="flex justify-center ">
//   <Lottie
//     animationData={AII}
//     className="w-72 h-72 md:w-80 md:h-80"
//   />
// </section>
//           <motion.div variants={fadeUp}>
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">
//               About Doc.AI
//             </h2>
//             <p className="text-gray-600 mb-4 leading-relaxed">
//               Doc.AI was created to bridge the gap between massive medical data
//               and timely clinical decisions. It uses artificial intelligence
//               to analyze symptoms, reports, and vitals.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//               Our goal is not to replace doctors, but to empower them with
//               early predictions and intelligent insights.
//             </p>
//           </motion.div>

//           <motion.div
//             variants={fadeUp}
//             className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8"
//           >
//            <div className="flex flex-col md:flex-row items-center gap-8">
  
//   {/* Lottie Animation */}
//   {/* <Lottie
//     animationData={AI}
//     className="w-64 h-64 md:w-80 md:h-80"
//   /> */}

//   {/* Feature List */}
//   <ul className="space-y-4 text-gray-700 text-sm">
//     <li className="flex items-center gap-2">✔ Early disease prediction</li>
//     <li className="flex items-center gap-2">✔ Preventive & personalized care</li>
//     <li className="flex items-center gap-2">✔ Doctor-first AI approach</li>
//     <li className="flex items-center gap-2">✔ Secure medical data handling</li>
//   </ul>

// </div>

//           </motion.div>
//         </motion.div>
//       </section>

//       {/* ================= WHY DOC.AI ================= */}
//       <section className="py-24 bg-white px-6">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={stagger}
//           className="max-w-6xl mx-auto"
//         >
//           <h2 className="text-3xl font-bold text-center mb-14">
//             Why Choose Doc.AI?
//           </h2>

//           <div className="grid md:grid-cols-3 gap-10">
//             {[
//               "Detects risks before symptoms worsen",
//               "Assists doctors with clinical insights",
//               "Reduces diagnostic delay",
//             ].map((text, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeUp}
//                 className="p-8 rounded-xl shadow-lg text-center hover:scale-105 transition"
//               >
//                 <p className="font-medium text-gray-700">{text}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* ================= STATS ================= */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white">
//         <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
//           {[
//             ["95%", "Prediction Accuracy"],
//             ["10+", "Disease Models"],
//             ["24/7", "AI Monitoring"],
//             ["100%", "Data Privacy"],
//           ].map(([value, label], i) => (
//             <div key={i}>
//               <h3 className="text-4xl font-bold">{value}</h3>
//               <p className="text-sm mt-2">{label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= HOW IT WORKS ================= */}
//       <section className="py-24 px-6">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={stagger}
//           className="max-w-7xl mx-auto"
//         >
//           <h2 className="text-3xl font-bold text-center mb-16">
//             How Doc.AI Works
//           </h2>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               "Secure Data Collection",
//               "AI Pattern Analysis",
//               "Early Risk Prediction",
//               "Doctor Decision Support",
//             ].map((step, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeUp}
//                 className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-md text-center"
//               >
//                 <p className="font-medium text-gray-700">{step}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* ================= AI + DOCTOR ROLE ================= */}
//       <section className="py-24 bg-gray-50 px-6">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-6">
//             AI That Assists, Not Replaces
//           </h2>
//           <p className="text-gray-600 leading-relaxed">
//             Doc.AI provides predictive insights and data-driven recommendations.
//             Final diagnosis and treatment decisions are always made by
//             qualified medical professionals.
//           </p>
//         </div>
//       </section>

//       {/* ================= ETHICS ================= */}
//       <section id="ethics" className="py-24 px-6">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           transition={{ duration: 0.7 }}
//           className="max-w-6xl mx-auto bg-gray-900 text-white rounded-3xl p-12 text-center"
//         >
//           <h2 className="text-3xl font-bold mb-4">
//             Ethical & Responsible AI
//           </h2>
//           <p className="text-gray-300 max-w-3xl mx-auto">
//             Built with transparency, fairness, and strict data privacy —
//             Doc.AI follows responsible AI principles in healthcare.
//           </p>
//         </motion.div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="py-24 text-center px-6">
//         <h2 className="text-3xl font-bold mb-6">
//           Ready for Smarter Healthcare?
//         </h2>
//         <Link
//           href="/contact"
//           className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
//         >
//           Contact Us
//         </Link>
//       </section>

//     </main>

// );
// }

export default function AboutDocAI() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      {/* ================= ABOUT HERO ================= */}
      <section className="py-28 bg-gradient-to-br from-blue-50 to-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block mb-4 px-4 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
              About Doc.AI
            </span>

            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Making Healthcare <br /> Clear, Calm & Intelligent
            </h1>

            <p className="text-gray-600 text-lg mb-4">
              Doc.AI was created to help patients understand their health
              better and support doctors with meaningful insights —
              without replacing human judgment.
            </p>

            <p className="text-gray-600 text-lg">
              We believe technology should reduce anxiety, not create it.
            </p>
          </motion.div>

          {/* LOTTIE 1 – Vision / Intelligence */}
          <motion.div variants={fadeUp} className="flex justify-center">
             <Lottie
              animationData={AII}
              className="w-72 h-72 md:w-80 md:h-80"
              loop
            />
            
          </motion.div>
        </motion.div>
      </section>

      {/* ================= WHY DOC.AI ================= */}
      {/* <section className="py-28 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-6">
            Why Doc.AI Exists
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-600 text-lg max-w-3xl mx-auto">
            Many patients feel confused or anxious after receiving lab reports
            or medical results. Doc.AI exists to bridge the gap between
            complex medical data and human understanding.
          </motion.p>
        </motion.div>
      </section> */}
      <section className="py-20 bg-white">
  
   <section className="py-28 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-6">
      How Doc.AI Thinks
    </h2>

    <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-16">
      Doc.AI follows a structured, doctor-friendly intelligence pipeline
      to analyze health data responsibly and meaningfully.
    </p>

    <div className="grid md:grid-cols-5 gap-6 text-sm">
      {[
        ["📥", "Data Input", "Lab reports & vitals"],
        ["🧹", "Preprocessing", "Cleaning & normalization"],
        ["🧠", "AI Analysis", "Pattern & risk detection"],
        ["📊", "Insight Generation", "Trends & explanations"],
        ["👨‍⚕️", "Doctor Review", "Final medical decision"],
      ].map(([icon, title, desc], i) => (
        <div
          key={i}
          className="p-6 bg-blue-50 rounded-xl shadow"
        >
          <div className="text-3xl mb-3">{icon}</div>
          <h4 className="font-semibold mb-1">{title}</h4>
          <p className="text-gray-600">{desc}</p>
        </div>
      ))}
    </div>

    <p className="text-xs text-gray-500 mt-10">
      AI assists in analysis — medical authority always remains with doctors.
    </p>
  </div>
</section>
</section>


      {/* ================= PATIENT + DOCTOR BALANCE ================= */}
      <section className="py-28 bg-blue-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center"
        >

          {/* LOTTIE 2 – Care & Support */}
          <motion.div variants={fadeUp} className="flex justify-center">
           <Lottie
              animationData={AI}
              className="w-64 h-64 md:w-80 md:h-80"
              loop
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="text-4xl font-bold mb-6">
              Patient-First. Doctor-Guided.
            </h2>

            <p className="text-gray-600 text-lg mb-4">
              Doc.AI is designed to support patients with early insights,
              simplified explanations, and continuous health awareness.
            </p>

            <p className="text-gray-600 text-lg mb-6">
              At the same time, we strongly believe that medical decisions
              should always remain in the hands of qualified doctors.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl shadow">
                <h4 className="font-semibold mb-2">For Patients</h4>
                <p className="text-sm text-gray-600">
                  Clear reports, early alerts, peace of mind.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow">
                <h4 className="font-semibold mb-2">For Doctors</h4>
                <p className="text-sm text-gray-600">
                  Decision support, not replacement.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Core Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-blue-50 rounded-2xl">
              🛡️ <h4 className="font-semibold mt-4">Privacy & Trust</h4>
              <p className="text-sm text-gray-600 mt-2">
                Patient data is protected and respected.
              </p>
            </div>

            <div className="p-8 bg-blue-50 rounded-2xl">
              👨‍⚕️ <h4 className="font-semibold mt-4">Doctor First</h4>
              <p className="text-sm text-gray-600 mt-2">
                AI assists, doctors decide.
              </p>
            </div>

            <div className="p-8 bg-blue-50 rounded-2xl">
              ❤️ <h4 className="font-semibold mt-4">Human-Centric Care</h4>
              <p className="text-sm text-gray-600 mt-2">
                Technology that feels supportive, not overwhelming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLOSING ================= */}
      {/* <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Doc.AI is Not Just Technology.
          </h2>
          <p className="text-lg text-blue-100">
            It’s a step toward more understandable, accessible, and
            compassionate healthcare.
          </p>
        </div>
      </section> */}

      <section className="py-28 bg-blue-50">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12">
      Datasets & Medical References
    </h2>

    <div className="overflow-x-auto bg-white rounded-2xl shadow">
      <table className="w-full text-sm">
        <thead className="bg-blue-100 text-left">
          <tr>
            <th className="p-4">Dataset / Source</th>
            <th className="p-4">Health Focus</th>
            <th className="p-4">Usage in Doc.AI</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-4">PIMA Indians Diabetes</td>
            <td className="p-4">Diabetes Prediction</td>
            <td className="p-4">Risk pattern inspiration</td>
          </tr>
          <tr className="border-t">
            <td className="p-4">UCI Heart Disease</td>
            <td className="p-4">Cardiac Risk</td>
            <td className="p-4">Early warning indicators</td>
          </tr>
          <tr className="border-t">
            <td className="p-4">Blood Test Reference Ranges</td>
            <td className="p-4">Lab Interpretation</td>
            <td className="p-4">Normal vs abnormal analysis</td>
          </tr>
          <tr className="border-t">
            <td className="p-4">Synthetic EHR Samples</td>
            <td className="p-4">Patient History</td>
            <td className="p-4">Trend & timeline tracking</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-center text-xs text-gray-500 mt-8">
      All datasets referenced are public, anonymized, or synthetic.
      No real patient data is used without consent.
    </p>
  </div>
 

</section>


    </main>
  );
}

