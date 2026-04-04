"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 1. Basic Frontend Validation
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            // 2. Submit to Backend
            const result = await axios.post('http://localhost:5000/register', { 
                name, 
                email, 
                password 
            });

            console.log("Registration Successful:", result.data);
            
            // 3. Redirect to login page
            router.push('/login'); 
        } catch (error) {
            console.error("Registration Error:", error.response?.data || error.message);
            alert("Registration failed. Please try again.");
        }
    };

   

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030712]">
            
            {/* --- BACKGROUND IMAGE & OVERLAYS --- */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2070&auto=format&fit=crop')`, // Clinical/Tech Abstract
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.25) saturate(0.6)'
                }}
            />

            {/* Glowing Mesh Gradients */}
            <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] bg-teal-600/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[45%] h-[45%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

            {/* --- REGISTER CARD (GLASS) --- */}
            <div className="relative z-10 w-full max-w-lg px-6 py-10">
                <div className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-8 md:p-12">
                    
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-black text-white tracking-tight">
                            Join <span className="text-teal-400 font-bold">MEDIFLO</span>
                        </h2>
                        <p className="text-blue-100/60 text-sm mt-3 font-medium">Start your AI-driven healthcare journey today</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1.5 text-[10px] font-bold text-teal-300 uppercase tracking-[0.2em] ml-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all text-white placeholder:text-gray-600"
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-1.5 text-[10px] font-bold text-teal-300 uppercase tracking-[0.2em] ml-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all text-white placeholder:text-gray-600"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                            <div>
                                <label className="block mb-1.5 text-[10px] font-bold text-teal-300 uppercase tracking-[0.2em] ml-1">Password</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all text-white placeholder:text-gray-600"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-1.5 text-[10px] font-bold text-teal-300 uppercase tracking-[0.2em] ml-1">Confirm</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all text-white placeholder:text-gray-600"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full mt-6 bg-gradient-to-r from-teal-500 to-blue-600 text-white py-4 rounded-2xl hover:brightness-110 transition-all font-bold shadow-xl shadow-teal-900/20 active:scale-[0.98]"
                        >
                            Create Professional Account
                        </button>
                    </form>

                    <div className="mt-10 pt-6 border-t border-white/10 text-center">
                        <p className="text-sm text-gray-400">
                            Member of MEDIFLO?{" "}
                            <Link href="/login" className="text-teal-400 hover:text-teal-300 font-bold transition-colors underline underline-offset-4">
                                Sign In here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Register;