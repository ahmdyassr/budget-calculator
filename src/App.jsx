import './styles/global.css'
import { useState } from 'react'
import Container from './components/Container'
import Alert from './components/Alert'
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'
import Result from './components/Result'
import { v4 as uuid } from 'uuid'

const App = () => {
	const [alertState, setAlertState] = useState(false)
	const [expenses, setExpenses] = useState([])

	function handleSubmit(e) {
		e.preventDefault()

		const title = e.target.elements.title.value
		const amount = e.target.elements.amount.value
		const id = uuid()

		if (title.length !== 0 && amount.length !== 0) {
			setExpenses(prevState => [...prevState, {
				id,
				title,
				amount
			}])
		}
	}

	function handleUpdate(id) {
		const updatedExpenses = expenses.filter( item => item.id !== id)
		setExpenses(updatedExpenses)
	}

	function handleClear() {
		setExpenses([])
		handleAlert()
	}

	function handleAlert() {
		setAlertState(true)

		setTimeout(() => {
			setAlertState(false)
		}, 3000)
	}

	return (
		<Container>
			<Alert message='All items were deleted!' isShown={alertState}/>
			<Header />
			<Form handleSubmit={handleSubmit} />
			<List 
				expenses={expenses} 
				updateExpenses={handleUpdate}
				clearExpenses={handleClear} 
				handleAlert={handleAlert} />
			<Result expenses={expenses} />
		</Container>
	)
}

export default App