"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Lottie from "lottie-react";
import AI from "./AI Robot.json"
const profile = () => {
   const { data: session } = useSession()
      if (!session) {  
         const router = useRouter()
         router.push('/login')
      }
  return (
  <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen flex items-center justify-center p-4">
  
  {/* <!-- Profile Card --> */}
  <div className="bg-white shadow-2xl rounded-3xl max-w-5xl w-full overflow-hidden">

    {/* <!-- Top Gradient Header --> */}
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 h-48">
      
      {/* <!-- Profile Image --> */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
        <img
          src="https://via.placeholder.com/150"
          alt=""
          className="w-36 h-36 rounded-full border-4 border-white shadow-lg"
        />
      </div>

      {/* <!-- AI Badge --> */}
       <div className="absolute top-6 right-6 px-4 py-1">
      <span className=" text-sm font-semibold rounded-full bg-white/90 text-blue-600">
        🤖 AI Verified Doctor
        </span>
        <Lottie
          animationData={AI}
          className="w-100 h-100 md:w-80 md:h-80"
        />
     </div>
    </div>

    {/* <!-- Content --> */}
    <div className="pt-20 px-8 pb-8">

      {/* <!-- Name & Rating --> */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Dr. Vikramaditya Dash
        </h1>
        <p className="text-blue-600 font-medium">
          Endocrinologist • MD • AI Health Specialist
        </p>

        {/* <!-- Rating --> */}
        <div className="flex justify-center items-center gap-2 mt-2 text-yellow-500">
          ⭐ ⭐ ⭐ ⭐ ⭐
          <span className="text-gray-600 text-sm">(4.9 / 5 • 2.1k reviews)</span>
        </div>

        {/* <!-- Status --> */}
        <div className="mt-4">
          <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-700">
            ● Available Now
          </span>
        </div>
         
      </div>

      {/* <!-- About --> */}
      <p className="mt-6 text-center text-gray-600 max-w-3xl mx-auto">
      10+ years of expertise in endocrinology enhanced by AI-driven diagnostics.
      Dedicated to early disease prediction and personalized hormonal care
      </p>

      {/* <!-- Stats --> */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-blue-50 rounded-xl p-4">
          <p className="text-2xl font-bold text-blue-600">10+</p>
          <p className="text-sm text-gray-600">Years Experience</p>
        </div>
        <div className="bg-green-50 rounded-xl p-4">
          <p className="text-2xl font-bold text-green-600">15k+</p>
          <p className="text-sm text-gray-600">Patients Treated</p>
        </div>
        <div className="bg-purple-50 rounded-xl p-4">
          <p className="text-2xl font-bold text-purple-600">92%</p>
          <p className="text-sm text-gray-600">AI Accuracy</p>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4">
          <p className="text-2xl font-bold text-yellow-600">4.9★</p>
          <p className="text-sm text-gray-600">Patient Rating</p>
        </div>
      </div>

      {/* <!-- Details --> */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* <!-- Profile Info --> */}
        <div className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            👩‍⚕️ Profile Details
          </h2>
          <ul className="space-y-3 text-gray-700">
            <ul><strong>Specialization:</strong>
            <li>Diabetes & Endocrine Disorder Management</li>
            <li>AI-Driven Disease Prediction</li> 
            <li>Preventive Healthcare Analytics</li>
           </ul>
          </ul>
        </div>

        {/* <!-- Consultation Info --> */}
        <div className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            💬 Consultation Info
          </h2>
          <ul className="space-y-3 text-gray-700">
            {/* <li><strong>Fee:</strong> ₹800 / session</li> */}
            <li><strong>Mode:</strong> Video • Chat • AI Report</li>
            <li><strong>Timings:</strong>24 / 7</li>
            <li><strong>AI Health Score:</strong> 92 / 100</li>
          </ul>
        </div>
      </div>

      {/* <!-- Actions --> */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition">
          Book Appointment
        </button>
        <button className="px-8 py-3 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
          View AI Health Report
        </button>
      </div>

    </div>
  </div>

</div>

  )
}

export default profile

