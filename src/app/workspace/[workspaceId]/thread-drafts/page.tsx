"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Wrench } from "lucide-react";

const ThreadDraftsPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg p-8 bg-white shadow-2xl rounded-2xl"
      >
        <div className="flex justify-center mb-6 gap-4">
          <MessageSquare className="w-12 h-12 text-indigo-500" />
          <FileText className="w-12 h-12 text-indigo-500" />
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Threads & Drafts
        </h1>

        <p className="text-gray-600 mb-3">
          <span className="font-semibold">Threads</span> are available only
          inside <span className="text-indigo-600">channels</span>.  
          Open a channel to start or view threaded conversations.
        </p>

        <p className="text-gray-600 mb-6">
          <span className="font-semibold">Drafts</span> are tied to{" "}
          <span className="text-indigo-600">direct messages</span>.  
          You’ll see them when composing a DM to another member.
        </p>

        <div className="flex items-center justify-center gap-2 text-indigo-600 font-medium mb-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          >
            <Wrench className="w-5 h-5" />
          </motion.div>
          <span>This section is currently under development</span>
        </div>

        <p className="text-sm text-gray-400 italic">
          Please check back soon for updates.
        </p>
      </motion.div>
    </div>
  );
};

export default ThreadDraftsPage;
