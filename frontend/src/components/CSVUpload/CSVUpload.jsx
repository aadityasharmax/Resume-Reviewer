// import React from 'react';

// const CSVUpload = ({ setCsvFile }) => {
//   const handleChange = (e) => {
//     setCsvFile(e.target.files[0]);
//   };

//   return (
//     <div className="upload-box border-dashed border-2 flex  items-center justify-center mt-20 bg-white text-rose-400">
//       <h3>Upload CSV</h3>
//       <input type="file" accept=".csv" onChange={handleChange}
//       className='cursor-pointer ' />
//     </div>
//   );
// };

// export default CSVUpload;

import React, { useState } from 'react';
import { FaFileUpload } from 'react-icons/fa';


// Main CSV Uplad function 
const CSVUpload = ({ setCsvFile }) => {

  // Initializing states of drag and file name activity
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState("");


  // Handle FIle function
  const handleFile = (file) => {
    if (file.type === "text/csv") {
      setCsvFile(file);
      setFileName(file.name);

      // If file not CSV
    } else {
      alert("Please upload a CSV file only.");
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
          Drop your CSV file here or <label htmlFor="csvInput" className="underline cursor-pointer">choose a file</label>.
        </p>
        <p className="text-white/80 text-sm">
          CSV only. Max 2MB file size.
        </p>
        {fileName && <p className="text-green-300 text-sm mt-2">✅ {fileName} selected</p>}
        <input
          id="csvInput"
          type="file"
          accept=".csv"
          className="hidden"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default CSVUpload;