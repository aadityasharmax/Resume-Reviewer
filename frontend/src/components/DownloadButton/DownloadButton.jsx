import React from "react";

// DownloadButton Component - Handles CSV file download
const DownloadButton = () => {

  // Function triggered on button click to download CSV
  const handleDownload = () => {

    // Create CSV data 
    const csvContent = "data:text/csv;charset=utf-8,Email,Score\nstudent@example.com,85";

    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");

    link.setAttribute("href", encodedUri);

    link.setAttribute("download", "result.csv");

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  // JSX for the button UI
  return (
    <button
      onClick={handleDownload}
      className="text-white h-10 rounded-2xl bg-blue-500 hover:bg-purple-600 p-2"
    >
      Download Results
    </button>
  );
};

export default DownloadButton;
