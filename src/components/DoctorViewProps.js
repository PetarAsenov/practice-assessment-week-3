import React,{useState,useEffect} from 'react'
import axios from 'axios'



export default function PatientsDetails(props) {
  
  const [show, setShow] = useState(false)

  function showDetails(){
    props.show()
      setShow(!show)
    }
    

  return (
    <div>
      <button onClick={showDetails} >{show ?'hide details' : 'show details'}</button>
      <p>{show && props.patientInfo.map((patient) => {
        if (patient.id === props.id)
        return (
          <div>
            <p>email {patient.email}</p>
            <p>phone Number {patient.phoneNumber}</p>
            <p>gender {patient.gender}</p>
            <p>perscriptions</p>
            <ul>
              {patient.prescriptions.map(presc => <li>{presc}</li>)}
            </ul>
          </div>
          
        )
      })}</p>
    </div>
  )
}
