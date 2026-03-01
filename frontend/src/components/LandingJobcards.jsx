import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegBookmark } from "react-icons/fa6";

const LandingJobcards = ({ jobs }) => {
  return (
    <div className="w-full overflow-x-hidden px-6 py-6">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <motion.div
              key={job._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className="group relative flex flex-col justify-between 
                         min-h-[280px] bg-gray-200 text-black 
                         p-4 rounded-lg shadow-md 
                         hover:bg-gray-300 
                         overflow-hidden"
            >
              {/* Bookmark  */}
              <Link to="/login">
                <FaRegBookmark
                  className="absolute right-4 top-4 text-2xl cursor-pointer"
                />
              </Link>

              {/* Job Details */}
              <div className="flex flex-col gap-2 break-words">
                <h1 className="text-2xl font-semibold group-hover:underline transition">
                  {job.companyname || "Unknown Company"}
                </h1>

                <h2 className="text-lg">
                  <span className="font-medium">Role:</span>{" "}
                  {job.jobtitle || "Not specified"}
                </h2>

                <h2 className="text-lg">
                  <span className="font-medium">Type:</span>{" "}
                  {job.jobtype || "Not specified"}
                </h2>

                <h2 className="text-lg">
                  <span className="font-medium">Package:</span>{" "}
                  {job.salary || "Not disclosed"}
                </h2>

                <h2 className="text-lg">
                  <span className="font-medium">Location:</span>{" "}
                  {job.location || "Not specified"}
                </h2>

                <Link
                  to="/login"
                  className="text-blue-600 underline text-lg mt-2"
                >
                  Apply for the role
                </Link>
              </div>

              {/* Date  */}
              <div className="mt-4 text-sm text-gray-700">
                Date:{" "}
                {job.updatedAt
                  ? new Date(job.updatedAt).toLocaleDateString()
                  : "N/A"}
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No jobs available.
          </p>
        )}
      </div>
    </div>
  );
};

export default LandingJobcards;
