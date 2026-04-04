"use client";
import React, { use } from 'react';

const Username = ({ params }) => {
  // In Next.js 15, params is a Promise. You must 'use' it.
  const resolvedParams = use(params);

  return (
    <div className='flex items-center justify-center min-h-screen bg-sky-950 text-white'>
      <h1 className="text-3xl font-bold">
        Welcome, {resolvedParams.username}!
      </h1>
    </div>
  );
}

export default Username;


// "use client"; // MUST be the very first line

// import React from 'react'
// import { useSession } from 'next-auth/react'
// // CORRECT IMPORT for App Router:
// import { useRouter } from 'next/navigation' 

// const Dashboard = () => {
//   const router = useRouter();
//   const { data: session, status } = useSession();

//   // Loading state
//   if (status === "loading") {
//     return <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">Syncing Session...</div>;
//   }

//   // Redirect if not logged in
//   if (status === "unauthenticated") {
//     router.push("/login");
//     return null;
//   }

//   return (
//     <div className="min-h-screen bg-[#020617] text-white pt-28 px-8">
//       <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
//         <h1 className="text-3xl font-black italic uppercase tracking-tighter">
//           Operator <span className="text-blue-400 not-italic">Dashboard</span>
//         </h1>
//         <p className="mt-4 text-gray-400">Welcome back, {session?.user?.name}</p>
//       </div>
//     </div>
//   )
// }

// export default Dashboard;