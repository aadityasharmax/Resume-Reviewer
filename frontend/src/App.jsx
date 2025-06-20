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
    <div className="container p-10">
      {/* <h2 className="text-6xl font-bold text-center mt-6 text-[#cccccc]">Hire Smarter, <span className="text-6xl text-red-400">Not</span> Harder</h2>*/}
      <div className="typeriter text-5xl text-[#cccccc] text-center m-6">
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
      <h3 className="text-center text-2xl mt-6 text-[#7a7183]">
        Use AI to filter, score, and shortlist the best candidates — all from a
        single CSV.
      </h3>
      <Features />
      

      <div className=" flex flex-wrap ">
        <div className="max-w-xl w-1/2 mx-auto py-10">
          <h3 className="text-white text-center text-xl">✅Upload CSV </h3>
          <p className="text-white text-center text-md m-4">
            ( Upload a CSV file containing candidate emails and links to their
            resumes)
          </p>

          <CSVUpload setCsvFile={setCsvFile} />
        </div>

        <div className="max-w-xl w-1/2 mx-auto py-10">
          <h3 className="text-white text-center text-xl">
            ✅Upload Job Description
          </h3>
          <p className="text-white text-center text-md m-4">
            ( Upload the job description to match candidates against your hiring
            needs)
          </p>
          <JDFileUpload setJDFile={setJDFile} />
        </div>
      </div>



        
         <h3 className="text-white text-center text-xl mt-5">
            ✅ Result Generation 
          </h3>
      <div className=''>
        <div className="flex items-center flex-col">
        <button
        onClick={startScan}
        className="text-white h-10 w-[160px] bg-blue-500 rounded-2xl hover:bg-purple-600"
      >
        Start Scan
      </button>
      </div>

      <div className="flex justify-center">
        <ProgressTracker progress={progress} currentStudent={currentStudent} />
      </div>

      {scanComplete && <div className="flex justify-center">
        <DownloadButton />
      </div> }
      </div>
      <footer className="text-sm text-white text-center mt-10 mb-2 ">© Resume Review AI 2025 All Rights Reserved</footer>
    </div>
  );
};

export default App;
