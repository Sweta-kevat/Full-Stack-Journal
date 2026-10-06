import StudentRow from "./StudentRow.jsx";

function StudentTable() {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Theme</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <StudentRow />
      </tbody>
    </table>
  );
}

export default StudentTable;