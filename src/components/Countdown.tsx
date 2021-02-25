import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css';

let countTimeout: NodeJS.Timeout;

export function Countdown() {
const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCount() {
        setIsActive(true);
    }

    function resetCount() {
        clearTimeout(countTimeout);
        setIsActive(false);
        setTime(0.05 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time == 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);

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