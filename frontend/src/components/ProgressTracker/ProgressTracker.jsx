import React from 'react';

const ProgressTracker = ({ progress, currentStudent }) => {
  return (
    <div className="progress-box mt-4 w-[60%]">
      
      <div className=" bg-gray-300 rounded-full h-4">
        <div
          className="bg-green-600 h-4 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-white mt-2 text-center">{progress}% completed</p>
      {progress < 100 && currentStudent && (
        <p className="text-white mt-1 ">Evaluating: {currentStudent}</p>
      )}
    </div>
  );
};

export default ProgressTracker;