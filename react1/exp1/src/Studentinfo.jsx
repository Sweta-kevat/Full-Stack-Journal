

function Studentinfo(props){
  
   
  const student1 = { name : "Sitaram Gawas" , RollNo : "2408033", Year : "TYBCA"}
  const student2 = { name : "Samarth patil" , RollNo : "2408026", Year : "TYBCA"}
  const student3 = { name : "Shiwang Sharma" , RollNo : "2408031", Year : "TYBCA"}
    propsArray = {}
   propsArray.push(props)


    return(<>
        <h1>{propsArray.map(element => <li>{element.name}</li>)}</h1>
    </>)
}
export default Studentinfo;