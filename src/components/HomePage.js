import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import Practice from './Practice'

export default function HomePage() {
  return (
    <div>
      <Practice />
      <div className="mb-1" >
        <Link to="/signup"><Button  style={{width: "180px"}}>I am a new patient</Button></Link>
      </div>         
      <div>
        <Link to="/onduty"><Button style={{width: "180px"}}>Who is on duty</Button></Link>
      </div>
      
      
    </div>
  )
}
