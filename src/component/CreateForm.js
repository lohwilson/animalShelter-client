import React, { Component } from 'react'
import axios from 'axios'

class CreateForm extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			species: '',
			breed: '',
			sex: '',
			image: '',
			age: 0,
			adopted: true
		}
	}

	handleChange = (e) => {
		const { id, value } = e.target
		this.setState({ [id]: value })
	}

	handleChecked = (e) => {
		this.setState({
			adopted: !this.state.adopted
		})
		console.log(this.state.adopted)
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let data = { ...this.state }
			let headers = {

			}
			const res = await axios.post('https://animal-shelterzz.herokuapp.com/', data)
			console.log(res)
			if (res.data.success) {
				this.setState({
					name: '',
					species: '',
					breed: '',
					sex: '',
					image: '',
					age: 0,
					adopted: true
				})
			}

		} catch (err) {
			console.log(err.res)
		}
	}

	render() {
		return (
			<div className="row pb-5 pt-5" >
				<div className="col-md-6 m-auto">
					<div className="card card-body">
						<h1>Create Form</h1>
						<form onSubmit={this.handleSubmit}>
							<div className="form-group">
								<label htmlFor='name'>Name</label>
								<input
									type='text'
									id='name'
									value={this.state.name}
									onChange={this.handleChange}
									required
									className="form-control"
								/>
							</div>
							<div className="form-group">
								<label htmlFor='species'>Species</label>
								<input
									type='text'
									id='species'
									value={this.state.species}
									onChange={this.handleChange}
									required
									className="form-control"
								/>
							</div>
							<div className="form-group">
								<label htmlFor='breed'>Breed</label>
								<input
									type='text'
									id='breed'
									value={this.state.breed}
									onChange={this.handleChange}
									required
									className="form-control"
								/>
							</div>
							<div className="form-group">
								<label htmlFor='image'>Image</label>
								<input
									type='text'
									id='image'
									value={this.state.image}
									onChange={this.handleChange}
									required
									className="form-control"
								/>
							</div>
							<div className="form-group">
								<label htmlFor='age'>Age</label>
								<input
									type='number'
									id='age'
									value={this.state.age}
									onChange={this.handleChange}
									required
									className="form-control"
								/>
							</div>
							<div className="form-check">
								<input
									type='checkbox'
									id='adopted'
									defaultChecked={true}
									onChange={this.handleChecked}
									className="form-check-input"
								/>
								<label htmlFor='adopted' className="form-check-label">Adopted?</label>
							</div>
							<div className="form-group">
								<div className="form-check form-check-inline">
									<input type='radio'
										id='sex'
										value='Female'
										checked={this.state.sex === 'Female'}
										onChange={this.handleChange}
										className="form-check-input"
									/>
									<label htmlFor='sex' className="form-check-label" >Female </label>
								</div>
								<div className="form-check form-check-inline">
									<input type='radio'
										id='sex'
										value='Male'
										checked={this.state.sex === 'Male'}
										onChange={this.handleChange}
										className="form-check-input"
									/>
									<label htmlFor='sex' className="form-check-label"> Male </label>
								</div>
							</div>
							<button className="btn btn-primary">Create</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default CreateForm
