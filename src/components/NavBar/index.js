// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, show} = props

  let scoreEle = ''
  scoreEle = (
    <div className="score-cont">
      <p className="score">Score: {score}</p>
      <p className="score">Top Score: {topScore}</p>
    </div>
  )

  const navbar = (
    <nav className="nav-items">
      <div className="logo-cont">
        <img
          className="emoji-app-logo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="app-name">Emoji Game</h1>
      </div>
      {show ? '' : scoreEle}
    </nav>
  )
  return navbar
}

export default NavBar
