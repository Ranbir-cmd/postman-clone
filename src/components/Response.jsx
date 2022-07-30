import { Box, Typography, TextareaAutosize } from "@mui/material";
import React from "react";

const styleTextArea = {
  width: "100%",
  background: `url(http://i.imgur.com/2cOaJ.png)`,
  backgroundAttachment: "local",
  backgroundRepeat: "no-repeat",
  paddingLeft: 35,
  paddingTop: 10,
  borderColor: "#ccc",
};

const Response = ({ data }) => {
  let obj = data;

  let readableobj = "{ \n";
  for (let key in obj) {
    readableobj += "\t";
    readableobj +=
      typeof obj[key] === "string"
        ? `${key}: "${obj[key]}"`
        : `${key}: ${obj[key]}`;
    if (Object.keys(obj).pop() !== key.toString()) {
      readableobj += ",\n";
    }
  }
  readableobj += "\n}";

  return (
    <Box>
      <Typography mt={2} mb={2}>
        Response
      </Typography>
      <TextareaAutosize
        minRows={3}
        maxRows={8}
        style={styleTextArea}
        disabled="disabled"
        // want srting, but data is object
        value={readableobj}
      />
    </Box>
  );
};

export default Response;
