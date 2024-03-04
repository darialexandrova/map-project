import React, {useCallback} from "react"
import styled from "styled-components"
import map0 from 'src/modules/Map/pictures/map0.png'
import map1 from 'src/modules/Map/pictures/map1.png'
import map2 from 'src/modules/Map/pictures/map2.png'
import map3 from 'src/modules/Map/pictures/map3.png'
import {MapType} from "src/types/MapType"
import MapSwitcher from "src/modules/Map/components/MapSwitcher"
import MapSymbols from "src/modules/Map/components/MapSymbols"

const StyledMapContainer = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 5px;
  grid-template-areas:
  "sw mi"
  "sm mi"
;
`

const StyledMapSwitcher = styled(MapSwitcher)`
  grid-area: sw;
`

const StyledMapSymbols = styled(MapSymbols)`
  grid-area: sm;
`

const StyledTitle = styled.h2`
  text-align: end;
  display: flex;
  align-self: flex-end;
  font-size: 12px;
  justify-content: flex-end;
  margin-bottom: 10px;
`
const StyledMapIMG = styled.div`
  grid-area: mi;
`

const StyledImg = styled.img`
  max-width: 100%; // Ensures the image does not exceed the container's width
  height: auto; // Allows the image to adjust its height
`

type Props = {
    map: MapType

    onClickMap: (map: MapType) => void
}

const Map = (props: Props): React.JSX.Element => {

    const getterImg = useCallback((map: MapType): React.JSX.Element => {
        switch (map) {
            case MapType.Political: return (
                <StyledImg
                    src={map0}
                    alt="loser"
                />
            )

            case MapType.MorbidityNew: return (
                <StyledImg
                    src={map1}
                    alt="loser"
                />
            )

            case MapType.MorbidityOld: return (
                <StyledImg
                    src={map2}
                    alt="loser"
                />
            )

            case MapType.AreaByMorbidity: return (
                <StyledImg
                    src={map3}
                    alt="loser"
                />
            )
        }
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
            <StyledMapSwitcher
                map={props.map}
                onClickMap={props.onClickMap}
            />

            <StyledMapSymbols/>

            <StyledMapIMG>
                <StyledTitle>
                    {getterTitle(props.map)}
                </StyledTitle>
                {getterImg(props.map)}
            </StyledMapIMG>
        </StyledMapContainer>

    )
}

export default Map