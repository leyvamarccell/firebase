import Balance from "./Components/Balance"
import Button from "./Components/Button"
import ButtonLogin from "./Components/ButtonLogin"
import Card from "./Components/Card"

import styles from './page.module.css'

const App = () => { 

  return (
    <> 
    <div className={styles.h1}>
    <h1>Ganar dinero nunca había sido tan fácil...</h1>  
    </div>
<div className={styles.h3}>
<h3 >Registrarse</h3>
</div>
    
  <div className={styles.button}>
    <ButtonLogin text='Google' image='https://www.svgrepo.com/show/452216/google.svg' />
    <ButtonLogin text='Facebook' image='https://www.svgrepo.com/show/448224/facebook.svg' />
  </div>
    <div className={styles.balance}>
      <Balance/>
    </div>
    <div className={styles.card}>
    <Card src="https://www.svgrepo.com/show/474356/join-membership.svg" price="$50" text=''/>
      <Card src="https://www.svgrepo.com/show/474369/championship-trophy.svg" price="$200" text=''/>
      <Card src="https://www.svgrepo.com/show/474370/crown-user.svg" price="$500" text=''/>
    </div>
  <div className={styles.button}>
    <Button text='Depositar'/>
    <Button text='Retirar'/>
  </div>
  <div className={styles.card}>
  <Card src="https://bitremesas.com/images/author-3.png" price="Yamilet Rodiguez" text='La verdad me he quedado maravillada de la rapidez y la efectividad. Pero además me atreví a escribir directamente a uno de los fundadores porque tuve mis dudas al enviar en la pagina (primera vez imagínense), y me respondió enseguida aclarándome las dudas, hasta me avisó que ya mi familia podía revisar. La verdad que totalmente recomendado. No les voy a negar que al principio estaba muerta de miedo. Gran trabajo, los felicito y sin dudas seguiré con uds.'/>

  </div>
    </>
  )
}

export default App