import * as React from 'react';
import Plot from "react-plotly.js";
import styled from "styled-components"
import barGraph from "src/modules/Map/pictures/barGraph.png"
import firstGraph from "src/modules/Map/pictures/firstGraph.png"
import secondGraph from "src/modules/Map/pictures/secondGraph.png"

const StyledGraphContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`

const StyledContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const StyledTitle = styled.span`
  padding: 5px;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
`

const StyledIMG = styled.img`
    width: 100%;
`

const layoutGraphFirst: Partial<Plotly.Layout> = {
    // height: 300,
    // width: 300,
    title: ``,
    font: {
        size: 8,
        color: '#7f7f7f'
    },
    xaxis: {
        title: 'X',
    },
    yaxis: {
        title: 'Y',
        tickmode: 'array',
        tickvals: [0, 4, 8, 10, 12, 14, 16], // Use the existing y-values as tickvals
        ticktext: ['0', '4', '8', '10', '12', '14', '16'],
    },
    margin: {
        l: 0,
        r: 0,
        t: 0,
        b: 0,
    }
}

const Graph = () => (
    <StyledGraphContent>
        <StyledContentContainer>
            <StyledTitle>Динамика заболеваемости описторхозом в России (случаев на 100000 человек)</StyledTitle>
            <StyledIMG src={firstGraph} alt="First"/>
        </StyledContentContainer>


        <StyledContentContainer>
            <StyledTitle>Динамика заболеваемости описторхозом в России (тыс. человек)</StyledTitle>
            <StyledIMG src={secondGraph} alt="Second"/>
        </StyledContentContainer>


        <StyledContentContainer>
            <StyledTitle>Вклад регионов</StyledTitle>
            <StyledIMG src={barGraph} alt="BarGraph"/>
        </StyledContentContainer>

    </StyledGraphContent>

);

export default Graph;