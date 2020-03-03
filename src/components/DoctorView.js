import React,{useState,useEffect} from 'react'
import axios from 'axios'
import PatientDetails from './PatientsDetails'

export default function DoctorView() {

  const [doctorInfo, setDoctorInfo] = useState('Loading')
  const [selectDoctor, setSelectDoctor] = useState('all')

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

  const [patientInfo, setPatientInfo] = useState('Loading')

  useEffect(()=>{
    async function fetchPatientData() {
    const data = await axios.get('https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients')
    setPatientInfo(data.data.sort(compare_name))
    
  } 
    fetchPatientData()
    
  },[])
  
  const arrayPatient = patientInfo === 'Loading'
  ? []
  : [...patientInfo].filter((patient) => {
    if(selectDoctor === 'all'){
      return patient
    } else if(patient.doctorId == selectDoctor) {
      return patient
    }
  })
  
  return (
    <div>
      <p style={{fontSize: "30px",
                 fontWeight: "bold"}}>Patient database</p>
      <div>
        <span>Doctor </span>
        <select name="doctor" id="doctor" value={selectDoctor} onChange={event => setSelectDoctor(event.target.value)}>
          <option value="all" >all</option>
          {doctorInfo === 'Loading'
            ? doctorInfo
            : doctorInfo.map(doctor => <option key={doctor.id} value={doctor.id}>{doctor.doctor}</option>)}
        </select>
      </div> 
      
      {patientInfo === 'Loading'
      ? patientInfo
      : arrayPatient.map((patient,index) => {
        return    <PatientDetails key={index} patientInfo={arrayPatient} id={patient.id} />       
      })}
    </div>
  )
}
