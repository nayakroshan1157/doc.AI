"use client"
import React from "react";

import Image from "next/image";
import Lottie from "lottie-react";
import AI from "./AI bot.json"
export default function Home() {
  return (
    <div className=" text-slate-800">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Intelligent Healthcare <span className="text-indigo-600">Powered by AI</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Doc.AI blends clinical expertise with data science to deliver ethical,
            patient-first solutions for modern healthcare.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 rounded-2xl bg-indigo-600 text-white shadow hover:bg-indigo-700">
              For Doctors
            </button>
            <button className="px-6 py-3 rounded-2xl border border-slate-300 hover:border-indigo-600">
              For Patients
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="h-80 w-full rounded-3xl bg-slate-400 shadow-inner flex items-center justify-between">
            <span className="text-indigo-600 font-semibold pl-2">AI + Healthcare Illustration</span>
            <div className="flex justify-center ml-40 pt-1">
        <Lottie
          animationData={AI}
          className="w-80 h-80 md:w-56 md:h-56"
        />
     </div>
          </div>
        </div>
      </section>
      {/* Doctors Section */}
      <section id="doctors" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">For Doctors</h2>
          <p className="text-center text-slate-600 mt-4 max-w-2xl mx-auto">
            Tools designed to support clinical decisions, reduce workload,
            and improve patient outcomes.
          </p>


          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-semibold text-lg">AI Diagnosis Support</h3>
              <p className="mt-2 text-sm text-slate-600">
                Data-driven insights to assist in faster and accurate diagnosis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-semibold text-lg">Clinical Reports Analysis</h3>
              <p className="mt-2 text-sm text-slate-600">
                Smart interpretation of lab reports and patient history.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-semibold text-lg">Workflow Automation</h3>
              <p className="mt-2 text-sm text-slate-600">
                Reduce paperwork and focus more on patient care.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Patients Section */}
      <section id="patients" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">For Patients</h2>
          <p className="text-center text-slate-600 mt-4 max-w-2xl mx-auto">
            Simple, secure, and intelligent tools to help patients understand
            and manage their health.
          </p>


          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-semibold text-lg">Health Report Insights</h3>
              <p className="mt-2 text-sm text-slate-600">
                Easy-to-understand explanations of medical reports.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-semibold text-lg">Early Risk Prediction</h3>
              <p className="mt-2 text-sm text-slate-600">
                AI-driven alerts for potential future health risks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-semibold text-lg">Doctor Consultation</h3>
              <p className="mt-2 text-sm text-slate-600">
                Seamless connection with trusted healthcare professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
      

</div>
   








  );
}
