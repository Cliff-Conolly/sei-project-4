import React from 'react'
import { withRouter } from 'react-router-dom'

class PageContainer extends React.Component {
  constructor() {
    super()

    this.state = { background: ''}

  }

  componentDidMount() {
    this.setBackgroundImage()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.setBackgroundImage()
    }
  }

  setBackgroundImage() {
    let background = 'url(\'./assets/electric_storm.jpeg\')'
    if (this.props.location.pathname === '/register') {
      background = 'url(\'./assets/highway_lights.jpeg\')'
    }
    if (this.props.location.pathname === '/cars/new') {
      background = 'url(\'../assets/spark.jpeg\')'
    }
    if (this.props.location.pathname === '/cars') {
      background = 'url(\'./assets/highway_2.jpeg\')'
    }

    this.setState({ background })
  }


  render() {
    const { children } = this.props
    return(
      <div className="page-container is-paddingless is-marginless" style={{ backgroundImage: this.state.background}}>
        {children}
      </div>
    )
  }


}

export default withRouter(PageContainer)
