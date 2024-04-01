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

const StyledContent = styled.h2`
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
  padding: 10px;
  gap: 10px;
  font-size: 14px;
`

const StyledSymbol = styled.div<{$bgColor: string}>`
  display: flex;
  width: 40px;
  height: 15px;
  background-color: ${props => props.$bgColor};

`

type Props = {
    mapType: MapType
}

const MapSymbols = (props: Props): React.JSX.Element => {
    return (
        <StyledMapSwitcherContainer>
            <StyledTitle>Условные знаки</StyledTitle>
            {props.mapType == MapType.MorbidityNew && <StyledContent>
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
            </StyledContent>}
            {props.mapType == MapType.MorbidityOld && <StyledContent>
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
	        </StyledContent>}
        </StyledMapSwitcherContainer>
    )
}

export default MapSymbols
