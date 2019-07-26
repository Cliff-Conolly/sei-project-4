import React from 'react'
import axios from 'axios'

import CarsCard from './CarsCard.js'

class CarsIndex extends React.Component {
  constructor() {
    super()

    this.state = { cars: null}
  }

  componentDidMount() {
    axios.get('/api/cars')
      .then(res => this.setState({ cars: res.data}))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.cars) return null
    console.log(this.state.cars)
    return (
      <section className="section">
        <div className="container">

          <div className="columns is-mobile is-multiline">
            {this.state.cars.map(car =>(
              <CarsCard key={car._id} {...car}/>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default CarsIndex
