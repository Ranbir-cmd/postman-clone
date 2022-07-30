import {
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  styled,
} from "@mui/material";
import { useState } from "react";
import AddRow from "./AddRow";

const CreateTable = ({ text, data, setData }) => {
  const [rows, setRows] = useState([0]);

  return (
    <>
      <Box>
        <Typography mt={2} mb={2}>
          {text}
        </Typography>

        <Table
          sx={{ minWidth: "100% ", border: "1px solid rgba(224,224,224,1)" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <StyledCell></StyledCell>
              <StyledCell>KEY</StyledCell>
              <StyledCell>VALUE</StyledCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* after clicking checkbox, a cell/row will be generated  */}
            {rows.map((row, index) => (
              <AddRow
                key={index}
                setRows={setRows}
                rowId={index}
                data={data}
                setData={setData}
              />
            ))}
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

const StyledCell = styled(TableCell)`
  border: 1px solid rgba(224, 224, 224, 1);
  border-collapse: collapse;
  padding: 7px 5px;
`;
export default CreateTable;
