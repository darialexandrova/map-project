import React from "react"
import styled from "styled-components"
import ButtonMode from "src/modules/Map/components/Buttons/ButtonMode"
import {PageMode} from "src/types/PageType"
import Map from "src/modules/Map/components/Map"
import {MapType} from "src/types/MapType"
import DividerHorizontal from "src/components/DividerHorizontal"
import GraphFirst from "src/modules/Map/components/Graph"


const StyledPage = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  overflow: hidden;
`

const StyledContent = styled.div`
  display: grid;
  grid-template-rows: min-content min-content 1fr;
  overflow: hidden;
  padding: 20px;
`

const StyledTitle = styled.span`
  overflow: hidden;
  width: 100%;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
`

const StyledButtonContainer = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 40px
`

type Props = {
    mode: PageMode
    mapType: MapType
    region: string
    onClickMode: (mode: PageMode) => void
    onClickMap: (map: MapType) => void
    setRegion: (region: string) => void
}

const ViewMap = (props: Props): React.JSX.Element => {
    return (
        <StyledPage>
            <StyledContent>
                <StyledTitle>География заболеваемости описторхозом в России</StyledTitle>

                <StyledButtonContainer>
                    <ButtonMode
                        mode={props.mode}
                        onClickMode={props.onClickMode}
                    />
                </StyledButtonContainer>

                <DividerHorizontal/>
                {props.mode == PageMode.Map &&
                    <Map
	                    region={props.region}
                        mapType={props.mapType}
                        onClickMap={props.onClickMap}
                        setRegion={props.setRegion}
                    />
                }
                {props.mode == PageMode.Graphs && <GraphFirst/>}
            </StyledContent>
        </StyledPage>
    )
}

export default ViewMap