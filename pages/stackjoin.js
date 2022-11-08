import { useState } from "react";
import Checkbox from "../components/Checkbox";

const Stackjoin = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div>
      <h1>Stackjoin Page</h1>
      <Checkbox checked={checked} onChange={handleChange} />
    </div>
  );
};
export default Stackjoin;
