import React, { useState } from "react";

// Import components from src/components
import CSVUpload from "./components/CSVUpload/CSVUpload.jsx";
import JDFileUpload from "./components/JDFileUpload/JDFileUpload.jsx";
import ProgressTracker from "./components/ProgressTracker/ProgressTracker.jsx";
import DownloadButton from "./components/DownloadButton/DownloadButton.jsx";
// import "./App.css";


/* App function - Functionalities
- Upload Csv File from CSVUpload from  JD File  Upload
- Upload Jd in text format JD File Upload
- Conditional rendering of download Button
- Progress Tracker
*/
const App = () => {
  const [csvFile, setCsvFile] = useState(null);
  const [jdFile, setJDFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [currentStudent, setCurrentStudent] = useState("");
  const [scanComplete, setScanComplete] = useState(false);

  const studentEmails = ["student1@example.com", "student2@example.com", "student3@example.com"];

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
        setProgress(((step + 1) / studentEmails.length) * 100);
        step++;
      } else {
        clearInterval(interval);
        setProgress(100);
        setCurrentStudent("");
        setScanComplete(true);
      }
    }, 1500);
  };

  return (
    <div className="container">
      <h2>Resume Scanner UI</h2>
      <CSVUpload setCsvFile={setCsvFile} />
      <JDFileUpload setJDFile={setJDFile} />

      <button onClick={startScan}>Start Scan</button>

      <ProgressTracker progress={progress} currentStudent={currentStudent} />

      {scanComplete && <DownloadButton />}
    </div>
  );
};

export default App;