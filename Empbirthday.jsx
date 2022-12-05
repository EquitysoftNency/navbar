import React from 'react'
import styles from './Home.module.css'
import Data from './Data'
import { Link } from 'react-router-dom'
import Empdata from './Empdata.jsx'


const Empbirthday = () => {
  return (
    <div className={styles.container}>
        <h3>Today Birthday</h3>
        <Empdata employee={Data}/>
        <Link to="Empdetails">Employee Details</Link>
    </div>
  )
}

export default Empbirthday