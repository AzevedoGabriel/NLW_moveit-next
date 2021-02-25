import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/42748724?s=400&u=871fdf8597f2728b2d09e8f2a63dbb1997d0c654&v=4" alt="Gabriel Dantas"/>
            <div>
                <strong>Gabriel Dantas</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}