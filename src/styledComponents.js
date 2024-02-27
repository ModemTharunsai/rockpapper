import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const MainHeading = styled.h1`
  font-size: 32px;
  color: #212529;
  margin-bottom: 20px;
`

export const ScoreParagraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #495057;
  margin-bottom: 10px;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`

export const ChoiceButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`

export const RulesButton = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #218838;
  }
`

export const GameResultsView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export const YourChoice = styled.img`
  width: 150px;
  margin-bottom: 10px;
`

export const OpponentChoice = styled.img`
  width: 150px;
  margin-bottom: 10px;
`

export const ResultText = styled.p`
  font-size: 24px;
  color: #007bff;
  margin-bottom: 10px;
`

export const PlayAgainButton = styled.button`
  background-color: #ffc107;
  color: #212529;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #d39e00;
  }
`

export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RulesImage = styled.img`
  width: 100%;
  max-width: 400px;
`

export const CloseButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #c82333;
  }
`
