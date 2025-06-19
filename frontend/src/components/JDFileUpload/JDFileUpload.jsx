import React, { useState } from 'react';
import { FaFileUpload } from 'react-icons/fa';


// Main JD Uplad function 
const JDUpload = ({ setJDFile }) => {

  // Initializing states of drag and file name activity
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState("");


  // Handle FIle function
  const handleFile = (file) => {
    if (file.type === "text/plain") {
      setJDFile(file);
      setFileName(file.name);

      // If file not CSV
    } else {
      alert("Please upload a Text file only.");
    }
  };


  // Drag and Drop Function
  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files.length) {
      handleFile(e.dataTransfer.files[0]);
    }
  };


  // File Change Function
  const handleChange = (e) => {
    if (e.target.files.length) {  
      handleFile(e.target.files[0]);
    }
  };

  // HTML return and styling
  return (
    <div
    //  onDragOver , onDragLeave , onDrop Function
      onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
      onDragLeave={() => setDragActive(false)}
      onDrop={handleDrop}

      // Drag and Drop Styling
      className={`border-2 border-dashed rounded-lg  p-6 text-center transition-all duration-300 ${
        dragActive ? 'border-blue-400 bg-blue-50' : 'border-white/40 bg-purple-700'
      }`}
    >  

      
      <div className="flex justify-end">
        <span className="bg-white/10 text-white text-xs px-2 py-1 rounded-full border border-white/20">
          🔒 100% privacy
        </span>
      </div>



      <div className="flex flex-col items-center gap-3 py-6">
        <FaFileUpload className="text-white text-5xl" />
        <p className="text-white font-semibold text-lg">
          Drop your Text file here or <label htmlFor="JDInput" className="underline cursor-pointer">choose a file</label>.
        </p>
        <p className="text-white/80 text-sm">
          CSV only. Max 2MB file size.
        </p>
        {fileName && <p className="text-green-300 text-sm mt-2">✅ {fileName} selected</p>}
        <input
          id="JDInput"
          type="file"
          accept=".txt"
          className="hidden"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default JDUpload;