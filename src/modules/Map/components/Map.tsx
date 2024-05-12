import React, {useCallback} from "react"
import styled from "styled-components"
import {MapType} from "src/types/MapType"
import MapSwitcher from "src/modules/Map/components/MapSwitcher"
import MapSymbols from "src/modules/Map/components/MapSymbols"
import InteractiveMap from "src/modules/Map/components/InteractiveMaps/InteractiveMap"
import DividerVertical from "src/components/DividerVertical"

import areaIMG from "src/modules/Map/pictures/map3.png"
import physicalIMG from "src/modules/Map/pictures/map4.png"

const StyledMapContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledControls = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const StyledInteractive = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: flex-end;
  padding-left: 20px;
  padding-right: 20px
`

const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const StyledRegion = styled.span`
  font-size: 14px;
  font-weight: 500;
`

const StyledTitle = styled.span`
  font-size: 12px;
`

type Props = {
    mapType: MapType
    region: string
    onClickMap: (map: MapType) => void
    setRegion: (region: string) => void
}

const Map = (props: Props): React.JSX.Element => {

    const getterImg = useCallback((map: MapType): React.JSX.Element => {
        switch (map) {
            case MapType.Political: {
                return (
                    <InteractiveMap
                        mapType={map}
                        setRegion={props.setRegion}
                    />
                )
            }

            case MapType.MorbidityNew: {
                return (
                    <InteractiveMap
                        mapType={map}
                        setRegion={props.setRegion}
                    />
                )
            }

            case MapType.MorbidityOld: {
                return (
                    <InteractiveMap
                        mapType={map}
                        setRegion={props.setRegion}
                    />
                )
            }

            case MapType.AreaByMorbidity: {
                return (
                    <img src={areaIMG} alt="AREA"/>
                )
            }

            case MapType.Physical: {
                return (
                    <img src={physicalIMG} alt="AREA"/>
                )
            }

            default: {
                return (
                    <InteractiveMap
                        mapType={map}
                        setRegion={props.setRegion}
                    />
                )
            }
        }
    }, [])

    const getterTitle = useCallback((map: MapType): string => {
        switch (map) {
            case MapType.Political: return 'Административно-территориальное устройство России'
            case MapType.MorbidityNew: return 'Заболеваемость описторхозом в России 2015-2022'
            case MapType.MorbidityOld: return 'Заболеваемость описторхозом в России 1995-2007'
            case MapType.AreaByMorbidity: return 'Районирование территории России по заболеваемости описторхозом'
            case MapType.Physical: return 'Природные очаги'
        }
    }, [])

    const getterRegion = useCallback((map: MapType): string => {
        switch (map) {
            case MapType.Political: return props.region
            case MapType.MorbidityNew: return props.region
            case MapType.MorbidityOld: return props.region
            case MapType.AreaByMorbidity: return  ''
            case MapType.Physical: return ''
            default: return ''
        }
    }, [props.region])

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

            <DividerVertical/>

            <StyledInteractive>
                <StyledTitleContainer>
                    <StyledRegion>{getterRegion(props.mapType)}</StyledRegion>
                    <StyledTitle>{getterTitle(props.mapType)}</StyledTitle>
                </StyledTitleContainer>

                {getterImg(props.mapType)}
            </StyledInteractive>
        </StyledMapContainer>
    )
}

export default Map