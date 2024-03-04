import React from "react"
import styled from "styled-components"

const StyledMapSwitcherContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px solid black;
  border-radius: 15px;
`

const StyledTitle = styled.h2`
  padding: 5px;
  font-size: 16px;
  text-align: center;
`

const MapSymbols = (): React.JSX.Element => {
    return (
        <StyledMapSwitcherContainer>
            <StyledTitle>Условные знаки</StyledTitle>
        </StyledMapSwitcherContainer>
    )
}

export default MapSymbols
