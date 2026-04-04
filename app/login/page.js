"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"; 
import Link from "next/link"; 

const Login = () => { // REMOVED 'async' from here
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 
    
    const router = useRouter();

    const handleSubmit = async (e) => { // 'async' stays here!
        e.preventDefault();
        setError(""); 
        
        try {
            const result = await signIn("credentials", {
                email: email,
                password: password,
                redirect: false, 
            });

            if (result?.error) {
                setError("Login Failed: Invalid email or password");
            } else {
                // Success! Redirect to profile
                router.push("/profile");
            }
        } catch (error) {
            console.error("Login Error:", error);
            setError("An unexpected error occurred.");
        }
    };

   
    return (
  <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
    
    {/* 1. MAIN BACKGROUND IMAGE */}
    <div 
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop')`, // High-end Medical Tech Image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.3) saturate(0.5)' // Dims the image so text pops
      }}
    />

    {/* 2. COLOR OVERLAY (The "Advanced" Tint) */}
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-sky-950/90 via-[#030712]/80 to-emerald-950/50" />

    {/* 3. OPTIONAL MESH GRID (Adds that "Tech" feel) */}
    <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#1f2937 1px, transparent 1px)', backgroundSize: '3rem 3rem' }}></div>

    {/* --- LOGIN CARD (REMAINS THE SAME) --- */}
    <div className="relative z-10 w-full max-w-md px-6">
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 md:p-10">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
            Welcome Back
          </h2>
          <p className="text-blue-100/60 text-sm mt-2">Secure access to MEDIFLO Intelligence</p>
        </div>

        {error && (
          <div className="mb-6 p-3 text-sm text-red-400 bg-red-950/50 border border-red-500/50 rounded-xl text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1.5 text-xs font-semibold text-blue-200 uppercase tracking-wider ml-1">Email Address</label>
            <input
              type="email"
              placeholder="name@mediflo.com"
              className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-white placeholder:text-gray-500"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>

          <div>
            <label className="block mb-1.5 text-xs font-semibold text-blue-200 uppercase tracking-wider ml-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-white placeholder:text-gray-500"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 rounded-xl hover:scale-[1.02] transition-all font-bold shadow-lg active:scale-[0.98]"
          >
            Sign In to Portal
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-gray-400">
            New to MEDIFLO?{" "}
            <Link href="/register" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
              Join Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);
};

export default Login;