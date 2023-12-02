import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    onLightMode: false,
  }

  onclickButton = () => {
    this.setState(prevState => ({
      onLightMode: !prevState.onLightMode,
    }))
  }

  onClassName = () => {
    const {onLightMode} = this.state
    return onLightMode ? 'dark' : 'light'
  }

  onButtonText = () => {
    const {onLightMode} = this.state
    return onLightMode ? 'Light Mode' : 'Dark Mode'
  }

  render() {
    const className = this.onClassName()
    const buttonText = this.onButtonText()

    return (
      <div className="container">
        <div className={className}>
          <h1 className="heading">Click to change Mode</h1>
          <button className="button" type="button" onClick={this.onclickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
