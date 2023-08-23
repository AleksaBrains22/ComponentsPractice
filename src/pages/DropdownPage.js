import Dropdown from "../components/Dropdown";
import { useState } from "react";
function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
  };
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Yellow", value: "yellow" },
    { label: "Blue", value: "blue" },
    { label: "Orange", value: "orange" },
  ];

  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelection} />
    </div>
  );
}

export default DropdownPage;
