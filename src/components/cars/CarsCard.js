import React from 'react'
import { Link } from 'react-router-dom'

const CarsCard = ({ name, origin, image, user, _id}) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <Link to={`/cars/${_id}`}>
      <div className="card">

        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>

        <div className="card-image">
          <figure>
            <img src={image} alt={name}/>
          </figure>
        </div>

        <div className="card-content">
          <h5 className="title is-5">{origin}</h5>
          <h6 className="subtitle is-6">{user.username}</h6>
        </div>

      </div>

    </Link>
  </div>

)

export default CarsCard
