import { useEffect,useState } from "react"


function App() {
  const[count,setCount]= useState(0)
  const[sub,setSub]= useState(0)
  // // // first type
  //  useEffect(()=>{
  //    console.log("First use effect")
  //  },
  // []
  //   )
  //  // Second Type
  //  useEffect(()=>{
  //  document.title ="Learning USe Effect" + count
  //  },
  // [count])

  // THird type
  useEffect(()=>{
    console.log("third use effect was called")
  })

  return (
   <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>+</button>
    <h1>{sub}</h1>
    <button onClick={()=>setSub(sub+1)}>+</button>
    </> 
   
 
  )
}
 
export default App
