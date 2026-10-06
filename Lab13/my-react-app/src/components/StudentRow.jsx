import { useContext } from "react";
import { ThemeContext } from "../ThemeContext.jsx";

function StudentRow() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <tr>
      <td>John</td>
      <td>20</td>
      <td>{theme}</td>
      <td>
        <button onClick={() => setTheme("dark")}>Dark</button>
        <button onClick={() => setTheme("light")}>Light</button>
      </td>
    </tr>
  );
}

export default StudentRow;