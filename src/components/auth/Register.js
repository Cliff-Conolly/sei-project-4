// import React from 'react'
// import {registerUser} from '../../lib/Auth'
//
// class Register extends React.Component {
//   constructor() {
//     super()
//
//     this.state ={ date: {} }
//
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//
//   handleChange( { target: { name, value}}) {
//     const data = {...this.state.data, [name]: value}
//     this.setState({ data })
//   }
//
//   handleSubmit(e) {
//     e.preventDefault()
//     console.log('submitted')
//     const {username,email,password,passwordConfirmation } = this.state
//     const userData = {username,email,password,passwordConfirmation }
//     registerUser(userData)
//
//   }
//
//   render() {
//     console.log(this.state.data)
//     return (
//       <main>
//         <section className="container">
//           <form onSubmit={this.handleSubmit}>
//             <h2 className="title">Register</h2>
//
//             <div className="field">
//               <label className="label">Username</label>
//               <div className="control">
//                 <input
//                   className="input"
//                   name="username"
//                   placeholder="Username"
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>
//
//             <div className="field">
//               <label className="label">Email</label>
//               <div className="control">
//                 <input
//                   className="input"
//                   name="email"
//                   placeholder="Email"
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>
//
//             <div className="field">
//               <label className="label">Password</label>
//               <div className="control">
//                 <input
//                   className="input"
//                   type="password"
//                   name="passwordConfirmation"
//                   placeholder="Password Confirmation"
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>
//
//             <div className="field">
//               <label className="label">Password Confirmation</label>
//               <div className="control">
//                 <input
//                   className="input"
//                   type="password"
//                   name="passwordConfirmation"
//                   placeholder="Password Confirmation"
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>
//
//             <button type="submit" className="button is-info">Submit</button>
//
//           </form>
//         </section>
//       </main>
//     )
//   }
// }
//
// export default Register


import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, errors: {} }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    const errors = { ...this.state.errors, [name]: '' }
    this.setState( { data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => {
        console.log(err)
        this.setState({ errors: err.reponse })
      })
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit} className="register">
            <h2 className="title">Register</h2>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.username && <small className="help is-danger">{this.state.errors.username}</small>}
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className={`input ${this.state.errors.email ? 'is-danger' : ''}`}
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.email && <small className="help is-danger">{this.state.errors.email}</small>}
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className={`input ${this.state.errors.password ? 'is-danger' : ''}`}
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.password && <small className="help is-danger">{this.state.errors.password}</small>}
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input
                  className={`input ${this.state.errors.passwordConfirmation ? 'is-danger' : ''}`}
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Password Confirmation"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.passwordConfirmation && <small className="help is-danger">{this.state.errors.passwordConfirmation}</small>}
            </div>
            <div className="field">
              <label className="label">Location Home</label>
              <div className="control">
                <input
                  className={`input ${this.state.errors.passwordConfirmation ? 'is-danger' : ''}`}
                  type="location"
                  name="locationHome"
                  placeholder="Location Home"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.passwordConfirmation && <small className="help is-danger">{this.state.errors.passwordConfirmation}</small>}
            </div>
            <button type="submit" className="button is-warning">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Register
