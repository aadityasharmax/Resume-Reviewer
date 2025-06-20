const Features = () => {
  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <h3 className="text-white text-xl sm:text-2xl font-bold text-center">What you get</h3>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center mt-5 gap-4 w-full max-w-[800px]">
        <div className="bg-gray-500 text-white rounded-2xl px-4 py-2 text-center w-full sm:w-auto">
          Candidate Resume Rating
        </div>
        <div className="bg-gray-500 text-white rounded-2xl px-4 py-2 text-center w-full sm:w-auto">
          AI-Based Reasoning
        </div>
        <div className="bg-gray-500 text-white rounded-2xl px-4 py-2 text-center w-full sm:w-auto">
          Downloadable CSV
        </div>
        <div className="bg-gray-500 text-white rounded-2xl px-4 py-2 text-center w-full sm:w-auto">
          Smart Job Matching
        </div>
        <div className="bg-gray-500 text-white rounded-2xl px-4 py-2 text-center w-full sm:w-auto">
          One-Click Downloads
        </div>
        <div className="bg-gray-500 text-white rounded-2xl px-4 py-2 text-center w-full sm:w-auto">
          Real-Time Analysis
        </div>
      </div>
    </div>
  );
};

export default Features;