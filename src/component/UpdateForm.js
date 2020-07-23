import React, { Component } from 'react'
import axios from 'axios'

class UpdateForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            species: '',
            breed: '',
            sex: '',
            image: '',
            age: 0,
            adopted: true,
        }
    }

    handleChange = (e) => {
        const { id, value  } = e.target
        this.setState({ [id]: value })
    }

    handleChecked = (e) => {
        this.setState({
            adopted: !this.state.adopted
        })
        console.log(this.state.adopted)
    }


    handleSubmit = async (e) => {
        try {
            e.preventDefault()
            let data = {...this.state}
            const res = await axios.put(`https://animalshelter-backend.herokuapp.com/${this.props.match.params.index}`, data)
            if (res.data.success) {
                this.props.history.push('/')
            }
            
        } catch (err) {
            console.log(err.res)
        }
    }

    render() {
        console.log(this.props.match.params.index)
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    id='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                />
                <br />
                <label htmlFor='species'>Species</label>
                <input
                    type='text'
                    id='species'
                    value={this.state.species}
                    onChange={this.handleChange}
                    required
                />
                <br />
                <label htmlFor='breed'>Breed</label>
                <input
                    type='text'
                    id='breed'
                    value={this.state.breed}
                    onChange={this.handleChange}
                    required
                />
                <br />
                <label htmlFor='sex'>Female</label>
                <input type='radio' 
                    id='sex'
                    value = 'Female'
                    checked = {this.state.sex === 'Female'}
                    onChange = {this.handleChange}
                />
                <br />
                <label htmlFor='sex'>Male</label>
                <input type='radio' 
                    id='sex'
                    value = 'Male'
                    checked = {this.state.sex === 'Male'}
                    onChange = {this.handleChange}
                />
                <br />
                <label htmlFor='image'>Image</label>
                <input
                    type='text'
                    id='image'
                    value={this.state.image}
                    onChange={this.handleChange}
                    required
                />
                <br />
                <label htmlFor='age'>Age</label>
                <input
                    type='number'
                    id='age'
                    value={this.state.age}
                    onChange={this.handleChange}
                    required
                />
                <br />
                <label htmlFor='age'>Adopted?</label>
                 <input
                    type='checkbox'
                    id='adopted'
                    defaultChecked={true}
                    onChange={this.handleChecked}
                />
                <br />
                <button>Create</button>
            </form>
        )
    }
}

export default UpdateForm