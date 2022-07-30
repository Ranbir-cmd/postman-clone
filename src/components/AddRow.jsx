import React, { useState } from "react";
import {
  TableRow,
  TableCell,
  styled,
  Checkbox,
  TextField,
} from "@mui/material";

const AddRow = ({ setRows, rowId, data, setData }) => {
  //  checking if checkbox is checked
  const [checkBox, setCheckBox] = useState(false);

  const handleChange = (e) => {
    let result = data.filter((entry) => entry.id === Number(e.target.name))[0];

    if (!checkBox) {
      setCheckBox(true);
      setRows((oldArr) => [...oldArr, rowId]);
      result = { ...result, id: rowId, check: true };
    } else {
      setCheckBox(false);
      result = { ...result, id: rowId, check: false };
    }

    let index = data.findIndex((value) => value.id === Number(e.target.name));
    if (index === -1) {
      setData((oldArr) => [...oldArr, result]);
    } else {
      const newArr = Object.assign([...data], { [index]: result });
      setData(newArr);
    }
  };

  const onTextChange = (e) => {
    // finding the object, where data changes
    let result = data.filter((entry) => entry.id === rowId)[0];
    // then updating the object
    result = { ...result, id: rowId, [e.target.name]: e.target.value };

    // before pushing to the Array, checking if this object already exists or not
    let index = data.findIndex((value) => value.id === rowId);
    if (index === -1) {
      setData((oldArr) => [...oldArr, result]);
    } else {
      const newArr = Object.assign([...data], { [index]: result });
      setData(newArr);
    }
    console.log(data);
  };

  return (
    <TableRow>
      <StyledCell>
        <Checkbox
          checked={checkBox}
          style={{ padding: "2px 5px" }}
          onChange={(e) => handleChange(e)}
        />
      </StyledCell>
      <StyledCell>
        <StyledTextfield
          inputProps={{ style: { height: 30, padding: "0 5px" } }}
          onChange={(e) => {
            onTextChange(e);
          }}
          name="key"
        />
      </StyledCell>
      <StyledCell>
        <StyledTextfield
          inputProps={{ style: { height: 30, padding: "0 5px" } }}
          onChange={(e) => {
            onTextChange(e);
          }}
          name="value"
        />
      </StyledCell>
    </TableRow>
  );
};

const StyledCell = styled(TableCell)`
  border: 1px solid rgba(224, 224, 224, 1);
  border-collapse: collapse;
  padding: 7px 5px;
`;

const StyledTextfield = styled(TextField)`
  width: 100%;
`;
export default AddRow;
