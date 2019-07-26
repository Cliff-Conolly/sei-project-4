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

class Register extends React.Component {
  constructor() {
    super()

    this.state ={ date: {} }

    this.handleChange = this.handleChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange( { target: { name, value}}) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('submitted')
  }

  render() {
    console.log(this.state.data)
    return (
      <main>
        <section className="container">
          <form onSubmit={this.handleSubmit}>
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
                  name="passwordConfirmation"
                  placeholder="Password Confirmation"
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
                  name="passwordConfirmation"
                  placeholder="Password Confirmation"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <button type="submit" className="button is-info">Submit</button>

          </form>
        </section>
      </main>
    )
  }
}

export default Register
