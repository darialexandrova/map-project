import React, {useCallback} from "react"
import styled from "styled-components"
import map0 from 'src/modules/Map/pictures/map0.png'
import map1 from 'src/modules/Map/pictures/map1.png'
import map2 from 'src/modules/Map/pictures/map2.png'
import map3 from 'src/modules/Map/pictures/map3.png'
import {MapType} from "src/types/MapType"
import MapSwitcher from "src/modules/Map/components/MapSwitcher"

const StyledMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

const StyledTitle = styled.h2`
  text-align: end;
  display: flex;
  align-self: flex-end;
  font-size: 12px;
  justify-content: flex-end;
  margin-bottom: 10px;
`
const StyledIMG = styled.div`
  max-width: 55%;
  height: auto;
  padding: 10px;
  margin-bottom: 10px;
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


            <StyledIMG>
                <StyledTitle>
                    {getterTitle(props.map)}
                </StyledTitle>
                {getterImg(props.map)}
            </StyledIMG>

            <MapSwitcher
                map={props.map}
                onClickMap={props.onClickMap}
            />
        </StyledMapContainer>

    )
}

export default Map