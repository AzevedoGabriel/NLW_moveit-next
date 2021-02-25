import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCount } = useContext(CountDownContext)

    function handleChallengeSucess() {
        completeChallenge();
        resetCount();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCount();
    }

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
                            onClick={handleChallengeFailed}  
                        >
                            Falhei
                        </button>
                        <button 
                            type="button"
                            className={styles.chaSucessButton}
                            onClick={handleChallengeSucess}
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