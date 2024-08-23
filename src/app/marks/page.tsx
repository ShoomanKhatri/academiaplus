'use client';
import React, { useState } from 'react';

const students = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
  // Add more students as needed
];

const subjects = ['Networking', 'DSA', 'Java','Android','System Design'];

export default function MarksPage() {
  const [marks, setMarks] = useState<{ [studentId: number]: { [subject: string]: number } }>({});

  const handleMarksChange = (studentId: number, subject: string, value: number) => {
    setMarks((prevMarks) => ({
      ...prevMarks,
      [studentId]: {
        ...prevMarks[studentId],
        [subject]: value,
      },
    }));
  };

  const handleSubmit = () => {
    console.log('Marks Submitted:', marks);
    // Submit marks to the backend or handle it as required
  };

  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Enter Marks</h2>
      {students.map((student) => (
        <div key={student.id} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{student.name}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((subject) => (
              <div key={subject}>
                <label className="block text-gray-700 mb-1">{subject}</label>
                <input
                  type="number"
                  value={marks[student.id]?.[subject] || ''}
                  onChange={(e) => handleMarksChange(student.id, subject, parseInt(e.target.value))}
                  className="border rounded-md p-2 w-full"
                  min="0"
                  max="100"
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
        Submit Marks
      </button>
    </div>
  );
}
