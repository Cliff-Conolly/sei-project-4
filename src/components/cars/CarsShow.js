import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

class CarsShow extends React.Component {
  constructor() {
    super()

    this.state = { car: null }
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    console.log('mounted')
    axios.get(`/api/cars/${this.props.match.params.id}`)
      .then(res => this.setState({ car: res.data }))
      .catch(err => console.log(err))
  }

  handleDelete() {
    axios.get(`/api/cars${this.props.match.params.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/cars'))
      .catch(err => console.log(err.response))
  }

  // Don't need for now
  // isOwner() {
  //   return Auth.getPayload().sub ===
  //  this.state.car.user._id
  // }

  render() {
    if (!this.state.car) return null
    const { car } =  this.state
    // this.isOwner()
    return (
      <section className="section">
        <div className="container">
          <h2 className="title">{car.make} {car.model}</h2>

          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={car.image} alt={car.make} />
              </figure>
            </div>
            <div className="column is-half">

              <h4 className="title is-4">Top Speed</h4>
              <p>{car.top_speed}</p>
              <hr />
              <h4 className="title is-4">Production Year</h4>
              <p>{car.production_year}</p>
              <hr />

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default CarsShow
