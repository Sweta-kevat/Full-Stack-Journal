import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import { ThemeProvider } from "./ThemeContext.jsx";
import StudentTable from "./components/StudentTable.jsx";
import StudentDetails from "./components/StudentDetails.jsx";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={() => navigate("/students")}>
        Go to Students
      </button>
    </div>
  );
}

function Contacts() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contacts Page</h1>

      <button onClick={() => navigate("/about")}>
        Go to About
      </button>
    </div>
  );
}

function Students() {
  return (
    <ThemeProvider>
      <div>
        <h1>Students Page</h1>

        <StudentTable />

        <br />

        <StudentDetails />
      </div>
    </ThemeProvider>
  );
}

function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>About Page</h1>

      <button onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/contacts">Contacts</Link> |{" "}
        <Link to="/students">Students</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/students" element={<Students />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;