import React, { useState } from 'react';
import Layout from './Layout';

const students = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
];

const AttendancePage = () => {
  const [attendance, setAttendance] = useState<{ [key: number]: boolean }>({});

  const handleAttendanceChange = (id: number) => {
    setAttendance({ ...attendance, [id]: !attendance[id] });
  };

  const handleSubmit = () => {
    console.log('Attendance Submitted:', attendance);
    // Submit attendance to the backend
  };

  return (
    <Layout>
      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Take Attendance</h2>
        <ul>
          {students.map((student) => (
            <li key={student.id} className="mb-4 flex justify-between items-center">
              <span>{student.name}</span>
              <input
                type="checkbox"
                checked={attendance[student.id] || false}
                onChange={() => handleAttendanceChange(student.id)}
                className="h-5 w-5"
              />
            </li>
          ))}
        </ul>
        <button
          onClick={handleSubmit}
          className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
        >
          Submit Attendance
        </button>
      </div>
    </Layout>
  );
};

export default AttendancePage;
