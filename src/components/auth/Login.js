import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class Login extends React.Component {
  constructor() {
    super()

    this.state = { data: {} }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/cars')
      })
      .catch(err => console.log(err.response))
  }

  render() {
    return (
      <div className="column is-4 is-offset-4">
        <div className="container-login">

          <form onSubmit={this.handleSubmit} className="form is-desktop " id="login-form">

            <div className="field">
              <label className="login-title">Sign In</label>
              <div className="control">
                <input
                  className={`input ${this.state.error ? 'is-danger' : ''} `}
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
                  className={`input ${this.state.error ? 'is-danger' : ''} `}
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.error && <small className="help is-danger">{this.state.error}</small>}
            </div>
            <button type="submit" className="login-button">SIGN IN</button>
          </form>
        </div>
        <div className="create-account has-text-centered">
          <a href="api/register">Create an account</a>
        </div>
      </div>

    )
  }
}

export default Login
