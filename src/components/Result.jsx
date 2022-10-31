import styles from '../styles/Result.module.css'
import dollarize from '../utils/dollarize'

const Result = ({ expenses }) => {
	const total = expenses?.reduce( (acc, curr) => {
		return acc += parseInt(curr.amount)
	}, 0)

	return (
		<>
			{expenses.length > 0 && (
				<div className={styles.result}>
					<p className={styles.result__title}>Total</p>
					<p className={styles.result__total}>{dollarize(total)}</p>
				</div>
			)}
		</>
	)
}

export default Result