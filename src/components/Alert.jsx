import styles from '../styles/Alert.module.css'

const Alert = ({isShown, message}) => {
	return (
		<div className={`${styles.alert} ${ isShown ? styles.isShown : ''}`}>
			<p className={styles.alert__title}>{message}</p>
		</div>
	)
}

export default Alert