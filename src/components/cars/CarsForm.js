import React from 'react'

const CarsForm = ({ data, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div className="field">
      <label className="label">Name</label>
      <div className="control">
        <input
          className="input"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={data.name || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Origin</label>
      <div className="control">
        <input
          className="input"
          name="origin"
          placeholder="Origin"
          onChange={handleChange}
          value={data.origin || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Image</label>
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
      <label className="label">Comments</label>
      <div className="control">
        <textarea
          className="textarea"
          name="comments"
          placeholder="Comments"
          onChange={handleChange}
          value={data.tastingNotes || ''}
        />
      </div>
    </div>
    <button type="submit" className="button is-info">Submit</button>
  </form>
)

export default CarsForm
