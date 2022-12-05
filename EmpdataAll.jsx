import React from 'react'
import styles from './Home.module.css'

const EmpdataAll = ({employee}) => {
    console.log(employee);
  return employee.map((item) => {
    const {id,name,dob,gender,image}= item
    return(

        <div key={id} className={styles.person}>
           <img src={image} alt={name}/>
           <div className={styles.emp_details}>
            <h4>{name}</h4>
            <p>Gender:{gender}</p>
            <p>DOB:{dob}</p>
            
           </div>
        </div>
    )
  })
    
  
}

export default EmpdataAll