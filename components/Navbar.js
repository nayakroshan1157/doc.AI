"use client";
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"
const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown,setShowdropdown] = useState(false)
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
        <Image
          src="/logo.png"
          alt="Doc.AI Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <Link
          href="/"
          className="text-white hover:text-blue-300 transition duration-300"
        > DOC.<span className="text-blue-400">AI</span>
        </Link>
        </div>

    <div className="">
    <ul className="flex space-x-10 justify-between items-center px-4 md:px-15 lg:px-20 py-4">
        <li>
            <a href="index.html" className="text-blue-50 hover:text-sky-600 font-medium transition duration-300 hidden md:block">Home</a>
        </li>
        <li>
            <a href="services.html" className="text-gray-50 hover:text-sky-600 font-medium transition duration-300 hidden md:block">About Us</a>
        </li>
        <li>
            <a href="about.html" className="text-gray-50 hover:text-sky-600 font-medium transition duration-300 hidden md:block">Services</a>
        </li>
      </ul> 
      </div>
      {/* <div> */}
       <div className="flex space-x-2.5">
        {session && <>
<button onClick={()=>{setShowdropdown(!showdropdown)}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown button 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>

{/* <!-- Dropdown menu --> */}
<div id="dropdown" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
      </li>
    </ul>
</div></>
}
           {session && <Link href={"/profile"}><button  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
             Dashboard
            </button></Link>}
            {session && <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105" onClick={()=>{signOut}}>
             logOut
            </button>}
           {!session &&<Link href={"/login"}>
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
