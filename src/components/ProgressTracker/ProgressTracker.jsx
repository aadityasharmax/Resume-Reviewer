import React from 'react';

const ProgressTracker = ({ progress, currentStudent }) => {
  return (
    <div className="progress-box">
      <progress value={progress} max="100"></progress>
      <p>{progress}% completed</p>
      {progress < 100 && currentStudent && (
        <p>Evaluating: {currentStudent}</p>
      )}
    </div>
  );
};

export default ProgressTracker;