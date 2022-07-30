import {
  Box,
  Select,
  MenuItem,
  styled,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import { ContextState } from "./context/DataProvider";

const Form = ({ onSendClick }) => {
  const { formData, setFormData } = ContextState();

  const handleChange = (e) => {
    setFormData({ ...formData, type: e.target.value });
  };

  const onUrlChange = (e) => {
    setFormData({ ...formData, url: e.target.value });
    console.log(formData);
  };

  return (
    <>
      <Container>
        <StyledSelect
          value={formData.type}
          label="POST"
          onChange={(e) => handleChange(e)}
        >
          <MenuItem value={"POST"}>POST</MenuItem>
          <MenuItem value={"GET"}>GET</MenuItem>
        </StyledSelect>
        <StyledInput size="small" onChange={(e) => onUrlChange(e)} />
        <StyledBtn variant="contained" onClick={() => onSendClick()}>
          Send
        </StyledBtn>
      </Container>
    </>
  );
};
const StyledSelect = styled(Select)`
  width: 150px;
  height: 40px;
  background: #f6f6f6;
`;
const StyledInput = styled(TextField)`
  width: 100%;
  background: #f6f6f6;
`;
const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledBtn = styled(Button)`
  width: 100px;
  border-radius: 2px;
  height: 40px;
  margin-left: 8px;
`;
export default Form;
