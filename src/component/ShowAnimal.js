import React, { Component } from 'react'
import axios from 'axios'
import ShowCompo from './ShowCompo'
import CreateForm from './CreateForm'

class ShowAnimal extends Component {
	constructor() {
		super()
		this.state = {
			animal: []
		}
	}

	async getData() {
		try {
			const res = await axios.get('https://animal-shelterzz.herokuapp.com/')
			console.log(res.data)
			this.setState({
				animal: res.data.data
			})
			console.log(this.state.animal)
		} catch (err) {
			console.log(err.res)
		}
	}

	componentDidMount() {
		this.getData()
	}

	handleDelete = async (id) => {
		try {
			console.log(id)
			const res = await axios.delete(`https://animal-shelterzz.herokuapp.com/${id}`)
			this.getData()
		} catch (err) {
			console.log(err.res)
		}
	}

	handleUpdate = (id) => {
		this.props.history.push(`/animalShelter-client/${id}`)
	}

	render() {

		return (
			<div className='container'>
				<h1>Animals Up for Adoption</h1>
				<div className="container row">
					{this.state.animal.map(elem => {
						return (
							<ShowCompo
								animal={elem}
								key={elem._id}
								handleDelete={() => this.handleDelete(elem._id)}
								handleUpdate={() => this.handleUpdate(elem._id)}
							/>
						)
					})}
				</div>
				<CreateForm />
			</div>
		)
	}
}

export default ShowAnimal
