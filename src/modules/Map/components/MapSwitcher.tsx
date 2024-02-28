import React from "react"
import styled from "styled-components"
import {MapType} from "src/types/MapType"

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

const StyledLine = styled.div`
  height: 1px;
  width: 100%;
  background: black;
`


const Radio = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
  padding: 10px;
  gap: 5px;

`

const StyledRadio = styled.button<{$background: boolean}>`
  cursor: pointer;
  width: 18px;
  height: 18px;
  border: 1px solid black;
  border-radius: 50%;
  background: ${props => props.$background == true ? 'black' : 'white'};
`

const StyledLabel = styled.label`
    font-size: 14px;
`

type Props = {
    map: MapType

    onClickMap: (map: MapType) => void
}

const MapSwitcher = (props: Props): React.JSX.Element => {
    return (
        <StyledMapSwitcherContainer>
            <StyledTitle>Карты</StyledTitle>
            <StyledLine/>
            <Radio>
            <StyledRadio
                $background={props.map == MapType.Political}
                onClick={() => props.onClickMap(MapType.Political)}
            />

            <StyledLabel>Политическая карта России</StyledLabel>

            <StyledRadio
                $background={props.map == MapType.MorbidityNew}
                onClick={() => props.onClickMap(MapType.MorbidityNew)}
            />

            <StyledLabel>Заболеваемость описторхозом в России 2015-2022</StyledLabel>

            <StyledRadio
                $background={props.map == MapType.MorbidityOld}
                onClick={() => props.onClickMap(MapType.MorbidityOld)}
            />

            <StyledLabel>Заболеваемость описторхозом в России 1995-2007</StyledLabel>

            <StyledRadio
                $background={props.map == MapType.AreaByMorbidity}
                onClick={() => props.onClickMap(MapType.AreaByMorbidity)}
            />
            <StyledLabel>Районирование территории России по заболеваемости описторхозом</StyledLabel>
        </Radio>
        </StyledMapSwitcherContainer>
    )
}

export default MapSwitcher
