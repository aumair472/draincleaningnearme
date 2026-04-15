"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Star, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export function Hero() {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/contact");
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-bg">
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="absolute top-[10%] w-[100%] max-w-4xl h-[400px] bg-blue-100/40 blur-[100px] rounded-full opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 text-text leading-tight"
          >
            Find Drain Cleaning Experts Near You
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text/80 font-medium max-w-2xl mx-auto mb-10"
          >
            Get fast, affordable drainage services in minutes. Connect with licensed pros ready to help 24/7.
          </motion.p>

        </div>
      </div>
    </section>
  );
}
