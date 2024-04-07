import React from "react"
import styled from "styled-components"


const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background: #d0c5c5;
`

const DividerHorizontal = (): React.JSX.Element => {
    return (
        <StyledLine/>
    )
}

export default DividerHorizontal