import React from 'react'
import axios from 'axios'


class Register extends React.Component {
  constructor() {
    super()

    this.state ={ data: {} }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange( { target: { name, value}}) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('submitted')

    axios.post('/api/register', this.state.data)
      .then(() => {
        this.props.history.push('/login')
      })
      .catch(err => console.log(err.response))
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="column is-4 is-offset-4">
        <div className="container-register">
          <form onSubmit={this.handleSubmit} id="reg-form">
            <h2 className="register-title">Create Account</h2>

            <div className="field">
              <label className="label"></label>
              <div className="control">
                <input
                  className="input"
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label"></label>
              <div className="control">
                <input
                  className="input"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label"></label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label"></label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="password_confirmation"
                  placeholder="Password Confirmation"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <button type="submit" className="submit-button is-info">SUBMIT</button>

          </form>
        </div>
      </div>
    )
  }
}

export default Register
