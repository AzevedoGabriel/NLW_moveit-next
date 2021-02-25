import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

    return (
        <div className={styles.chaBoxContainer} >
            {  activeChallenge ? (
                <div className={styles.chaBoxActive}>
                    <header>Ganhe {activeChallenge.amount}</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                         <strong>Novo Desafio</strong>
                         <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={styles.chaFailedButton}
                            onClick={resetChallenge}  
                        >
                            Falhei
                        </button>
                        <button 
                            type="button"
                            className={styles.chaSucessButton}
                                
                        >
                            Completei
                        </button>
                    </footer>
                 </div>
            ) : (
                 <div className={styles.chaBoxNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level up" />
                        Avance de level completando desafios.
                    </p>
                </div>
            )}
        </div>
    )
}