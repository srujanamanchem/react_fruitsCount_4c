import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  eatingMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  eatingBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="fruits-count-bg-container">
        <div className="fruits-count-container">
          <h1 className="fruits-count-text">
            Bob ate
            <span className="fruit-count"> {mangoCount} </span>
            mangoes
            <span className="fruit-count"> {bananaCount} </span>
            bananas
          </h1>
          <div className="fruits-card">
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruit-image"
                alt="mango"
              />
              <button
                type="button"
                className="fruit-btn"
                onClick={this.eatingMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruit-image"
                alt="banana"
              />
              <button
                type="button"
                className="fruit-btn"
                onClick={this.eatingBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
