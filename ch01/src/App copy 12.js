import './App.css';
import { useState } from 'react';

function App(){
  const [students, setStudents]=useState([
    {id: 1, name: "Alice", age: 21, height: 166},
    {id: 2, name: "Bob", age: 22, height: 175},
    {id: 3, name: "Charlie", age: 23, height: 156}
  ]);
  const [selectedStudent, setSelectedStudent]=useState(null);
  const [newStudent, setNewStudent]=useState({name: "", age: "", height: ""});

  return(
    <div style={{padding: "20px"}}>
      <h1>학생 목록</h1>
      <ul>
        {students.map((student)=>(
          <li key={student.id}>
            <button onClick={()=>setSelectedStudent(student)}>{student.name}</button>
          </li>
        ))}
      </ul>

      {selectedStudent && (
        <div>
          <h2>학생 정보</h2>
          <p>이름: {selectedStudent.name}</p>
          <p>나이: {selectedStudent.age}</p>
          <p>키: {selectedStudent.height}</p>
        </div>
      )}

      <div>
        <h2>새 학생 추가</h2>
        <input 
        type='text' 
        placeholder='이름' 
        value={newStudent.name}
        onChange={(e)=>{setNewStudent({...newStudent, name: e.target.value})}}
        />

        <input 
        type='number'
        placeholder='나이'
        value={newStudent.age}
        onChange={(e)=>{setNewStudent({...newStudent, age: e.target.value})}}
        />

        <input
        type='number'
        placeholder='키'
        value={newStudent.height}
        onChange={(e)=>{setNewStudent({...newStudent, height: e.target.value})}}
        />

        <button onClick={()=>{
          const newId=students.length+1;
          setStudents([...students, {id: newId, name: newStudent.name, age: newStudent.age, height: newStudent.height}]);
          setNewStudent({name: "", age: "", height: ""});
        }}>추가</button>
      </div>
    </div>

    
  );
}
export default App