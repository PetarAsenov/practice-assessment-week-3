import React,{useState,useEffect} from 'react'
import axios from 'axios'
import PatientDetails from './DoctorViewProps'

export default function DoctorView() {

  const [doctorInfo, setDoctorInfo] = useState('Loading')
  const [selectDoctor, setSelectDoctor] = useState('')

  function compare_name(patient_a, patient_b) {
    return patient_a.lastName.localeCompare(patient_b.lastName);
  }

  useEffect(()=>{
    async function fetchDoctorData() {
    const data = await axios.get('https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors')
    setDoctorInfo(data.data)
  } 
    fetchDoctorData()
    
  },[])
  console.log('Test',doctorInfo)


  const [patientInfo, setPatientInfo] = useState('Loading')

  useEffect(()=>{
    async function fetchPatientData() {
    const data = await axios.get('https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients')
    setPatientInfo(data.data.sort(compare_name))
    
  } 
    fetchPatientData()
    
  },[])
  console.log('Test doctor',doctorInfo)
  console.log('Test patient',patientInfo)

//   id: "5856675843"
// firstName: "Milt"
// lastName: "Rosenbaum"
// gender: "Male"
// dateOfBirth: "15/01/2005"
// email: "mrosenbaum0@fastcompany.com"
// phoneNumber: "+351 161 160 5674"
// prescriptions: ["Lidocaine Viscous"]
// doctorId: 1

 

  return (
    <div>
      <p style={{fontSize: "30px",
                 fontWeight: "bold"}}>Patient database</p>
      <div>
        <span>Doctor </span>
        <select name="doctor" id="doctor" value={selectDoctor} onChange={event => setSelectDoctor(event.target.value)}>
          <option value="" disabled>select</option>
          {doctorInfo === 'Loading'
            ? doctorInfo
            : doctorInfo.map(doctor => <option key={doctor.id} value={doctor.doctor}>{doctor.doctor}</option>)}
        </select>
      </div> 
      
      {patientInfo === 'Loading'
      ? patientInfo
      : patientInfo.map(patient => {
        return (
          <div className="patientBox" key={patient.id}>
            <p>name {patient.firstName} {patient.lastName}</p>
            <p>id {patient.id}</p>
            <p>date of birth {patient.dateOfBirth}</p>
            
            <PatientDetails patientInfo={patientInfo} id={patient.id} show={()=>patient.id}/>
          </div>
          
        )
      })}
    </div>
  )
}
