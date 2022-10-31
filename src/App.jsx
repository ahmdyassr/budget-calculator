import './styles/global.css'
import { useState } from 'react'
import Container from './components/Container'
import Alert from './components/Alert'
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'
import Result from './components/Result'
import expensesData from './data/expenses'

const App = () => {
	const [expenses, setExpenses] = useState(expensesData)
	const total = expenses.reduce( (acc, curr) => {
		return acc += curr.amount
	}, 0)

	return (
		<Container>
			<Alert />
			<Header />
			<Form />
			<List expenses={expenses} />
			<Result total={total} />
		</Container>
	)
}

export default App