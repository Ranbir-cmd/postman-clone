import { Box, Tabs, Tab, styled } from "@mui/material";
import React, { useState } from "react";
import { ContextState } from "./context/DataProvider";
import CreateJsonText from "./CreateJsonText";
import CreateTable from "./CreateTable";

const SelectTab = () => {
  const [value, setValue] = useState(0);

  const { paramData, setParamData, headerData, setHeaderData } = ContextState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Component>
      <Tabs
        value={value}
        onChange={handleChange}
        // to override color
        TabIndicatorProps={{
          sx: { backgroundColor: "#F26B3A", height: 4, bottom: 2 },
        }}
        textColor="none"
      >
        <StyledTab label="Params" />
        <StyledTab label="Headers" />
        <StyledTab label="Body" />
      </Tabs>

      {/* query tab  */}
      <Box
        role="tabpanel"
        hidden={value !== 0}
        id={`simple-tabpanel-${0}`}
        aria-labelledby={`simple-tab-${0}`}
      >
        <CreateTable
          text="Query Params"
          data={paramData}
          setData={setParamData}
        />
      </Box>

      {/* header tab */}
      <Box
        role="tabpanel"
        hidden={value !== 1}
        id={`simple-tabpanel-${1}`}
        aria-labelledby={`simple-tab-${1}`}
      >
        <CreateTable text="Headers" data={headerData} setData={setHeaderData} />
      </Box>

      <Box
        role="tabpanel"
        hidden={value !== 2}
        id={`simple-tabpanel-${2}`}
        aria-labelledby={`simple-tab-${2}`}
      >
        <CreateJsonText />
      </Box>
    </Component>
  );
};

const Component = styled(Box)`
  margin-top: 20px;
`;
const StyledTab = styled(Tab)`
  text-transform: none;
`;

export default SelectTab;
