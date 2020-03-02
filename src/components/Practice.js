import React from 'react'

export default function Practice() {
 
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  // console.log(hours,minutes)
  function isOpen() {
    if(hours >= 8 && hours < 17) {
      return 'open'
    } else {
      return 'closed'
    }
  }

  return (
    <div>
      <p style={{fontSize: "30px",
                 fontWeight: "bold"}}>Welcome to AMS GPs</p>
      <p>We are: {isOpen()}</p>  
      <p>To make an appoinment</p> 
      <p>call: 020 555 5555</p>

    </div>
  )
}
