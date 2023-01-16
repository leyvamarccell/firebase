import React from 'react'
import styles from './Card.module.css'

export default function Card({src, price, text}) {
  return (
<>
<div className={styles.container}>
<div className={styles.imgContainer}>
<img src={src} className={styles.img} height={60} width={60} alt="" />
</div>
<div className={styles.textContainer}>
    <h2 className={styles.Title}>{price}</h2>
</div>
<p>{text}</p>
</div>
</>
  )
}
