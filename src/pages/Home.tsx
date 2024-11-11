import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Home = () => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      {/* toggle btns  */}
      <div>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="day" aria-label="left aligned">
            day
          </ToggleButton>
          <ToggleButton value="week" aria-label="centered">
            week
          </ToggleButton>
          <ToggleButton value="month" aria-label="right aligned">
            month
          </ToggleButton>
          <ToggleButton value="year" aria-label="justified">
            year
          </ToggleButton>
          <ToggleButton value="custom" aria-label="justified">
            custom
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};

export default Home;
