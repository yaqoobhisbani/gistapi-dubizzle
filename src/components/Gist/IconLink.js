import React from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import { colors } from "../../theme/colors";

const IconLink = ({ icon, label, link, style }) => {
  return (
    <Wrapper style={style}>
      <Octicon name={icon} style={iconStyle} />
      <Label href={link}>{label}</Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Label = styled.a`
  font-size: 16px;
  color: ${(props) => props.theme.primary};
  text-decoration: none;
  cursor: pointer;
  margin-left: 4px;
`;

const iconStyle = {
  color: colors.primary,
  fontSize: 16,
  fontWeight: "500",
};

export default IconLink;
