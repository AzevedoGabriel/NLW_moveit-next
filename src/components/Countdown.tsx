import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/Countdown.module.css';



export function Countdown() {
    const { 
        minutes,
        seconds, 
        hasFinished, 
        isActive, 
        startCount, 
        resetCount 
    } = useContext(CountDownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <div>
                    <span>:</span>
                </div>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    disabled      
                    className={styles.countButton}  
                >

                    Ciclo encerrado
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button
                            type="button" 
                            className={`${styles.countButton} ${styles.countButtonActive}`} 
                            onClick={resetCount}
                        >
        
                            Abandonar ciclo
                        </button>
                    ) : (           
                        <button
                            type="button" 
                            className={styles.countButton} 
                            onClick={startCount}
                        >
            
                            Iniciar um ciclo
                    </button>
                ) }
            </>
        )}        

        </div>
    );
}