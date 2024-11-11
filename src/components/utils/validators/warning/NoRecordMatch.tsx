import { Button } from "@mui/material";
import Filtererror from "../../../../assets/Filtererror.svg";
import { styled } from "@mui/material/styles";

const StyledGridOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  "& .no-rows-primary": {
    fill: "#3D4751",
    ...theme.applyStyles("light", {
      fill: "#AEB8C2",
    }),
  },
  "& .no-rows-secondary": {
    fill: "#1D2126",
    ...theme.applyStyles("light", {
      fill: "#E8EAED",
    }),
  },
}));

const NoRecordMatch = () => {
  return (
    <StyledGridOverlay>
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-center">
        <img src={Filtererror} />

        <div className="max-w-[300px] space-y-2">
          <p className="text-xs text-gray-500">
            No records match this filter(s) criteria. Use different criteria or
            clear filters to show results.
          </p>
        </div>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 2,
            fontSize: 12,
            fontWeight: "600",
            textTransform: "none",
          }}
          onClick={() => {
            console.log("Clear search clicked");
          }}
        >
          Clear filters
        </Button>
      </div>
    </StyledGridOverlay>
  );
};

export default NoRecordMatch;
