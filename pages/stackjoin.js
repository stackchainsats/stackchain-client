import React, { useState, useEffect } from "react";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button"
import TextInputStyles from"../components/TextInput"

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
      <h2>Space to Write Tweet</h2>
      <TextInputStyles></TextInputStyles>
      <span>TwitterHandle - $Ammount - URL - Time Stamp</span>
      <Checkbox checked={checked} onChange={handleChange} /> <br></br>
      <Button>Text for test</Button>
    </div>
  );
};
export default Stackjoin;
