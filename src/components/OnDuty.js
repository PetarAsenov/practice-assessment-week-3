import React,{useState,useEffect} from 'react'
import { Switch, Route, Link, NavLink, useHistory, useParams} from "react-router-dom";
import  axios from "axios"
import Practice from './Practice'

export default function OnDuty() {
  const [searchState, setSearchState] = useState([])

  useEffect(()=>{
    async function fetchData() {
    const data = await axios.get('https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors')
    console.log('Test',data)
    setSearchState(data)
  } 
    fetchData()
    
  },[])
  return (
    <div>
      <Practice />
    </div>
  )
}
