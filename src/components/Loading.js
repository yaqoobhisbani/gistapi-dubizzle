import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Loading() {
  const [text, setText] = useState("Loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => {
        if (prev.includes("...")) return "Loading";
        else return prev + ".";
      });
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Wrapper>
      <LoadingText>{text}</LoadingText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.h3`
  font-size: 16px;
  color: ${(props) => props.theme.primary};
  font-weight: normal;
`;

export default Loading;
