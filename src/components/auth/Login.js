// import React from 'react'
// import axios from 'axios'
// import Auth from '../../lib/Auth'
//
// class Login extends React.Component {
//   constructor() {
//     super()
//
//     this.state = { data: {} }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//
//   handleChange({ target: { name, value }}) {
//     const data = {...this.state.data, [name]: value }
//     this.setState({ data })
//   }
//
//   handleSubmit(e) {
//     e.preventDefault()
//
//     axios.post('https://winebored.herokuapp.com/login', this.state.data)
//       .then(res => {
//         Auth.setToken(res.data.token)
//         this.props.history.push('/wines')
//       })
//       .catch(err => console.log(err.response))
//   }
//
//   render(){
//     return (
//       <main className="div">
//         <div className="container">
//           <form onSubmit={this.handleSubmit}>
//             <h2 className="title">Login</h2>
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
//             <div className="field">
//               <label className="label">Password</label>
//               <div className="control">
//                 <input
//                   className="input"
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>
//             <button type="submit" className="button is-primary">Login</button>
//           </form>
//         </div>
//       </main>
//     )
//   }
// }
//
// export default Login

import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class Login extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, error: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data, error: '' })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push(`/users/${Auth.getUser()}`)
      })
      .catch(() => this.setState({ error: 'Invalid Crendentials' }))
  }

  render() {
    return (
      <div className="column is-4 is-offset-4">
        <div className="container">

          <form onSubmit={this.handleSubmit} className="form is-desktop " id="login-form">

            <div className="field">
              <label className="label">Email</label>
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
              <label className="label">Password</label>
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
            <button type="submit" className="button is-warning">Login</button>
          </form>


        </div>
      </div>

    )
  }
}

export default Login
