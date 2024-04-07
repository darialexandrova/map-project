import React from "react"
import styled from "styled-components"


const StyledLine = styled.div`
  height: 100%;
  width: 1px;
  background: #d0c5c5;
  position: relative;
`

const DividerVertical = (): React.JSX.Element => {
    return (
        <StyledLine/>
    )
}

export default DividerVertical