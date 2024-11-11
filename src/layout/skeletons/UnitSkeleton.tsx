import {
  Skeleton,
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

const UnitSkeleton = ({ rows = 8, columns = 5 }) => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Table>
        <TableBody>
          {[...Array(rows)].map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {[...Array(columns)].map((_, colIndex) => (
                <TableCell key={colIndex}>
                  <Skeleton
                    variant="text"
                    width="100%"
                    height={20}
                    animation="wave"
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default UnitSkeleton;
