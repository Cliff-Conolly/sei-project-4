import React from 'react'

const CarsForm = ({ data, handleChange, handleSubmit }) => (
  <form className="carsform" onSubmit={handleSubmit}>
    <div className="field">
      <label className="label"></label>
      <div className="control">
        <input
          className="input"
          name="image"
          placeholder="Input an HTTP image address here:"
          onChange={handleChange}
          value={data.image || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label"></label>
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
      <label className="label"></label>
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
      <label className="label"></label>
      <div className="control">
        <textarea
          className="input"
          name="engine_type"
          placeholder="Engine Type"
          onChange={handleChange}
          value={data.engine_type || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label"></label>
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
      <label className="label"></label>
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
      <label className="label"></label>
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
      <label className="label"></label>
      <div className="control">
        <textarea
          className="blurb-input"
          name="blurb"
          placeholder="Notes:"
          onChange={handleChange}
          value={data.blurb || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label"></label>
      <div className="control">
        <input
          className="input"
          name="image_2"
          placeholder="Input an HTTP image address here:"
          onChange={handleChange}
          value={data.image_2|| ''}
        />
      </div>
    </div>
    <button type="submit" className="submit-button is-info">Submit</button>
  </form>
)

export default CarsForm
