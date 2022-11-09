import { useState } from "react";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import Link from "next/link";

const Stackjoin = () => {
  const [checked, setChecked] = useState(false);

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
