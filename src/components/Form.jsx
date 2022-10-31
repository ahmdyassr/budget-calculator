import styles from '../styles/Form.module.css'
import { useState } from 'react'

const Form = () => {
	const [chargeState, setChargeState] = useState({
		title: '',
		amount: null
	})

	function handleSubmit(e) {
		e.preventDefault()
		setChargeState({
			title: e.target.elements.title.value,
			amount: e.target.elements.amount.value
		})
	}
	
	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.form__inputs}>
				<input className={styles.form__input} name='title' type='text' placeholder='Charge title' />
				<input className={styles.form__input} name='amount' type='number' placeholder='Amount' />
			</div>
			<button className={styles.form__button} type='submit'>Add</button>
		</form>
	)
}

export default Form