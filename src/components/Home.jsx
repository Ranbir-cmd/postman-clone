import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import SelectTab from "./SelectTab";
import Response from "./Response";
import ErrorScreen from "./ErrorScreen";
import { ContextState } from "./context/DataProvider";
import { checkParams } from "./utils/common-utils";
import SnackBar from "./SnackBar";
import { getData } from "./service/api";

const Home = () => {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [errorResponse, setErrorResponse] = useState(false);
  const [apiResponse, setApiResponse] = useState({});

  const { formData, paramData, jsonText, headerData } = ContextState();

  const onSendClick = async () => {
    if (!checkParams(formData, paramData, jsonText, headerData, setErrorMsg)) {
      setError(true);
      return false;
    }

    // api calling
    const response = await getData(formData, paramData, jsonText, headerData);

    // in the case of failed response
    if (response === "error") {
      setErrorResponse(true);
      return;
    }
    // in the case of successfull response
    setErrorResponse(false);
    setApiResponse(response.data);
  };

  return (
    <>
      <Header />
      <Container>
        <Form onSendClick={onSendClick} />
        <SelectTab />

        {errorResponse ? <ErrorScreen /> : <Response data={apiResponse} />}

        {error && (
          <SnackBar error={error} setError={setError} errorMsg={errorMsg} />
        )}
      </Container>
    </>
  );
};

const Container = styled(Box)`
  width: 70%;
  margin: 20px auto;
`;
export default Home;
