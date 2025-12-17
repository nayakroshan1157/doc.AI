// import React from 'react'

"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-text pt-16 pb-6  border-t  bg-sky-950 shadow-lg border-dark-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700/50 pb-10 mb-8">
            
            <div className="mb-6 md:mb-0">
                <div className="flex items-center space-x-3">
                      <Image
                              src="/logo.png"
                              alt="Doc.AI Logo"
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                     <Link
          href="/"
          className="text-white hover:text-blue-300 transition duration-300"
        > DOC.<span className="text-blue-400">AI</span>
        </Link>
                </div>
                <p className="text-blue-50 text-subtle-text mt-2 ml-14 text-sm max-w-sm">
                    Intelligent Healthcare Solutions. Transforming Consultations.
                </p>
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
                <a href="#privacy" className="text-blue-50 hover:text-sky-600 text-subtle-text hover:text-accent-blue transition duration-200">Privacy Policy</a>
                <a href="#terms" className="text-blue-50 hover:text-sky-600 text-subtle-text hover:text-accent-blue transition duration-200">Terms of Service</a>
                <a href="#contact" className="text-blue-50 hover:text-sky-600 text-subtle-text hover:text-accent-blue transition duration-200">Contact Us</a>
                <a href="#careers" className="text-blue-50 hover:text-sky-600 text-subtle-text hover:text-accent-blue transition duration-200">Careers</a>
                <a href="#support" className="text-blue-50 hover:text-sky-600 text-subtle-text hover:text-accent-blue transition duration-200">Support</a>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center">
            
            <p className="text-blue-50 text-subtle-text text-sm mb-4 sm:mb-0">
                &copy; 2025 doc.ai, Inc. All rights reserved.
            </p>

            <div className="flex space-x-4">
                <p className="text-blue-50">find us on</p>
                <a href="https://twitter.com/docai" target="_blank" className="text-subtle-text hover:text-accent-blue transition duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22.254 5.378c-.621.285-1.284.475-1.977.564.714-.428 1.259-1.104 1.516-1.908-.667.397-1.408.687-2.193.847-.63-.674-1.524-1.096-2.522-1.096-1.905 0-3.448 1.543-3.448 3.448 0 .27.03.532.086.783-2.868-.143-5.41-1.516-7.11-3.606-.296.508-.466 1.099-.466 1.724 0 1.196.608 2.253 1.533 2.869-.564-.017-1.095-.17-1.56-.43v.043c0 1.666 1.187 3.056 2.76 3.376-.288.078-.592.119-.904.119-.22 0-.435-.02-.644-.06.442 1.365 1.72 2.366 3.235 2.393-1.178.924-2.66 1.478-4.275 1.478-.278 0-.55-.015-.818-.048 1.523.978 3.33 1.55 5.275 1.55 6.33 0 9.79-5.241 9.79-9.789 0-.15-.004-.298-.01-.446.677-.488 1.265-1.095 1.727-1.785z"/>
                    </svg>
                </a>
                
                <a href="https://instagram.com/docai" target="_blank" className="text-subtle-text hover:text-accent-blue transition duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07c3.25.148 4.779 1.583 4.979 4.979.058 1.267.07 1.647.07 4.85s-.012 3.584-.07 4.85c-.148 3.25-1.583 4.779-4.979 4.979-1.267.058-1.647.07-4.85.07s-3.584-.012-4.85-.07c-3.25-.148-4.779-1.583-4.979-4.979-.058-1.267-.07-1.647-.07-4.85s.012-3.584.07-4.85c.148-3.25 1.583-4.779 4.979-4.979 1.267-.058 1.647-.07 4.85-.07zm0 1.942c-3.14 0-3.484.01-4.743.07-.442.02-.796.082-1.09.197-.557.214-1.025.59-1.488 1.053-.464.463-.84 1.028-1.053 1.585-.115.293-.178.647-.198 1.09-.06 1.258-.07 1.603-.07 4.743s.01 3.484.07 4.743c.02.442.083.796.198 1.09.213.557.59 1.025 1.053 1.488.464.463 1.028.84 1.585 1.053.293.115.647.178 1.09.198 1.258.06 1.603.07 4.743.07s3.484-.01 4.743-.07c.442-.02.796-.083 1.09-.198.557-.213 1.025-.59 1.488-1.053.463-.464.84-1.028 1.053-1.585.115-.293.178-.647.198-1.09.06-1.258.07-1.603.07-4.743s-.01-3.484-.07-4.743c-.02-.442-.083-.796-.198-1.09-.213-.557-.59-1.025-1.053-1.488-.464-.463-1.028-.84-1.585-1.053-.293-.115-.647-.178-1.09-.198-1.258-.06-1.603-.07-4.743-.07zm0 2.22c2.978 0 5.4 2.422 5.4 5.4s-2.422 5.4-5.4 5.4-5.4-2.422-5.4-5.4 2.422-5.4 5.4-5.4zm0 2.22c-1.767 0-3.21 1.443-3.21 3.21s1.443 3.21 3.21 3.21 3.21-1.443 3.21-3.21-1.443-3.21-3.21-3.21z"/>
                    </svg>
                </a>
                
                <a href="https://linkedin.com/company/docai" target="_blank" className="text-subtle-text hover:text-accent-blue transition duration-200">
                    <svg className="w-6 h-6" fill="" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19.782 2.147h-15.56c-.672 0-1.22.548-1.22 1.22v15.56c0 .672.548 1.22 1.22 1.22h15.56c.672 0 1.22-.548 1.22-1.22V3.367c0-.672-.548-1.22-1.22-1.22zm-3.834 16.596h-2.61v-4.498c0-1.072-.382-1.802-1.348-1.802-.73 0-1.164.494-1.355.973-.069.17-.087.404-.087.639v4.694h-2.61s.035-7.054 0-7.795h2.61v1.077c.348-.528 1.058-1.284 2.348-1.284 1.71 0 3.016 1.118 3.016 3.513v4.489zM5.312 10.33h2.612V7.494H5.312v2.836zm-1.306-4.148c0-.796.643-1.439 1.439-1.439h.02c.796 0 1.439.643 1.439 1.439 0 .796-.643 1.439-1.439 1.439h-.02c-.796 0-1.439-.643-1.439-1.439z"/>
                    </svg>
                </a>
            </div>
        </div>

    </div>
</footer>
  );
}

export default Footer
