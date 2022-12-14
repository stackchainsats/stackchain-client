import { useState } from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import axios from "axios";
import styled from "styled-components";
import { useRouter } from "next/router";

const TextInputWrapper = styled.div`
  margin-bottom: 10px;
`;

const AddStackjoin = () => {
  const router = useRouter();
  const [stackjoin, setStackjoin] = useState({
    amount: "",
    miner: "",
    twitterURL: "",
  });

  const onSubmitStackjoin = async (e) => {
    e.preventDefault();

    if (isNaN(stackjoin.amount)) {
      return;
    }

    await axios.post(
      "https://stackchain-backend.herokuapp.com/api/stackjoins",
      {
        amount: stackjoin.amount,
        miner: stackjoin.miner,
        twitterURL: stackjoin.twitterURL,
      }
    );

    setStackjoin({
      amount: "",
      miner: "",
      twitterURL: "",
    });

    router.push("/stackjoin");
  };

  return (
    <div>
      <h1>Add stackjoin page</h1>
      <TextInputWrapper>
        <TextInput
          type="number"
          name="amount"
          label="Amount"
          onChange={(e) =>
            setStackjoin({
              ...stackjoin,
              amount: e.target.value,
            })
          }
          value={stackjoin.amount}
        />
      </TextInputWrapper>
      <TextInputWrapper>
        <TextInput
          type="text"
          name="miner"
          label="Miner"
          onChange={(e) =>
            setStackjoin({
              ...stackjoin,
              miner: e.target.value,
            })
          }
          value={stackjoin.miner}
        />
      </TextInputWrapper>
      <TextInputWrapper>
        <TextInput
          type="text"
          name="twitterURL"
          label="Twitter URL"
          onChange={(e) =>
            setStackjoin({
              ...stackjoin,
              twitterURL: e.target.value,
            })
          }
          value={stackjoin.twitterURL}
        />
      </TextInputWrapper>
      <Button onClick={onSubmitStackjoin}>Create</Button>
    </div>
  );
};
export default AddStackjoin;
