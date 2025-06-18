import React from 'react';

const JDFileUpload = ({ setJDFile }) => {
  const handleChange = (e) => {
    setJDFile(e.target.files[0]);
  };

  return (
    <div className="upload-box">
      <label>Upload Job Description File:</label>
      <input type="file" accept=".txt,.pdf,.docx" onChange={handleChange} />
    </div>
  );
};

export default JDFileUpload;