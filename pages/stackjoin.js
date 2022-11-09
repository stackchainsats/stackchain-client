import React, { useState, useEffect } from "react";
import Checkbox from "../components/Checkbox";
<<<<<<< Updated upstream
import Button from "../components/Button";
import Link from "next/link";
import axios from "axios";
=======
import Button from "../components/Button"
import TextInputStyles from"../components/TextInput"
>>>>>>> Stashed changes

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
      <span>TwitterHandle - $Ammount - URL - Time Stamp</span>>
      <Checkbox checked={checked} onChange={handleChange} />
<<<<<<< Updated upstream
      <Link href="/add-stackjoin">
        <Button>Add Stackjoin</Button>
      </Link>
=======
      <Button>Text for test</Button>
>>>>>>> Stashed changes
    </div>
  );
};
export default Stackjoin;
