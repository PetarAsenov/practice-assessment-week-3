import React,{useState} from 'react'

export default function PatientsDetails(props) {
  
  const [show, setShow] = useState(false)

  function showDetails(){ 
      setShow(!show)
    }

  return (
    <div className="patientBox">
        {props.patientInfo.map((patient) => {
        if (patient.id === props.id){
        return (
          <div  key={patient.id}>
            <p>name {patient.firstName} {patient.lastName}</p>
            <p>id {patient.id}</p>
            <p>date of birth {patient.dateOfBirth}</p>
          </div>
        )}})
        }   
      <button onClick={showDetails} >{show ?'hide details' : 'show details'}</button>
      {show && props.patientInfo.map((patient) => {
        if (patient.id === props.id)
        return (
          <div key={patient.id}>
            <p>email {patient.email}</p>
            <p>phone Number {patient.phoneNumber}</p>
            <p>gender {patient.gender}</p>
            <p>prescriptions</p>
              {patient.prescriptions.map(presc => <li key={patient.id + presc}>{presc}</li>)}
          </div>
          
        )
      })}
    </div>
  )
}
