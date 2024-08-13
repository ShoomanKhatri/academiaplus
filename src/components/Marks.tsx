import React, { useState } from 'react';
import Layout from './Layout';

const students = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
];

const MarksPage = () => {
  const [marks, setMarks] = useState<{ [key: number]: number }>({});

  const handleMarksChange = (id: number, value: number) => {
    setMarks({ ...marks, [id]: value });
  };

  const handleSubmit = () => {
    console.log('Marks Submitted:', marks);
    // Submit marks to the backend
  };

  return (
    <Layout>
      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Enter Marks</h2>
        <ul>
          {students.map((student) => (
            <li key={student.id} className="mb-4 flex justify-between items-center">
              <span>{student.name}</span>
              <input
                type="number"
                value={marks[student.id] || ''}
                onChange={(e) => handleMarksChange(student.id, parseInt(e.target.value))}
                className="border rounded-md p-2 w-24"
              />
            </li>
          ))}
        </ul>
        <button
          onClick={handleSubmit}
          className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
        >
          Submit Marks
        </button>
      </div>
    </Layout>
  );
};

export default MarksPage;
