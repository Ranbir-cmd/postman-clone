import React from "react";
import { Box, Typography, styled } from "@mui/material";

const ErrorScreen = () => {
  const error = "https://i.stack.imgur.com/01tZQ.png";

  return (
    <Box>
      <Typography mt={2} mb={2}>
        Response
      </Typography>
      <Box style={{ display: "flex" }}>
        <ErrorImg src={error} alt="error-img" />
      </Box>
    </Box>
  );
};

const ErrorImg = styled("img")({
  width: "60%",
  height: "auto",
  margin: "auto",
  objectPosition: "center 0%",
});
export default ErrorScreen;
