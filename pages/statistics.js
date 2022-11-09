import styled from "styled-components"


const StatisticsWrapper= styled.div`
img {
  width: 100%;
}
`


const Statistics = () => {
  return (
    <StatisticsWrapper>
      <h1>Statistics Page</h1>
      <img src = "/Stats_Cumulative_USD.png" />
    </StatisticsWrapper>
  );
};
export default Statistics;

