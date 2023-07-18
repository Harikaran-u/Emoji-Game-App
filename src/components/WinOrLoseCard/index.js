// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {showResult, resultScore, playAgain} = props

  const result = showResult

  const refreshGame = () => {
    playAgain()
  }

  const win = (
    <div className="result-cont">
      <div className="result-card-cont">
        <h1 className="result">You Won</h1>
        <p className="best-score">Best Score</p>
        <p className="final-score">{resultScore + 1}/12</p>
        <button type="button" className="play-again" onClick={refreshGame}>
          Play Again
        </button>
      </div>
      <img
        className="result-img"
        alt="win or lose"
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
      />
    </div>
  )
  const lose = (
    <div className="result-cont">
      <div className="result-card-cont">
        <h1 className="result">You Lose</h1>
        <p className="best-score">Score</p>
        <p className="final-score">{resultScore}/12</p>
        <button type="button" className="play-again" onClick={refreshGame}>
          Play Again
        </button>
      </div>
      <img
        className="result-img"
        alt="win or lose"
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
      />
    </div>
  )

  const resultCont = result ? win : lose

  return resultCont
}

export default WinOrLoseCard
