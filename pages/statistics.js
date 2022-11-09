import styled from "styled-components";
import Image from "next/image";

const StatisticsWrapper = styled.div`
  img {
    width: 100%;
  }
`;

const Statistics = () => {
  return (
    <StatisticsWrapper>
      <h1>Statistics Page</h1>
      <h2>Cumulative Bitcoin Stacked Onchain</h2>
      <img src="/Stats_Cumulative_USD.png" />
      <h2>Unique Accounts Partcipating Onchain</h2>
      <img src="/Stats_Unique_Accounts.png" />
      <h2>Dollars Converted to Bitcoin Per Day</h2>
      <img src="/Stats_USD_Converted_Per_Day.png" />
      <h2>Blocks Stacked Per Day</h2>
      <img src="/Stats_Block_Mined_Per_Day.png" />
    </StatisticsWrapper>
  );
};
export default Statistics;
