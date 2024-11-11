import { Button } from "@mui/material";
import SearchError from "../../../../assets/SearchError.svg";
import { styled } from "@mui/material/styles";

interface SearchWorkingProps {
  btnClick: Function;
}

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

const SearchWorking: React.FC<SearchWorkingProps> = ({ btnClick }) => {
  return (
    <StyledGridOverlay>
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-center">
        <img src={SearchError} />

        <div className="max-w-[300px] space-y-2">
          <p className="text-xs text-gray-500">
            No records match your search. Make sure the spelling is correct or
            use different keywords.
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
            btnClick();
          }}
        >
          Clear search
        </Button>
      </div>
    </StyledGridOverlay>
  );
};

export default SearchWorking;
