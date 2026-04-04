
"use client"; // Required for useSession

import React, { useEffect } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Service = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Show a loading state or nothing while checking session
  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // If there is no session, don't render the services
  if (!session) return null;

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our AI Healthcare Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            AI-powered healthcare solutions for early prediction,
            prevention, and personalized treatment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Diabetes Prediction */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition border-t-4 border-red-500">
            <div>
              <div className="text-blue-600 text-4xl mb-4">🩸</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Diabetes Prediction
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                AI-based prediction of diabetes using medical data
                and lifestyle indicators.
              </p>
            </div>
            <a href="http://localhost:8501/?embed=true" className="inline-block text-center bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition">
              Check Now
            </a>
          </div>

          {/* Heart Disease */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition border-t-4 border-red-500">
            <div>
              <div className="text-red-600 text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Heart Disease Analysis
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                AI-driven heart disease risk assessment using
                patient vitals and reports.
              </p>
            </div>
            <a href="/heart-disease" className="inline-block text-center bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition">
              Analyze
            </a>
          </div>

          {/* Breast Cancer */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition border-t-4 border-pink-500">
            <div>
              <div className="text-pink-600 text-4xl mb-4">🎗️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Breast Cancer Analysis
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                AI-powered breast cancer detection using tumor measurements 
                and medical parameters.
              </p>
            </div>
            <a href="/breast-cancer" className="inline-block text-center bg-pink-600 text-white py-2 rounded-lg font-medium hover:bg-pink-700 transition">
              Analyze
            </a>
          </div>

          {/* Maternal Health Care */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition border-t-4 border-pink-500">
            <div>
              <div className="text-pink-600 text-4xl mb-4">🤰</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Maternal Health Care
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                AI-assisted maternal risk monitoring and prenatal
                health recommendations.
              </p>
            </div>
            <a href="http://localhost:8502/?embed=true" className="inline-block text-center bg-pink-600 text-white py-2 rounded-lg font-medium hover:bg-pink-700 transition">
              View Care
            </a>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a href="/consultation"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition shadow-lg">
            Book Doctor Consultation
          </a>
        </div>

      </div>
    </section>
  );
}

export default Service;