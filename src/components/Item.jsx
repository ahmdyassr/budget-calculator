import styles from '../styles/Item.module.css'

const Item = ({title, amount}) => {
	return (
		<div className={styles.item}>
			<div className={styles.item__content}>
				<p className={styles.item__title}>{title}</p>
				<p className={styles.item__amount}>{amount}</p>
			</div>
			<div className={styles.item__actions}>
			<button className={styles.item__action}>Edit</button>
				<button className={styles.item__action}>Delete</button>
			</div>
		</div>
	)
}

export default Item