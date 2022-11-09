import React, { useState, useEffect } from "react";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import Link from "next/link";
import axios from "axios";
import TextInputStyles from "../components/TextInput";
import styled from "styled-components";

const StackjoinWrapper = styled.div`
  .bold {
    font-weight: 700;
  }
  #stackjoins {
    margin-bottom: 60px;
  }

  .stackjoin-row {
    width: 720px;
    display: flex;

    .amount {
      width: 160px;
    }
    .twitter {
      width: 160px;
    }
    .url {
      width: 400px;
    }

    a {
      color: blue;
    }
  }
`;

const Stackjoin = () => {
  const [stackjoins, setStackjoins] = useState([]);
  const [checked, setChecked] = useState(false);

  React.useEffect(() => {
    getStackjoins();
  }, []);

  const getStackjoins = async () => {
    // setBlocks(BlocksJSON);
    // console.log("getBlocks");
    const res = await axios.get(
      "https://stackchain-backend.herokuapp.com/api/stackjoins"
    );
    const data = res.data;
    setStackjoins(data);
  };

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <StackjoinWrapper>
      <h1>Stackjoin Block Builder</h1>

      <Link href="/add-stackjoin">
        <Button>Add Stackjoin</Button>
      </Link>

      <div id="stackjoins">
        <div className="stackjoin-row bold">
          <div className="amount">Amount</div>
          <div className="twitter">Twitter Handle</div>
          <div className="url">URL</div>
        </div>
        {stackjoins.map((stackjoin) => {
          return (
            <div className="stackjoin-row">
              <Checkbox checked={checked} onChange={handleChange} />
              <div className="amount">{stackjoin.amount}</div>
              <div className="twitter">{stackjoin.miner}</div>
              <div className="url">
                <a href={stackjoin.twitterURL}>{stackjoin.twitterURL}</a>
              </div>
            </div>
          );
        })}
      </div>
    </StackjoinWrapper>
  );
};
export default Stackjoin;
