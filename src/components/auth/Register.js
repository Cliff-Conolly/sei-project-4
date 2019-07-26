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
//       <div>
//         <div className="container">
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
//         </div>
//       </div>
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
            <h2 className="title">Register</h2>

            <div className="field">
              <label className="label">Username</label>
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
              <label className="label">Email</label>
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
              <label className="label">Password</label>
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
              <label className="label">Password Confirmation</label>
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

            <button type="submit" className="button is-info">Submit</button>

          </form>
        </div>
      </div>
    )
  }
}

export default Register
