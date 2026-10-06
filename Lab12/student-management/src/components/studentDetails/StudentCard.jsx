function StudentCard({ rollNo, name, age, class: studentClass, course }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>

      <p>Roll No: {rollNo}</p>
      <p>Age: {age}</p>
      <p>Class: {studentClass}</p>
      <p>Course: {course}</p>
    </div>
  );
}

export default StudentCard;
