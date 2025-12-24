
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"
const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105" onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  return (
    <nav className="flex justify-between items-center px-4 md:px-15 lg:px-20 py-4 bg-sky-950 shadow-lg">

      {/* Logo Section */}
      <div className="flex items-center gap-2 text-2xl font-bold">
        <Link
          href="/" className="text-white hover:text-blue-300 transition duration-300">
          <Image
            src="/logo.png"
            alt="Doc.AI Logo"
            width={50}
            height={50}
            className="rounded-full"
          />

          DOC.<span className="text-blue-400">AI</span>
        </Link>
      </div>

      <div className="">
        <ul className="flex space-x-10 justify-between items-center px-4 md:px-15 lg:px-20 py-4">
          <li>
            <Link href="/" className="text-blue-50 hover:text-sky-600 font-medium transition duration-300 hidden md:block">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-50 hover:text-sky-600 font-medium transition duration-300 hidden md:block">About Us</Link>
          </li>
          <li>
            {session && (
              <Link href="/service" className="text-gray-50 hover:text-sky-600">
                Services
              </Link>
            )}

          </li>
        </ul>
      </div>
      {/* <div> */}
      <div className="relative">
        {session && <>
          <button onClick={() => { setShowdropdown(!showdropdown) }} onBlur={() => { setTimeout(() => { setShowdropdown(false) }, 100); }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
            Welcome {session.user.email}
            <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
          </button>

          {/* <!-- Dropdown menu --> */}
          <div id="dropdown" className={`z-10  ${showdropdown ? "" : "hidden"} absolute right-{125px} bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44`}>
            <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/service" className="text-gray-50 hover:text-sky-600 font-medium transition duration-300 hidden md:block">Services</Link>
              </li>
              <li>
                <Link href="/profile" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Profile</Link>
              </li>
              <li>
                <Link href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Your Pages</Link>
              </li>
              <li>
                <Link href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</Link>
              </li>

            </ul>
          </div></>
        }

        {session && <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105" onClick={() => { signOut() }}>
          logOut
        </button>}
        {!session && <Link href={"/login"}>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Login
          </button></Link>}
      </div>
      {/* </div>  */}
    </nav>
    //     <main>
    //         <h1>Welcome to DOC.AI</h1>
    //     </main>
  );
}

export default Navbar