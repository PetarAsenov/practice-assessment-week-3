import React,{useState} from 'react'

export default function PatientsDetails(props) {
  
  const [show, setShow] = useState(false)

  function showDetails(){ 
      setShow(!show)
    }

  return (
    <div className="patientBox">
      <div>
        <p>name {props.firstName} {props.lastName}</p>
        <p>id {props.id}</p>
        <p>date of birth {props.dateOfBirth}</p>
      </div>   
      {show && 
      <div>
        <p>email {props.email}</p>
        <p>phone Number {props.phoneNumber}</p>
        <p>gender {props.gender}</p>
        <p>prescriptions</p>
        {props.prescriptions.map((presc,index) => {
          return <li key={index}>{presc}</li>})
        }
      </div>
      }
      <button onClick={showDetails} >{show ?'hide details' : 'show details'}</button>
    </div>
  )
}
