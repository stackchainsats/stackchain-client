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
    const checkedAdded = data.map((item) => {
      return { ...item, checked: false };
    });

    setStackjoins(checkedAdded);
  };

  const handleChange = (e, id) => {
    const updatedStackjoins = [...stackjoins].map((stackjoin) => {
      if (stackjoin._id === id) {
        return { ...stackjoin, checked: e.target.checked };
      }
      return stackjoin;
    });
    setStackjoins(updatedStackjoins);
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
        {stackjoins.map((stackjoin, index) => {
          return (
            <div className="stackjoin-row" key={index}>
              <Checkbox
                checked={stackjoin.checked}
                onChange={(e) => handleChange(e, stackjoin._id)}
              />
              <div className="amount">{stackjoin.amount}</div>
              <div className="twitter">{stackjoin.miner}</div>
              <div className="url">
                <a href={stackjoin.twitterURL}>{stackjoin.twitterURL}</a>
              </div>
            </div>
          );
        })}
        <div>
          {stackjoins.reduce((acc, cur) => {
            if (cur.checked) {
              return acc + cur.amount;
            }
            return acc;
          }, 0)}
        </div>

        <Button>Generate Tweet</Button>
        {stackjoins.map((stackjoin, index) => {
          if (stackjoin.checked) {
            return (
              <div key={index}>
                ${stackjoin.amount} {stackjoin.miner} {stackjoin.twitterURL}
              </div>
            );
          }
        })}
      </div>
    </StackjoinWrapper>
  );
};
export default Stackjoin;
