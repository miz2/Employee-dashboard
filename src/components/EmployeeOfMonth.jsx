import React from 'react';
import '../styles.css';
import Rakesh from "../assets/RakeshSharma.png"
const EmployeeOfMonth = () => {
  const name = "Rakesh Sharma";


  return (
    <>
      <h5>Employee of the Month</h5>
      <img className="employeeImage" src={Rakesh} alt={name} />
      <h6>{name}</h6>
      <p>UI/UX Designer</p>
    </>
  );
};

export default EmployeeOfMonth;
