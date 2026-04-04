"use client";

import React, { useState } from "react";
import Image from "next/image";
import axios from "axios"; // Ensure axios is installed
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
const BookAppointment = () => {
  const { data: session } = useSession();
  // 1. Component States
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [mode, setMode] = useState("Virtual"); // Default mode
  const [loading, setLoading] = useState(false);
  
  // const router = useRouter();

  const timeSlots = [
    "09:00 AM", "10:30 AM", "12:00 PM", 
    "02:00 PM", "03:30 PM", "05:00 PM"
  ];

  // 2. Submission Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!selectedDate || !selectedSlot) {
      alert("Please select both a date and a time slot.");
      return;
    }

    setLoading(true);

    try {
      // Submit to your backend (update URL to your actual API endpoint)
      const result = await axios.post('http://localhost:5000/consultation', { 
        patientId: session.user.id, // <--- Add this line
        doctorName: "Dr. Sarah Chen",
        date: selectedDate, 
        slot: selectedSlot, 
        mode: mode 
      });

      console.log("Booking Successful:", result.data);
      alert("Booking successful");
      
      // Redirect to a success page or dashboard
      router.push('/'); 
    } catch (error) {
      console.error("Booking Error:", error.response?.data || error.message);
      alert("Scheduling failed. This time node might be occupied.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-28 pb-12 px-4">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN (Doctor Info - remains same) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sticky top-28">
            <div className="relative w-24 h-24 mb-6">
              <Image 
                src="/doctor-placeholder.png"
                alt="Doctor" width={96} height={96}
                className="rounded-2xl object-cover border-2 border-blue-500/50"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-5 h-5 rounded-full border-4 border-[#020617] animate-pulse"></div>
            </div>
            <h1 className="text-3xl font-black tracking-tight italic uppercase">
              Dr. Sarah <span className="text-blue-400 not-italic">Chen</span>
            </h1>
            <p className="text-teal-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Senior Neuro-Specialist</p>
            <div className="mt-8 p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-[11px] text-gray-400 italic">
              "AI Pre-screening synchronization active."
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: BOOKING INTERFACE */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-black/40 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm">01</span>
              Configure Appointment
            </h2>

            {/* Added onSubmit handler */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Select Protocol Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Available Time Nodes</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-3 rounded-xl border text-sm font-bold transition-all duration-300 ${
                        selectedSlot === slot 
                        ? "bg-blue-600 border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.4)] text-white" 
                        : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Consultation Mode</label>
                <div className="flex gap-4">
                  {/* Virtual Option */}
                  <label className="flex-1 cursor-pointer">
                    <input type="radio" name="mode" className="hidden peer" checked={mode === "Virtual"} onChange={() => setMode("Virtual")} />
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center peer-checked:border-teal-500 peer-checked:bg-teal-500/10 transition-all">
                      <p className="text-lg mb-1">💻</p>
                      <p className="text-[11px] font-bold uppercase">Virtual</p>
                    </div>
                  </label>
                  {/* In-Person Option */}
                  <label className="flex-1 cursor-pointer">
                    <input type="radio" name="mode" className="hidden peer" checked={mode === "In-Person"} onChange={() => setMode("In-Person")} />
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center peer-checked:border-teal-500 peer-checked:bg-teal-500/10 transition-all">
                      <p className="text-lg mb-1">🏥</p>
                      <p className="text-[11px] font-bold uppercase">In-Person</p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  disabled={!selectedDate || !selectedSlot || loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_10px_40px_rgba(37,99,235,0.5)] transition-all disabled:opacity-30 disabled:cursor-not-allowed flex justify-center items-center"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    "Confirm Appointment"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;