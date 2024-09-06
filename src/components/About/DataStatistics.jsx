import React, { useState, useEffect } from 'react';

const Statistics = () => {
  const [projectsDone, setProjectsDone] = useState(0);
  const [qualifiedStaff, setQualifiedStaff] = useState(0);
  const [services, setServices] = useState(0);
  const [happyClients, setHappyClients] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectsDone((prevCount) => {
        if (prevCount < 68) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
        setQualifiedStaff((prevCount) => {
        if (prevCount < 20) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
        setServices((prevCount) => {
        if (prevCount < 10) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
        setHappyClients((prevCount) => {
        if (prevCount < 18) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-16 px-4 mx-12  rounded-3xl shadow-lg delay-1000">
      <div className="max-w-4xl mx-auto px-2 flex justify-between">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-blue-500">{projectsDone}+</h2>
          <p className="mt-2 text-md font-semibold text-gray-700">
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            PROJECTS DONE
          </p>
          
        </div>

        <div className="text-center">
          <h2 className="text-5xl font-bold text-blue-500">{qualifiedStaff}+</h2>
          <p className="mt-2 text-md font-semibold text-gray-700">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            QUALIFIED STAFF
          </p>
          
        </div>

        <div className="text-center">
          <h2 className="text-5xl font-bold text-blue-500">{services}+</h2>
          <p className="mt-2 text-md font-semibold text-gray-700">
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            SERVICES
          </p>
          
        </div>

        <div className="text-center">
          <h2 className="text-5xl font-bold text-blue-500">{happyClients}+</h2>
          <p className="mt-2 text-md font-semibold text-gray-700">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            HAPPY CLIENTS
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Statistics;
