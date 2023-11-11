import React from 'react';

const students = [
  {
    id: 1,
    name: 'su',
  },
  {
    id: 2,
    name: 'kyung',
  },
  {
    id: 3,
    name: 'susu',
  },
  {
    id: 4,
    name: 'kkang',
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {
        students.map((student) => {
          return <li key={`student-id-${student.id}`}>{student.name}</li>
        })
      }
    </ul>
  )
}

export default AttendanceBook;