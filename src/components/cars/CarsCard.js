import React from 'react'
import { Link } from 'react-router-dom'

const CarsCard = ({model, make, top_speed, engine_type, range, production_year, image, id,blurb,image_2}) => (
  <div className="column is-three-fifths is-offset-one-fifth ">
    <Link to={`/cars/${id}`}>
      <div className="card">

        <div className="card-header">
          <h4 className="card-header-title title is-4">{make}</h4>
        </div>

        <div className="card-image">
          <figure>
            <img src={image} alt={make}/>
          </figure>
        </div>

        <div className="card-content">
          <h5 className="title is-6">Model: {model}</h5>
          <h6 className="subtitle is-6">Engine Type: {engine_type}</h6>
          <h6 className="subtitle is-6">Range: {range} miles</h6>
          <h6 className="subtitle is-6">Top Speed: {top_speed} mph</h6>
          <h6 className="subtitle is-6">Production Year: {production_year}</h6>
          <h6 className="subtitle is-6" id="blurb">{blurb}</h6>
        </div>

        <div className="card-image_2">
          <figure>
            <img src={image_2} />
          </figure>
        </div>

      </div>

    </Link>
  </div>

)

export default CarsCard
