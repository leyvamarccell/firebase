import styles from './buttonLogin.module.css'

export default function ButtonLogin({text, image, color}) {
  return (
    <button  style={{backgroundColor: color}} className={styles.button}><img height={20} width={20} src={image} alt="" /></button>
  )
}
