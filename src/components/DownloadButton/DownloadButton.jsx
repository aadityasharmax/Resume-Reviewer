import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    const csvContent = "data:text/csv;charset=utf-8,Email,Score\nstudent@example.com,85";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "result.csv");
    document.body.appendChild(link);
    link.click();
  };

  return <button onClick={handleDownload}>Download Results</button>;
};

export default DownloadButton;