import React from 'react'
import styles from "../../../styles/Card.module.css";
import { Design } from '../../constants/Constant';
interface DesignProps{
 Design:any;
}
const DesignCard: React.FC<DesignProps> = ({Design}: DesignProps) => {
  return (
    <div className={styles.display}>
      <div>
       <a href='/BlogPagesDetails'> <img className={styles.image} src={Design.image} alt="image not found" /></a>
      </div>
      <div className={styles.cardItem}>
        <h1 className={styles.dateHeading}>{Design.date} </h1>
        <p className={styles.description}> {Design.description}</p>
        <div className={styles.display1}>
          <p className={styles.read}>{Design.read}</p>
          <img className={styles.icon} src={Design.icon} alt="icon not found" />
        </div>

      </div>
    </div>
  )
}

export default DesignCard