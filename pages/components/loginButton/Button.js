import styles from './Button.module.css'


const Button = () => {
    return (
        <button
        type="button"
        className={styles.buttonLogin} >
            Login
        </button>
    )
}

export default Button