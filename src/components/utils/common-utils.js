const checkValidJson = (text) => {
  // to check if a text is json
  if (
    /^[\],:{}\s]*$/.test(
      text
        .replace(/\\["\\bfnrtu]/g, "@")
        .replace(
          /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+]?\d+)?/g,
          "]"
        )
        .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
    )
  ) {
    return true;
  } else {
    return false;
  }
};

export const checkParams = (
  formData,
  paramData,
  jsonText,
  headerData,
  setErrorMsg
) => {
  if (!formData.url) {
    setErrorMsg("Request URL is missing");
    return false;
  }

  if (!checkValidJson(jsonText)) {
    setErrorMsg("Text is not valid json");

    return false;
  }
  return true;
};

export const getHeaderAndParams = (objArr) => {
  let obj = {};
  objArr.forEach((data) => {
    if (data.hasOwnProperty("check") && data.check) {
      obj = { ...obj, [data.key]: data.value };
    }
  });
  return obj;
};
