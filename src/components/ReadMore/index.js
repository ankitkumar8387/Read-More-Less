// Write your code here
import {useState} from 'react'
import './index.css'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isDisplay, setDisplay] = useState(false)
  const initialText = reactHooksDescription.slice(0, 170)

  const onClickDisplay = () => {
    setDisplay(prevState => !prevState)
  }

  return (
    <div className="container-img">
      <div className="main-container">
        <h1 className="main-heading">React Hooks</h1>
        <p className="paragraph">Hooks are a new addition to react</p>
        <img
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png "
          alt="react hooks"
          className="image"
        />
        <p className="hooks-description">
          {isDisplay ? reactHooksDescription : initialText}
        </p>
        <button type="button" className="button" onClick={onClickDisplay}>
          {isDisplay ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  )
}
export default ReadMore
