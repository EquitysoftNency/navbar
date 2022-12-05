import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className={styles.main}>
    <div className={styles.container}>
        <h3>Employee Birthday</h3>
        {/* <a href="/empdetails">Employee Details</a> */}
        <Link to="/empdetails">Employee Details</Link><br/>
        <Link to="/empbirthday">Today Birthday</Link>
    </div>
    </div>
  )
}

export default Home