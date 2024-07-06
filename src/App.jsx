
import { useState } from "react"
function App() {
const [count,setCount]=useState(0)
const [name,setName]= useState("Abhesh")
const [real,nickName] =useState("jenisha")


 
  return (
    <>
      <h1>{count}</h1>
      <p>hello</p>
      
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
      <h1>{name}</h1>
      <button onClick={()=>setName("Mandal")}>Change Name</button>
    <h1>{real}</h1>
    <button onClick={()=>nickName("Tamang")}>nickName</button>
      </>
 
  )
}
 
export default App
