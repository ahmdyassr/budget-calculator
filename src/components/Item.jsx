import styles from '../styles/Item.module.css'
import dollarize from '../utils/dollarize'

const Item = ({id, title, amount, handleDelete}) => {
	return (
		<div className={styles.item}>
			<div className={styles.item__content}>
				<p className={styles.item__title}>{title}</p>
				<p className={styles.item__amount}>{dollarize(amount)}</p>
			</div>
			<div className={styles.item__actions}>
				<button className={styles.item__action} onClick={() => handleDelete(id)}>Delete</button>
			</div>
		</div>
	)
}

export default Item