import React from 'react';

const Certificates = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-semibold text-blue-600">My Certificates</h2>
        <p className="text-lg text-gray-600 mt-2">Here are some of the certifications I've earned.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-5">
        <div className="flex justify-center items-center border-4 border-blue-500 rounded-lg shadow-lg overflow-hidden">
          <img className="h-auto max-w-full rounded-lg transform transition duration-300 ease-in-out hover:scale-105" src="/a.jpg" alt="Certificate 1" />
        </div>
        <div className="flex justify-center items-center border-4 border-blue-500 rounded-lg shadow-lg overflow-hidden">
          <img className="h-auto max-w-full rounded-lg transform transition duration-300 ease-in-out hover:scale-105" src="/b.jpg" alt="Certificate 2" />
        </div>
        <div className="flex justify-center items-center border-4 border-blue-500 rounded-lg shadow-lg overflow-hidden">
          <img className="h-auto max-w-full rounded-lg transform transition duration-300 ease-in-out hover:scale-105" src="/c.jpg" alt="Certificate 3" />
        </div>
        <div className="flex justify-center items-center border-4 border-blue-500 rounded-lg shadow-lg overflow-hidden">
          <img className="h-auto max-w-full rounded-lg transform transition duration-300 ease-in-out hover:scale-105" src="/d.jpg" alt="Certificate 4" />
        </div>
        <div className="flex justify-center items-center border-4 border-blue-500 rounded-lg shadow-lg overflow-hidden">
          <img className="h-auto max-w-full rounded-lg transform transition duration-300 ease-in-out hover:scale-105" src="/e.jpg" alt="Certificate 5" />
        </div>
        <div className="flex justify-center items-center border-4 border-blue-500 rounded-lg shadow-lg overflow-hidden">
          <img className="h-auto max-w-full rounded-lg transform transition duration-300 ease-in-out hover:scale-105" src="/f.jpg" alt="Certificate 6" />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
