
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
              About MEDIFLO
            </span>

            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Making Healthcare <br /> Clear, Calm & Intelligent
            </h1>

            <p className="text-gray-600 text-lg mb-4">
              MEDIFLO was created to help patients understand their health
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

     
      <section className="py-20 bg-white">
  
   <section className="py-28 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-6">
      How MEDIFLO Thinks
    </h2>

    <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-16">
      MEDIFLO follows a structured, doctor-friendly intelligence pipeline
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
              MEDIFLO is designed to support patients with early insights,
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
