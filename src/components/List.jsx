import styles from '../styles/List.module.css'
import Item from './Item'

const List = ({ expenses, updateExpenses, clearExpenses}) => {
	return (
		<div className={styles.list}>
			<div className={styles.list__header}>
				<h3 className={styles.list__headerTitle}>Items</h3>

				{expenses.length > 0 && (
					<button className={styles.list__headerButton} onClick={clearExpenses}>Clear All</button>
				)}
			</div>
			{
				expenses.length ? (
					expenses.map( ({id, title, amount}) => (
						<Item key={id} id={id} title={title} amount={amount} handleDelete={updateExpenses} />
					))
				) : (
					<p className={styles.list__emptyText}>✎ No items in the list, Start adding ones!</p>
				)
			}
		</div>
	)
}

export default List