import styles from '../styles/List.module.css'
import Item from './Item'

const List = ({ expenses }) => {
	return (
		<div className={styles.list}>
			{
				expenses?.map( ({id, title, amount}) => (
					<Item key={id} title={title} amount={amount} />
				))
			}
		</div>
	)
}

export default List