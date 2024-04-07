import React from "react"
import styled from "styled-components"
import {MapType} from "src/types/MapType"
import DividerHorizontal from "src/components/DividerHorizontal"

import bg1 from "src/modules/Map/pictures/bgImages/01.png"
import bg2 from "src/modules/Map/pictures/bgImages/02.png"
import bg3 from "src/modules/Map/pictures/bgImages/03.png"
import bg4 from "src/modules/Map/pictures/bgImages/04.png"
import bg5 from "src/modules/Map/pictures/bgImages/05.png"
import bg6 from "src/modules/Map/pictures/bgImages/06.png"
import bg7 from "src/modules/Map/pictures/bgImages/07.png"
import bg8 from "src/modules/Map/pictures/bgImages/08.png"
import bg9 from "src/modules/Map/pictures/bgImages/09.png"
import bg10 from "src/modules/Map/pictures/bgImages/10.png"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const StyledTitle = styled.span`
  padding: 5px;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
`

const StyledTitleNumber = styled.span`
  padding: 5px;
  font-size: 14px;
  text-align: start;
  font-weight: 400;
`

const StyledSymbolList = styled.div`
`

const StyledSymbolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const StyledBigContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledContent = styled.h2`
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
  gap: 10px;
  font-size: 14px;
`

const StyledSymbol = styled.div<{$bgColor: string}>`
  display: flex;
  width: 40px;
  height: 15px;
  background-color: ${props => props.$bgColor};
`

const StyledSymbolImg = styled.div<{$bgImg: string}>`
  display: flex;
  width: 40px;
  height: 15px;
  background: url(${props => props.$bgImg});
  background-repeat: no-repeat;
`

type Props = {
    mapType: MapType
}

const MapSymbols = (props: Props): React.JSX.Element => {
    return (
        <StyledContainer>
            <StyledTitle>Условные знаки</StyledTitle>

            <DividerHorizontal/>

            <StyledSymbolList>
                {props.mapType == MapType.MorbidityNew &&
                    <StyledSymbolsContainer>
	                    <StyledTitleNumber>Случаев на 100 тыс. населения</StyledTitleNumber>
	                    <StyledContent>
		                    <StyledSymbol
			                    $bgColor={'#DB2F1F'}
		                    />
		                    <span>{'>'} 101</span>

		                    <StyledSymbol
			                    $bgColor={'#D67328'}
		                    />
		                    <span>53-100</span>

		                    <StyledSymbol
			                    $bgColor={'#FF8F3A'}
		                    />
		                    <span>22-52</span>

		                    <StyledSymbol
			                    $bgColor={'#F5D140'}
		                    />
		                    <span>2.51-14</span>

		                    <StyledSymbol
			                    $bgColor={'#A4DD8C'}
		                    />
		                    <span>0.8-2.5</span>

		                    <StyledSymbol
			                    $bgColor={'#4BAD21'}
		                    />
		                    <span>0.16-0.79</span>

		                    <StyledSymbol
			                    $bgColor={'#2B6711'}
		                    />
		                    <span>0.01-0.15</span>
	                    </StyledContent>
                    </StyledSymbolsContainer>}

                {props.mapType == MapType.MorbidityOld &&
                    <StyledSymbolsContainer>
	                    <StyledTitleNumber>Случаев на 100 тыс. населения</StyledTitleNumber>
                        <StyledContent>
                            <StyledSymbol
                            $bgColor={'#DB2F1F'}
                            />
                            <span>{'>'} 100</span>

                            <StyledSymbol
                            $bgColor={'#D67328'}
                            />
                            <span>57-100</span>

                            <StyledSymbol
                            $bgColor={'#FF8F3A'}
                            />
                            <span>22-52</span>

                            <StyledSymbol
                            $bgColor={'#F5D140'}
                            />
                            <span>3.5-14</span>

                            <StyledSymbol
                            $bgColor={'#A4DD8C'}
                            />
                            <span>0.9-2.5</span>

                            <StyledSymbol
                            $bgColor={'#4BAD21'}
                            />
                            <span>0.15-0.7</span>

                            <StyledSymbol
                            $bgColor={'#2B6711'}
                            />
                            <span>0.00-0.15</span>
                        </StyledContent>
                    </StyledSymbolsContainer>
                }

                {props.mapType == MapType.AreaByMorbidity &&
                    <StyledSymbolsContainer>
	                    <StyledTitleNumber>Районирование</StyledTitleNumber>
                        <StyledBigContainer>
	                        <StyledContent>
		                        <StyledSymbolImg
			                        $bgImg={bg1}
		                        />
		                        <span>Восточно-Сибирский</span>

		                        <StyledSymbolImg
			                        $bgImg={bg2}
		                        />
		                        <span>Енисейский район</span>

		                        <StyledSymbolImg
			                        $bgImg={bg3}
		                        />
		                        <span>Западно-Сибирский район</span>

		                        <StyledSymbolImg
			                        $bgImg={bg4}
		                        />
		                        <span>Печорский район</span>

		                        <StyledSymbolImg
			                        $bgImg={bg5}
		                        />
		                        <span>Волго-Камский район</span>
	                        </StyledContent>
	                        <StyledContent>
		                        <StyledSymbolImg
			                        $bgImg={bg6}
		                        />
		                        <span>Северный район</span>

		                        <StyledSymbolImg
			                        $bgImg={bg7}
		                        />
		                        <span>Центральный район</span>

		                        <StyledSymbolImg
			                        $bgImg={bg8}
		                        />
		                        <span>Северо-Кавказский</span>

		                        <StyledSymbolImg
			                        $bgImg={bg9}
		                        />
		                        <span>Донской район</span>

		                        <StyledSymbolImg
			                        $bgImg={bg10}
		                        />
		                        <span>Нет данных</span>
	                        </StyledContent>
                        </StyledBigContainer>

                    </StyledSymbolsContainer>
                }
            </StyledSymbolList>

        </StyledContainer>
    )
}

export default MapSymbols
