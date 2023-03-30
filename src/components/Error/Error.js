import React from "react";
import styled from "styled-components";
import Octicon from "react-octicon";

const Error = ({ message }) => {
  return (
    <Wrapper>
      <Octicon name="stop" style={icon} data-testid="stop-icon" />
      <Message>
        {message ? message : "Something went wrong! Please try again later."}
      </Message>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 16px;
`;

const Message = styled.p`
  font-size: 16px;
  margin-top: 8px;
`;

const icon = { fontSize: 48, color: "red" };

export default Error;
