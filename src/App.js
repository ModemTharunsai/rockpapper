import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  HomeContainer,
  MainHeading,
  ScoreParagraph,
  ButtonContainer,
  ChoiceButton,
  RulesButton,
  GameResultsView,
  PopupContent,
  CloseButton,
  RulesImage,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Router>
)
const Home = () => {
  const [score, setScore] = useState(0)
  const [showRulesPopup, setShowRulesPopup] = useState(false)
  const [userChoice, setUserChoice] = useState(null)
  const [opponentChoice, setOpponentChoice] = useState(null)

  const handleButtonClick = choiceId => {
    setUserChoice(choiceId)
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const opponentChoice = choicesList[randomIndex]
    setOpponentChoice(opponentChoice)

    const result = getResult(choiceId, opponentChoice.id)
    updateScore(result)
  }
  const getResult = (user, opponent) => {
    if (user === opponent) {
      return 'DRAW'
    }
    if (
      (user === 'ROCK' && opponent === 'SCISSORS') ||
      (user === 'SCISSORS' && opponent === 'PAPER') ||
      (user === 'PAPER' && opponent === 'ROCK')
    ) {
      return 'YOU WON'
    }
    return 'YOU LOSE'
  }

  const updateScore = result => {
    if (result === 'YOU WON') {
      setScore(prevScore => prevScore + 1)
    } else if (result === 'YOU LOSE') {
      setScore(prevScore => prevScore - 1)
    }
  }

  return (
    <HomeContainer>
      <MainHeading>Rock Paper Scissors</MainHeading>
      <ScoreParagraph>Score: {score}</ScoreParagraph>
      <ButtonContainer>
        {choicesList.map(choice => (
          <ChoiceButton
            key={choice.id}
            data-testid={`${choice.id}Button`}
            onClick={() => handleButtonClick(choice.id)}
          >
            {choice.id}
          </ChoiceButton>
        ))}
      </ButtonContainer>
      <RulesButton onClick={() => setShowRulesPopup(true)}>Rules</RulesButton>
      {userChoice && opponentChoice && (
        <GameResultsView>
          <YourChoice src={userChoice.imageUrl} alt="Your Choice" />
          <OpponentChoice src={opponentChoice.imageUrl} alt="Opponent Choice" />
          <ResultText>{getResult(userChoice.id, opponentChoice.id)}</ResultText>
          <PlayAgainButton onClick={() => setUserChoice(null)}>
            Play Again
          </PlayAgainButton>
        </GameResultsView>
      )}
      <Popup
        open={showRulesPopup}
        onClose={() => setShowRulesPopup(false)}
        modal
        closeOnDocumentClick
      >
        <PopupContent>
          <RulesImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
          <CloseButton onClick={() => setShowRulesPopup(false)}>
            <RiCloseLine />
          </CloseButton>
        </PopupContent>
      </Popup>
    </HomeContainer>
  )
}
export default App