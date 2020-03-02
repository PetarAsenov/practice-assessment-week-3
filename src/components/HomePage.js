import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      <Link to="/signup"><Button>I am a new patient</Button></Link>
      <Link to="/onduty"><Button>Who is on duty</Button></Link>
    </div>
  )
}
