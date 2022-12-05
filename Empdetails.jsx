import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import EmpdataAll from './EmpdataAll'
import Data from './Data'



const Empdetails = () => {
  return (
    <div className={styles.container}>
        <h3>Employee Empdetails Detailes</h3>
        <EmpdataAll employee={Data}/>
        <Link to="Empbirthday">Today Birthday</Link>
    </div>
  )
}

export default Empdetails