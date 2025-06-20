import React, { useState } from "react";
import Typewriter from "typewriter-effect";

import CSVUpload from "./components/CSVUpload/CSVUpload";
import JDFileUpload from "./components/JDFileUpload/JDFileUpload";
import ProgressTracker from "./components/ProgressTracker/ProgressTracker";
import DownloadButton from "./components/DownloadButton/DownloadButton";
import "./App.css";
import Features from "./components/Features/Features";
import { div } from "motion/react-client";
import { BiCopy } from "react-icons/bi";
import { CgCopy } from "react-icons/cg";


const App = () => {
  const [csvFile, setCsvFile] = useState(null);
  const [jdFile, setJDFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [currentStudent, setCurrentStudent] = useState("");
  const [scanComplete, setScanComplete] = useState(false);

  const studentEmails = [
    "student1@example.com",
    "student2@example.com",
    "student3@example.com",
    "student4@example.com",
    "student5@example.com"
  ];

  const startScan = () => {
    if (!csvFile || !jdFile) {
      alert("Please upload both files");
      return;
    }

    setProgress(0);
    setScanComplete(false);
    let step = 0;

    const interval = setInterval(() => {
      if (step < studentEmails.length) {
        setCurrentStudent(studentEmails[step]);
        setProgress(Math.floor(((step + 1) / studentEmails.length) * 100));
        step++;
      } else {
        clearInterval(interval);
        setProgress(100);
        setCurrentStudent("");
        setScanComplete(true);
      }
    }, 500);
  };




return (
  <div className="container px-4 md:px-10 py-6">

{/*TypeWriter Effect*/}
    <div className="typeriter text-3xl sm:text-4xl md:text-5xl text-[#cccccc] text-center mb-6">
      <Typewriter
        options={{
          strings: [
            "Smart Resume Scanner",
            "AI-Powered Screening",
            "Instant Matching",
          ],
          autoStart: true,
          loop: true,
          delay: 70,
        }}
      />
    </div>

    <h3 className="text-center text-md sm:text-xl md:text-2xl mt-4 text-[#7a7183]">
      Use AI to filter, score, and shortlist the best candidates — all from a
      single CSV.
    </h3>

    <Features />

    {/* Upload Section */}
    <div className="flex flex-col md:flex-row md:justify-center md:gap-8 mt-10">

      
      {/* CSV Upload */}
      <div className="w-full md:w-1/2 max-w-xl mx-auto py-6">
        <h3 className="text-white text-center text-lg sm:text-xl">1️⃣ Upload CSV</h3>
        <p className="text-white text-center text-sm sm:text-md m-4">
          (Upload a CSV file containing candidate emails and resume links)
        </p>
        <CSVUpload setCsvFile={setCsvFile} />
      </div>

      

      {/* JD Upload */}
      <div className="w-full md:w-1/2 max-w-xl mx-auto py-6">
        <h3 className="text-white text-center text-lg sm:text-xl">
          2️⃣ Upload Job Description
        </h3>
        <p className="text-white text-center text-sm sm:text-md m-4">
          (Upload the job description to match candidates with your hiring needs)
        </p>
        <JDFileUpload setJDFile={setJDFile} />
      </div>
    </div>


    
    {/* Scan and Results */}
    <h3 className="text-white text-center text-lg sm:text-xl mt-8">
      3️⃣ Result Generation
    </h3>

    <div className="flex flex-col items-center mt-4 gap-6">
      <button
        onClick={startScan}
        className="text-white h-10 w-40 bg-blue-500 rounded-2xl hover:bg-purple-600"
      >
        Start Scan
      </button>

      <ProgressTracker progress={progress} currentStudent={currentStudent} />

      {scanComplete && (
        <div className="mt-4">
          <DownloadButton />
        </div>
      )}
    </div>

    

    {/* Footer */}
    <footer className="text-xs sm:text-sm text-white text-center mt-12 mb-2">
      © Resume Review AI 2025 All Rights Reserved
    </footer>
  </div>
)
}

export default App
