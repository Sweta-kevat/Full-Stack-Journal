import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import { useState } from "react"
import { StudentDetails } from "./StudentDetails"
import {BrowserRouter , Route , Routes,Link} from 'react-router-dom'
import Home from "./Home"
function App() {
     
  const [themes, setThemes] = useState("dark")
  const [text , setText] = useState("Sitaram")

  function HandleTextChange(t){
    setText(t.target.value)
  }

  function toggle() {
    setThemes(themes === "dark" ? "light" : "dark")
  }
  return (<>
    <ThemeContext.Provider value={{ themes, toggle }}>

      <StudentDetails></StudentDetails>
       
          <BrowserRouter>

            <nav>
            <Link to="/home">Home</Link><br />
            <Link to="/studentDetails">student</Link>
            </nav>
           <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/studentDetails" element={<StudentDetails/>}></Route>
          </Routes>
          </BrowserRouter>
         


    </ThemeContext.Provider>
    <input type="text" onChange={HandleTextChange} value={text}></input>
     <p>{text}</p> 
  </>)
}

export default App
