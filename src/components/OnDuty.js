import React,{useState,useEffect} from 'react'
import { Switch, Route, Link, NavLink, useHistory, useParams} from "react-router-dom";
import  axios from "axios"
import Practice from './Practice'

export default function OnDuty() {
  const [doctorInfo, setDoctorInfo] = useState('Loading')

  useEffect(()=>{
    async function fetchData() {
    const data = await axios.get('https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors')
    setDoctorInfo(data.data)
  } 
    fetchData()
    
  },[])
  console.log('Test',doctorInfo)

  return (
    <div>
      <p style={{fontSize: "30px",
                 fontWeight: "bold"}}>Who is on duty</p>
      {doctorInfo === 'Loading'
      ? doctorInfo
      : <div>
          <table className="dutyTable">
            <thead className="dutyTableHead">
              <tr>
                <th>Doctor</th>
                <th>Availability</th>
              </tr>                
            </thead> 
            {doctorInfo.map((doctor, index) => {
                return( 
                  <tbody key={index}>
                    <tr  className="dutyTableRow">
                      <td >{doctor.doctor}</td>
                      <td >{doctor.onDuty ? 'on duty' : 'off duty'}</td>
                    </tr>
                  </tbody>

                )})
            }
          </table>
        </div>
      }  
      <Practice />
    </div>
  )
}
