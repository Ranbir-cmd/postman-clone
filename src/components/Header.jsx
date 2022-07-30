import React from "react";
import { styled } from "@mui/material";

const Header = () => {
  const logo =
    "https://miro.medium.com/max/802/1*dLWPk_rziSpWhPx1UWONbQ@2x.png";
  return (
    <div>
      <StyledLogo src={logo} alt="logo" />
    </div>
  );
};
const StyledLogo = styled("img")({
  width: 100,
  padding: 5,
  margin: "10px",
});
export default Header;
