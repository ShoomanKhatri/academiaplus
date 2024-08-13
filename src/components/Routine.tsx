import React, { useState } from 'react';
import Layout from './Layout';

const teachers = [
  { id: 1, name: 'Mr. John' },
  { id: 2, name: 'Ms. Jane' },
];

const RoutinePage = () => {
  const [routine, setRoutine] = useState({});

  const handleRoutineChange = (teacherId: number, day: string, time: string) => {
    setRoutine({
      ...routine,
      [teacherId]: {
        ...routine[teacherId],
        [day]: time,
      },
    });
  };

  const handleSubmit = () => {
    console.log('Routine Submitted:', routine);
    // Submit routine to the backend
  };

  return (
    <Layout>
      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Manage Routine</h2>
        {teachers.map((teacher) => (
          <div key={teacher.id} className="mb-6">
            <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label>Monday</label>
                <input
                  type="time"
                  onChange={(e) => handleRoutineChange(teacher.id, 'Monday', e.target.value)}
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div>
                <label>Tuesday</label>
                <input
                  type="time"
                  onChange={(e) => handleRoutineChange(teacher.id, 'Tuesday', e.target.value)}
                  className="border rounded-md p-2 w-full"
                />
              </div>
              {/* Add more days */}
            </div>
          </div>
        ))}
        <button
          onClick={handleSubmit}
          className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
        >
          Submit Routine
        </button>
      </div>
    </Layout>
  );
};

export default RoutinePage;
