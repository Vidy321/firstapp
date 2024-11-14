import React, { useState } from 'react'
import ListItem from './ListItem'

function App() {
  let s=[{id:1,name:"miller"},{id:2,name:"jhon"},
    {id:3,name:"allen"},{id:4,name:"bablu"}
  ]

  let [students,setstudents]=useState(s);

  let updateStudents=()=>
  {
    setstudents([{id:5,name:"smith"},...students])
  }
  return (
    <>
      <ul>
      {students.map((student,index)=>
      {
        return <ListItem key={student.id} 
        student={student}/>
      })}
    </ul>
    <button onClick={updateStudents}>
      Update Students</button>
    </>
  )
}

export default App
