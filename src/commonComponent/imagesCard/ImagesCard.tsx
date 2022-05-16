import { style } from '@mui/system'
import React from 'react'
import styles from "../../../styles/ImagesCards.module.css"

interface Card1Props{
  Card1:any;
 }
  const ImagesCard: React.FC<Card1Props> = ({Card1}: Card1Props) => {
  return (
    <div className={styles.maiContainer}>
        <img  className={styles.image}src={Card1.image} alt="image not found"/>
        <h1 className={styles.dateHeading}>{Card1.date}</h1>
        <p className={styles.description}>{Card1. description}</p>
        <div className={styles.display}>
        <p className={styles.read}>{Card1.read}</p>
        <img  className={styles.icon}src ={Card1.icon} alt="image not found"/>
           </div>
        </div>
        
  )
}

export default ImagesCard