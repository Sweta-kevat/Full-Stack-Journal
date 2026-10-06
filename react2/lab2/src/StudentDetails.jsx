import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function StudentDetails() {
    let themeContext = useContext(ThemeContext)
    const student =
        [{ name: "sitaram", Rollno: "2408033" }
            , { name: "Shiwang", Rollno: "2408031" }]
    return (<>
        <table>
            <thead>

                <tr>
                    <th>Theme</th>
                    <th>Name</th>
                    <th>Rollno</th>
                    <th>Toggle</th>
                </tr>
            </thead>

            <tbody>

                {student.map((element, index) => 
                    <tr key={index}>
                        <td>{themeContext.themes}</td>
                        <td >{element.name}</td>
                        <td >{element.Rollno}</td>
                        <td><button className="btn" onClick={() => themeContext.toggle()}>Toggle</button></td>
                    </tr>

                )}
            </tbody>



        </table>


    </>)
}
export { StudentDetails }