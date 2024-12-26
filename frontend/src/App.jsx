import React,{useEffect,useState} from 'react'
import axios from "axios"    //here axios is used to fetch the api from server
const App = () => {
  const [getData,setData]=useState([])
  const fetchAPI= async ()=>{
    const response=await axios.get("http://localhost:5000/api")
    setData(response.data.users)
  }
  useEffect(()=>{
    fetchAPI()
    },[])
  return (
    <div>
      {getData.map((value,i)=>(
        <p key={i}>{value}</p>
      ))}
    </div>
  )
}

export default App