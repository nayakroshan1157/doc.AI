"use client";

import Image from "next/image";
import Lottie from "lottie-react";
import AI from "./AI bot.json"
export default function Home() {
  return (

     <main className="bg-cyan-950 primary text-white">
<section className="relative h-162.5 flex items-center justify-center text-center overflow-hidden">
       <div className="flex justify-center ml-40 pt-1">
        <Lottie
          animationData={AI}
          className="w-80 h-80 md:w-56 md:h-56"
        />
     </div>
        

</section>
     </main>

  );
}
