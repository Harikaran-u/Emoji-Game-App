import {Component} from 'react'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {
    score: 0,
    resultScore: 0,
    topScore: 0,
    pointsList: [],
    out: false,
    isWon: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  playAgain = () => {
    this.setState({
      score: 0,
      resultScore: 0,
      pointsList: [],
      out: false,
      isWon: false,
    })
  }

  getPoints = id => {
    const {pointsList, score, topScore} = this.state
    if (pointsList.includes(id)) {
      if (score > topScore) {
        this.setState({
          score: 0,
          topScore: score,
          resultScore: score,
          pointsList: [],
          out: true,
          isWon: false,
        })
      }
      this.setState({
        score: 0,
        resultScore: score,
        pointsList: [],
        out: true,
        isWon: false,
      })

      console.log("You're Looser")
    } else {
      if (score === 11) {
        this.setState({
          score: 0,
          topScore: score + 1,
          resultScore: score,
          pointsList: [],
          out: true,
          isWon: true,
        })
      } else {
        this.setState(prevState => ({
          score: prevState.score + 1,
          pointsList: [...prevState.pointsList, id],
        }))
      }

      console.log('New Point Added')
    }
  }

  render() {
    const {score, topScore, out, isWon, resultScore} = this.state
    const randomEmojisList = this.shuffledEmojisList()

    const mainApp = (
      <div className="home-app-cont">
        <NavBar score={score} topScore={topScore} show={out} />
        <div className="emojis-cont">
          {out ? (
            <WinOrLoseCard
              showResult={isWon}
              resultScore={resultScore}
              playAgain={this.playAgain}
            />
          ) : (
            <ul className="emojis-list-cont">
              {randomEmojisList.map(eachEmojis => (
                <EmojiCard
                  emojis={eachEmojis}
                  key={eachEmojis.id}
                  getPoints={this.getPoints}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
    return mainApp
  }
}

export default EmojiGame
