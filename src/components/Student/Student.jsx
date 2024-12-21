import React from 'react'
import './student.css'

const Student = ({ stdName = "Guest", stdAge = 0, stdStatus = false }) => {

    return (

      <div className='Std-Div'>
        <h2>Student Name: {stdName}</h2>
        <h3>Student Age: {stdAge}</h3>
        <h4>Student Status: {stdStatus ? "True" : "False"}</h4>
      </div>

    )

}

export default Student
