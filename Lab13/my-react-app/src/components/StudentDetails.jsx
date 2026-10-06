import { useRef } from "react";

function StudentDetails() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter student name"
      />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default StudentDetails;