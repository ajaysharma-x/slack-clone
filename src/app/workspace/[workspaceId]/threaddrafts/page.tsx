"use client";

import { motion } from "framer-motion";
import { Wrench, Clock } from "lucide-react";

const ThreadDraftsPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg p-8 bg-white shadow-2xl rounded-2xl"
      >
        <div className="flex justify-center mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          >
            <Wrench className="w-16 h-16 text-indigo-500" />
          </motion.div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Threads & Drafts Coming Soon 🚧
        </h1>
        <p className="text-gray-600 mb-6">
          We’re currently working hard to build something amazing here.  
          Stay tuned — this section is under development!
        </p>

        <div className="flex items-center justify-center gap-2 text-indigo-600 font-medium">
          <Clock className="w-5 h-5" />
          <span>Expected to be live soon</span>
        </div>
      </motion.div>
    </div>
  );
};

export default ThreadDraftsPage;
