import React from "react";
import styled from "styled-components";
import { formatDate } from "../../../utils";

const Date = ({ label, date, style }) => {
  return (
    <Wrapper style={style}>
      <span>{label}</span>
      <span>{formatDate(date)}</span>
    </Wrapper>
  );
};

const Wrapper = styled.p`
  color: ${(props) => props.theme.gray};
  font-size: 14px;
`;

export default Date;
