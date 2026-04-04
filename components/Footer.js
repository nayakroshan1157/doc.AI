"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="relative bg-[#020617] text-white pt-20 pb-10 overflow-hidden border-t border-white/5">
            {/* Background Decorative Element - Subtle Teal Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    
                    {/* --- BRAND SECTION --- */}
                    <div className="md:col-span-4 space-y-6">
                    <Link href="/" className="relative flex items-center gap-2">
                        <div className="flex items-center space-x-3">
                            <div className="bg-white p-1 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                <Image
                                    src="/logo.png"
                                    alt="MEDIFLO Logo"
                                    width={40}
                                    height={40}
                                    className="rounded-lg"
                                    />
                            </div>
                            <span className="text-2xl font-black tracking-tighter uppercase italic">
                                MEDI<span className="text-teal-400 not-italic">FLO</span>
                            </span>
                        </div>
                                    </Link>
                        
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Architecting the future of healthcare through neural diagnostics and seamless specialist integration.
                        </p>

                        {/* High-Tech Disclaimer Box */}
                        <div className="inline-block p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent">
                            <div className="bg-black/40 backdrop-blur-sm p-4 rounded-2xl border border-white/5">
                                <div className="flex items-start gap-3">
                                    <span className="text-teal-400 text-lg mt-0.5">🛡️</span>
                                    <div>
                                        <p className="text-[10px] text-teal-400 font-bold uppercase tracking-widest mb-1">Neural Guard</p>
                                        <p className="text-[11px] text-gray-500 leading-tight">
                                            AI results are probabilistic. Always verify with a certified medical practitioner.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- NAVIGATION LINKS --- */}
                    <div className="md:col-span-2">
                        <h4 className="text-xs font-bold text-white uppercase tracking-[0.3em] mb-8 opacity-50">Systems</h4>
                        <ul className="space-y-4 text-[13px] font-medium text-gray-400">
                            <li><Link href="/service" className="hover:text-teal-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Diabetes Lab</Link></li>
                            <li><Link href="/service" className="hover:text-teal-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Cardiac Vision</Link></li>
                            <li><Link href="/service" className="hover:text-teal-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Onco-Detection</Link></li>
                            <li><Link href="/service" className="hover:text-teal-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Maternal AI</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-xs font-bold text-white uppercase tracking-[0.3em] mb-8 opacity-50">Network</h4>
                        <ul className="space-y-4 text-[13px] font-medium text-gray-400">
                            <li><Link href="/doctors" className="hover:text-white transition-colors">Global Specialists</Link></li>
                            <li><Link href="/consultation" className="hover:text-white transition-colors">Tele-Consult</Link></li>
                            <li><Link href="/appointments" className="hover:text-white transition-colors">Digital Vault</Link></li>
                            <li><Link href="/support" className="hover:text-white transition-colors">Priority Care</Link></li>
                        </ul>
                    </div>

                    {/* --- NEWSLETTER / CONNECT --- */}
                    <div className="md:col-span-4 space-y-8">
                        <div>
                            <h4 className="text-xs font-bold text-white uppercase tracking-[0.3em] mb-6 opacity-50">Global Node</h4>
                            <div className="flex flex-col space-y-3 text-[13px] text-gray-400">
                                <span className="flex items-center gap-3">
                                    <span className="p-2 bg-white/5 rounded-lg text-teal-400">📍</span>
                                    Bhubaneswar HQ, India
                                </span>
                                <span className="flex items-center gap-3">
                                    <span className="p-2 bg-white/5 rounded-lg text-teal-400">📧</span>
                                    ops@mediflo.ai
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {['linkedin', 'twitter', 'github'].map((social) => (
                                <a key={social} href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:bg-teal-500/20 hover:border-teal-500/50 transition-all group">
                                    <span className="text-xs text-gray-400 group-hover:text-teal-400 font-bold capitalize">{social[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- BOTTOM BAR --- */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[11px] font-medium text-gray-500 tracking-wider uppercase">
                        &copy; {new Date().getFullYear()} MEDIFLO Systems <span className="mx-2 text-white/10">|</span> Precision Healthcare
                    </p>
                    
                    <div className="flex gap-8 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Legal</Link>
                        <Link href="/security" className="hover:text-white transition-colors">Security</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;