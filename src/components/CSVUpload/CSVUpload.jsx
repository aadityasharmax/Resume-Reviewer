import React from 'react';

const CSVUpload = ({ setCsvFile }) => {
  const handleChange = (e) => {
    setCsvFile(e.target.files[0]);
  };

  return (
    <div className="upload-box">
      <label>Upload CSV File:</label>
      <input type="file" accept=".csv" onChange={handleChange} />
    </div>
  );
};

export default CSVUpload;