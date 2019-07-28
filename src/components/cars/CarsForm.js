import React from 'react'

const CarsForm = ({ data, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div className="field">
      <label className="label">Input an HTTP image address here: </label>
      <div className="control">
        <input
          className="input"
          name="image"
          placeholder="Image"
          onChange={handleChange}
          value={data.image || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Make</label>
      <div className="control">
        <input
          className="input"
          name="make"
          placeholder="Make"
          onChange={handleChange}
          value={data.make || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Model</label>
      <div className="control">
        <input
          className="input"
          name="model"
          placeholder="Model"
          onChange={handleChange}
          value={data.model || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Engine Type</label>
      <div className="control">
        <textarea
          className="input"
          name="engine type"
          placeholder="Engine Type"
          onChange={handleChange}
          value={data.engine_type || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Range</label>
      <div className="control">
        <textarea
          className="input"
          name="range"
          placeholder="Range"
          onChange={handleChange}
          value={data.range || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Top Speed</label>
      <div className="control">
        <textarea
          className="input"
          name="top_speed"
          placeholder="Top Speed"
          onChange={handleChange}
          value={data.top_speed || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Production Year</label>
      <div className="control">
        <textarea
          className="input"
          name="production_year"
          placeholder="Production Year"
          onChange={handleChange}
          value={data.production_year || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Blurb</label>
      <div className="control">
        <textarea
          className="input"
          name="blurb"
          placeholder="Blurb"
          onChange={handleChange}
          value={data.blurb || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Input an HTTP image address here: </label>
      <div className="control">
        <input
          className="input"
          name="image_2"
          placeholder="Image 2"
          onChange={handleChange}
          value={data.image_2|| ''}
        />
      </div>
    </div>
    <button type="submit" className="submit-button is-info">Submit</button>
  </form>
)

export default CarsForm
