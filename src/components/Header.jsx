import styles from '../styles/Header.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.header__title}>Budget Calculator</h1>
			<p className={styles.header__description}>A simple app to calculate the total budget needed based on a set of entries.</p>
		</header>
	)
}

export default Header