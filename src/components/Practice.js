import React from 'react'

export default function Practice() {
 
  const date = new Date()
  const hours = date.getHours()
  
  function isOpen() {
    if(hours >= 8 && hours < 17) {
      return 'open'
    } else {
      return 'closed'
    }
  }

  return (
    <div>
      <p>We are: {isOpen()}</p>  
      <p>To make an appoinment</p> 
      <p>call: 020 555 5555</p>
    </div>
  )
}
