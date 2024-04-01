import React from "react"
import styled from "styled-components"
import ButtonMode from "src/modules/Map/components/Buttons/ButtonMode"
import {PageMode} from "src/types/PageType"
import Map from "src/modules/Map/components/Map"
import {MapType} from "src/types/MapType"


const StyledPage = styled.div`
  margin: 0;
  padding: 0;
  max-width: 100vw; /* Set maximum width to the width of the viewport */
  overflow-x: hidden; /* Hide horizontal overflow content */
  display: flex;
  flex-direction: column;
`

const StyledPageContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const StyledTitle = styled.h1`
  font-size: 20px;
  text-align: center;
  font-weight: 700;
`

const StyledContent = styled.div`
`


type Props = {
    mode: PageMode
    mapType: MapType
    onClickMode: (mode: PageMode) => void
    onClickMap: (map: MapType) => void
}

const ViewMap = (props: Props): React.JSX.Element => {
    return (
        <StyledPage>
            <StyledPageContainer>
                <StyledTitle>География заболеваемости описторхозом в России</StyledTitle>

                <ButtonMode
                    mode={props.mode}
                    onClickMode={props.onClickMode}
                />
                <StyledContent>
                    {props.mode == PageMode.Map &&
                            <Map
	                            mapType={props.mapType}
                                onClickMap={props.onClickMap}
                            />
                    }
                    {props.mode == PageMode.Graphs && <div>Hello Graph</div>}
                </StyledContent>
            </StyledPageContainer>
        </StyledPage>
    )
}

export default ViewMap