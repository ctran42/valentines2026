import { useState } from 'react'
import './App.css'
import loveImage from './assets/chiikawa_love.png'
import sadImage from './assets/chiikawa_sad.png'
import usagiGif from './assets/usagi_gif.mp4'

function App() {
  const [showYesPage, setShowYesPage] = useState(false)
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '50%', left: '70%' })
  const [showLove, setShowLove] = useState(true)

  const handleYesClick = () => {
    setShowYesPage(true)
  }

  const handleNoHover = () => {
    setShowLove(false)
    // Use larger safety margins to keep button fully visible
    const safeMargin = 300
    
    const minX = -1 * (window.innerWidth/2 - safeMargin)
    const maxX = window.innerWidth/2 - safeMargin
    const minY = -1 * (window.innerHeight/2 - safeMargin)
    const maxY = window.innerHeight/2 - safeMargin
    
    const randomX = Math.random() * (maxX - minX) + minX
    const randomY = Math.random() * (maxY - minY) + minY

    setNoButtonPosition({
      top: `${randomY}px`,
      left: `${randomX}px`
    })
  }

  const handleYesHover = () => {
    setShowLove(true)
  }

  if (showYesPage) {
    return (
      <div className="yes-page">
        <video 
          src={usagiGif} 
          autoPlay 
          loop 
          muted 
          className="usagi-gif"
        />
        <h1>HOORAY</h1>
        <p>See you this weekend my haybae</p>
      </div>
    )
  }

  return (
    <div className="main-page">
      <img 
        src={showLove ? loveImage : sadImage} 
        alt={showLove ? "Love" : "Sad"} 
        className={showLove ? "character-image love-image" : "character-image sad-image"}
      />
      <h1>Will you be my Valentine?</h1>
      <div className="button-container">
        <button 
          className="yes-button" 
          onClick={handleYesClick}
          onMouseEnter={handleYesHover}
          style={{
            position: 'absolute',
            top: '50%',
            left: '30%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          Yes
        </button>
        <button 
          className="no-button" 
          onMouseEnter={handleNoHover}
          style={{
            position: 'absolute',
            top: noButtonPosition.top,
            left: noButtonPosition.left,
            transform: 'translate(-50%, -50%)'
          }}
        >
          No
        </button>
      </div>
    </div>
  )
}

export default App
