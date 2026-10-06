import { useState } from "react";
import StudentCard from "./StudentCard";

function StudentList() {
  const [uiCount, setUiCount] = useState(0);
  const [inspectCount, setInspectCount] = useState(0);

  const students = [
    {
      id: 1,
      rollNo: 101,
      name: "Rahul",
      age: 20,
      class: "BCA",
      course: "Computer Science",
    },
    {
      id: 2,
      rollNo: 102,
      name: "Priya",
      age: 21,
      class: "BCA",
      course: "Information Technology",
    },
    {
      id: 3,
      rollNo: 103,
      name: "Amit",
      age: 19,
      class: "BCA",
      course: "Computer Engineering",
    },
  ];

  const render = [];

  for (let i = 0; i < students.length; i++) {
    render.push(
      <StudentCard
        key={students[i].id}
        rollNo={students[i].rollNo}
        name={students[i].name}
        age={students[i].age}
        class={students[i].class}
        course={students[i].course}
      />
    );
  }

  return (
    <div>
      {/* First button - changes on UI */}
      <button onClick={() => setUiCount(uiCount + 1)}>
        {uiCount}
      </button>

      {/* Second button - UI stays 0 */}
      <button
        data-count={inspectCount}
        onClick={() => setInspectCount(inspectCount + 1)}
      >
        0
      </button>

      {render}
    </div>
  );
}

export default StudentList;
