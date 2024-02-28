import React from "react"
import styled from "styled-components"
import {PageMode} from "src/types/PageType"


// TODO хардкод
const ButtonContainer = styled.div`
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  background: #3FA8BF;
  align-self: self-end;
  font-size: 12px;
`

const ButtonPickedLeft = styled.button`
  width: 80px;
  background: #3FA8BF; //TODO добавить theme
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 15px 0 0 15px;
  padding: 0.5rem 1rem;
  margin: 0;

  &:active {
    background: #34889b; //TODO добавить theme
  }
  &:hover {
    background: #34889b; //TODO добавить theme
  }
  &:focus {
    background: #34889b; //TODO добавить theme
  }
`
const ButtonPickedRight = styled.button`
  width: 80px;
  align-items: center;
  text-align: center;
  background: #3FA8BF; //TODO добавить theme
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 0 15px 15px 0;
  margin: 0;

  &:active {
    background: #34889b; //TODO добавить theme
  }
  
  &:hover {
    background: #34889b; //TODO добавить theme
  }
  &:focus {
    background: #34889b; //TODO добавить theme
  }
`

type Props = {
    onClickMode: (mode: PageMode) => void
}


const ButtonMode = (props: Props): React.JSX.Element => {

    return (
        <ButtonContainer>
            <ButtonPickedLeft
                onClick={() => props.onClickMode(PageMode.Map)}
            >
                Карта
            </ButtonPickedLeft>
            <ButtonPickedRight
                onClick={() => props.onClickMode(PageMode.Graphs)}
            >
                График
            </ButtonPickedRight>
        </ButtonContainer>
    )
}

export default ButtonMode