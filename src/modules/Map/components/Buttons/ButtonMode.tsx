import React from "react"
import styled, {css} from "styled-components"
import {PageMode} from "src/types/PageType"


const ButtonContainer = styled.div`
  width: 120px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  background: #3FA8BF;
  font-size: 12px;
  font-weight: 500;
`
const ButtonPicked = css`

  width: 59px;
  cursor: pointer;
  color: white;
  border: none;
  margin: 0;
  &:hover {
    background: #328191
  }
  &:active {
    background: #328191
  }
  &:focus {
    background: #328191
  }
`
const ButtonPickedLeft = ButtonPicked && styled.button<{$mode: PageMode}>`
  ${ButtonPicked};
  background: ${props => props.$mode == PageMode.Map ? '#328191' : '#3FA8BF'};
  border-radius: 10px 0 0 10px;
`
const ButtonPickedRight = ButtonPicked && styled.button<{$mode: PageMode}>`
  ${ButtonPicked};
  background: ${props => props.$mode == PageMode.Graphs ? '#328191' : '#3FA8BF'};
  border-radius: 0 10px 10px 0;
`

type Props = {
    mode: PageMode
    onClickMode: (mode: PageMode) => void
}


const ButtonMode = (props: Props): React.JSX.Element => {

    return (
        <ButtonContainer>
            <ButtonPickedLeft
                onClick={() => props.onClickMode(PageMode.Map)}
                $mode={props.mode}
            >
                Карта
            </ButtonPickedLeft>
            <ButtonPickedRight
                onClick={() => props.onClickMode(PageMode.Graphs)}
                $mode={props.mode}
            >
                График
            </ButtonPickedRight>
        </ButtonContainer>
    )
}

export default ButtonMode