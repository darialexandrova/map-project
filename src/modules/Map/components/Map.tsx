import React, {useCallback} from "react"
import styled from "styled-components"
import {MapType} from "src/types/MapType"
import MapSwitcher from "src/modules/Map/components/MapSwitcher"
import MapSymbols from "src/modules/Map/components/MapSymbols"
import InteractiveMap from "src/modules/Map/components/InteractiveMaps/InteractiveMap"

const StyledMapContainer = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  align-items: center;
  justify-content: center;
  gap: 10px;
;
`

const StyledControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const StyledInteractive = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const StyledTitle = styled.h2`
  width: max-content;
  text-align: end;
  display: flex;
  align-self: flex-end;
  font-size: 12px;
  justify-content: flex-end;
  margin-bottom: 10px;
`

type Props = {
    mapType: MapType

    onClickMap: (map: MapType) => void
}

const Map = (props: Props): React.JSX.Element => {

    const getterImg = useCallback((map: MapType): React.JSX.Element => {
        return (
            <InteractiveMap mapType={map}/>
        )
    }, [])

    const getterTitle = useCallback((map: MapType): string => {
        switch (map) {
            case MapType.Political: return 'Политическая карта России'
            case MapType.MorbidityNew: return 'Заболеваемость описторхозом в России 2015-2022'
            case MapType.MorbidityOld: return 'Заболеваемость описторхозом в России 1995-2007'
            case MapType.AreaByMorbidity: return 'Районирование территории России по заболеваемости описторхозом'
        }
    }, [])

    return (
        <StyledMapContainer>
            <StyledControls>
                <MapSwitcher
                    mapType={props.mapType}
                    onClickMap={props.onClickMap}
                />
                <MapSymbols
                    mapType={props.mapType}
                />
            </StyledControls>
            <StyledInteractive>
                <StyledTitle>
                    {getterTitle(props.mapType)}
                </StyledTitle>

                {getterImg(props.mapType)}
            </StyledInteractive>
        </StyledMapContainer>

    )
}

export default Map