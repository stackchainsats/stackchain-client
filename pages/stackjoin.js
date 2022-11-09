import React, { useState, useEffect } from "react";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import Link from "next/link";
import axios from "axios";
import TextInputStyles from "../components/TextInput";

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
    <div>
      <h1>Stackjoin Block Builder</h1>
      <TextInputStyles> Write Your Tweet</TextInputStyles>
      <span>TwitterHandle - $Ammount - URL - Time Stamp</span>
      <Checkbox checked={checked} onChange={handleChange} />
      <Link href="/add-stackjoin">
        <Button>Add Stackjoin</Button>
      </Link>
    </div>
  );
};
export default Stackjoin;
