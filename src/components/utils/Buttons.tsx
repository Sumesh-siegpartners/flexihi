import { Button } from "@mui/material";

interface SubmitBtnProps {
  name: string;
  onClick: () => void;
}

export const SubmitBtn: React.FC<SubmitBtnProps> = ({ name, onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        borderRadius: 2,
        fontSize: 12,
        fontWeight: 600,
        textTransform: "none",
        width: 235,
      }}
    >
      {name}
    </Button>
  );
};
