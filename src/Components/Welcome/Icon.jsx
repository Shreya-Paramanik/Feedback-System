import React from 'react'
import styles from './Welcome.module.css'
export default function Icon({icon:Icon,color,size,bgColor}) {
  return (
    <div className={styles.icon_div2} style={{backgroundColor: bgColor}}>
      <Icon style={{color: color,fontSize: size}}/> 
    </div>
   )
}
 