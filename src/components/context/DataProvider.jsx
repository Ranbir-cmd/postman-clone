import  { createContext, useState, useContext } from "react";

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [formData, setFormData] = useState({ url: "", type: "POST" });
  const [paramData, setParamData] = useState([]);
  const [headerData, setHeaderData] = useState([]);
  const [jsonText, setJsonText] = useState("");

  return (
    <DataContext.Provider
      value={{
        formData,
        setFormData,
        paramData,
        setParamData,
        headerData,
        setHeaderData,
        jsonText,
        setJsonText,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const ContextState = () => {
  return useContext(DataContext);
};

export default DataProvider;
