import { Typography, TextareaAutosize } from "@mui/material";
import React from "react";
import { ContextState } from "./context/DataProvider";

const styleTextArea = {
  width: "100%",
  background: `url(http://i.imgur.com/2cOaJ.png)`,
  backgroundAttachment: "local",
  backgroundRepeat: "no-repeat",
  paddingLeft: 35,
  paddingTop: 10,
  borderColor: "#ccc",
};

const CreateJsonText = () => {
  const { jsonText, setJsonText } = ContextState();

  const onValueChange = (e) => {
    setJsonText(e.target.value);
    console.log(jsonText);
  };

  return (
    <>
      <Typography mt={2} mb={2}>
        Json
      </Typography>
      <TextareaAutosize
        minRows={3}
        maxRows={5}
        style={styleTextArea}
        onChange={(e) => onValueChange(e)}
      />
    </>
  );
};

export default CreateJsonText;
