import React from 'react'

function ShowCompo(props) {
    return (
        <div className="card name" >
            <img src={props.animal.image} alt="img" className="card-img-top"/>
            <div className="card-header">
                Species: {props.animal.species}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Name: {props.animal.name}</li>
                <li className="list-group-item">Breed: {props.animal.breed}</li>
                <li className="list-group-item">Sex: {props.animal.sex}</li>
                <li className="list-group-item">Age: {props.animal.age}</li>
                <li className="list-group-item">Adopted: {props.animal.adopted ? 'Yes' : "No"}</li>
            </ul>
            <button type="button"
                className="btn btn-danger"
                onClick={props.handleDelete}>
                Delete
            </button>
            <button type="button"
                className="btn btn-warning"
                onClick={props.handleUpdate}>
                Update
            </button>
        </div>

    )
}

export default ShowCompo