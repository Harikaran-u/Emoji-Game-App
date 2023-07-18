// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojis, getPoints} = props

  const {emojiUrl, emojiName, id} = emojis

  const giveResult = () => {
    getPoints(id)
  }

  const emojiList = (
    <li className="emoji-list-cont">
      <button type="button" className="emoji-btn" onClick={giveResult}>
        <img className="emoji" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
  return emojiList
}

export default EmojiCard
