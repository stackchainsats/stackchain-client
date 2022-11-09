import React, { useState, useEffect } from "react";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import Link from "next/link";
import axios from "axios";

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
      <h1>Stackjoin Page</h1>
      <Checkbox checked={checked} onChange={handleChange} />
      <Link href="/add-stackjoin">
        <Button>Add Stackjoin</Button>
      </Link>
    </div>
  );
};
export default Stackjoin;
