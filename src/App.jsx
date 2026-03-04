import axios from 'axios'
import { useEffect, useState } from 'react';
const App = () => {

  const departmentSchema =  {
  district_name : "",
  departments_name : "",
  subcatagory: "",
  members_count : "",
  department_code:"",
  }

  const [data,setData] = useState(departmentSchema)
  const [msg,setMsg] = useState("") 
  const [response,setResponse] = useState({})
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
     setData({
       district_name : "Chennai",
       departments_name : "Education",
       subcatagory: "Schools",
       members_count : 2000,
       department_code:900
     })
  },[])

  // SEND DATA TO BACKEND USING AXIOS
  const handleClickAxios = async()=>{
    setLoading(true)
    try {
      const sendData = { name: "React", age: 25 }
      console.log("Sending to Backend:", sendData)
      
      const fetchdata = await axios.post("http://localhost:5000/api/request/createdata", sendData);
      console.log(" Response from Backend:", fetchdata.data)
      
      setResponse(fetchdata.data)
      setMsg("Data sent successfully with Axios!")
      
    } catch (error) {
      console.log('Error occurred:', error);
      setMsg("Error: " + error.message)
    } finally {
      setLoading(false)
    }
  }

  // SEND DATA TO BACKEND USING FETCH
  const handleClickFetch = async()=>{
    setLoading(true)
    try {
      const sendData = { name: "React", age: 30 }
      console.log(" Sending to Backend:", sendData)
      
      const fetchdata = await fetch("http://localhost:5000/api/request/createdata", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sendData)
      });
      
      const data = await fetchdata.json()
      console.log(" Response from Backend:", data)
      
      setResponse(data)
      setMsg("Data sent successfully with Fetch!")
      
    } catch (error) {
      console.log(' Error occurred:', error);
      setMsg(" Error: " + error.message)
    } finally {
      setLoading(false)
    }



  }

  return (
    <>
    <h1 style={{textAlign:"center",padding:"10px", color:"#2c3e50"}}>
      Form Handling using API through Backend
    </h1>
   
    <div style={{padding:"20px", textAlign:"center", backgroundColor:"#ecf0f1", borderRadius:"8px", margin:"10px"}}>
      <h2>Send Data to Backend</h2>
      <button 
        onClick={handleClickAxios} 
        style={{
          padding:"10px 20px", 
          margin:"5px", 
          backgroundColor:"white", 
          color:"black",
          border:"none",
          borderRadius:"5px",
          cursor:"pointer",
          fontSize:"16px"
        }}
        disabled={loading}
      >
        {loading ? "Loading..." : "Send with Axios"}
      </button>
      
      <button 
        onClick={handleClickFetch} 
        style={{
          padding:"10px 20px", 
          margin:"5px", 
          backgroundColor:"white", 
          color:"black",
          border:"none",
          borderRadius:"5px",
          cursor:"pointer",
          fontSize:"16px"
        }}
        disabled={loading}
      >
        {loading ? "Loading..." : "Send with Fetch"}
      </button>
    </div>

    {/* Display Status Message */}
    <div style={{padding:"15px", margin:"10px", backgroundColor:"#fff9e6", borderRadius:"5px", border:"1px solid "}}>
      <h3>Status: {msg}</h3>
    </div>

    {/* Display Backend Response */}
    <div style={{padding:"15px", margin:"10px", backgroundColor:"#e8f5e9", borderRadius:"5px", border:"1px solid "}}>
      <h3>Backend Response:</h3>
      <pre style={{backgroundColor:"#f5f5f5", padding:"10px", borderRadius:"5px", overflowX:"auto"}}>
        {JSON.stringify(response, null, 2)}
      </pre>
    </div>

    </>
  )
}

export default App