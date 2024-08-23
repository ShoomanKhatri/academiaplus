'use client';
import React, { useState } from 'react';

const teachers = [
  { id: 1, name: 'Mr. John' },
  { id: 2, name: 'Ms. Jane' },
  { id: 3, name: 'Dr. Alice' },
  // Add more teachers as needed
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default function RoutinePage() {
  const [routine, setRoutine] = useState<{ [teacherId: number]: { [day: string]: string } }>({});

  const handleRoutineChange = (teacherId: number, day: string, time: string) => {
    setRoutine((prevRoutine) => ({
      ...prevRoutine,
      [teacherId]: {
        ...prevRoutine[teacherId],
        [day]: time,
      },
    }));
  };

  const handleSubmit = () => {
    console.log('Routine Submitted:', routine);
    // Submit routine to the backend or handle it as required
  };

  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Manage Routine</h2>
      {teachers.map((teacher) => (
        <div key={teacher.id} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {days.map((day) => (
              <div key={day}>
                <label className="block text-gray-700 mb-1">{day}</label>
                <input
                  type="time"
                  value={routine[teacher.id]?.[day] || ''}
                  onChange={(e) => handleRoutineChange(teacher.id, day, e.target.value)}
                  className="border rounded-md p-2 w-full"
                />
              </div>
            ))}
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
  );
}
