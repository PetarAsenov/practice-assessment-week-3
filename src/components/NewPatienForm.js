import React,{useState} from 'react'

export default function NewPatienForm() {
  const [firstNameState, setFirstName] = useState('')
  const [lastNameState, setLastName] = useState('')
  const [emailState, setEmail] = useState('')
  const [phoneState, setPhone] = useState('')
  const [genderState, setGender] = useState('')
  const [dateOfBirthState, setDateOfBirth] = useState('')


  function submit() {
  console.log(`firstName: ${firstNameState}
  lastNameState: ${lastNameState}
  emailState: ${emailState}
  phoneState: ${phoneState}
  genderState: ${genderState}
  dateOfBirthState: ${dateOfBirthState}`)
  }


  return (
    <div>
      <form>
      <p style={{fontSize: "30px",
                 fontWeight: "bold"}}>Patient Signup</p>
        <div>
          <label htmlFor="firstName">first name</label>
          <input type="text" name="firstName" id="firstName" value={firstNameState} onChange={event => setFirstName(event.target.value)}/>
        </div>
        <div>
          <label htmlFor="lastName">last name</label>
          <input type="text" name="lastName" id="lastName" value={lastNameState} onChange={event => setLastName(event.target.value)}/>
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="text" name="email" id="email" value={emailState} onChange={event => setEmail(event.target.value)}/>
        </div>
        <div>
          <label htmlFor="phone">phone</label>
          <input type="text" name="phone" id="phone" value={phoneState} onChange={event => setPhone(event.target.value)}/>
        </div>
        <div>
          <label htmlFor="gender">gender</label>
          <select name="gender" id="gender" value={genderState} onChange={event => setGender(event.target.value)}>
            <option value="" disabled>select</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <div>
          <label htmlFor="dateOfBirth">date of birth</label>
          <input type="date" name="dateOfBirth" id="dateOfBirth" value={dateOfBirthState} onChange={event => setDateOfBirth(event.target.value)}/>
        </div>
      </form>
      <button onClick={submit}>Submit</button>
    </div>
  )
}
