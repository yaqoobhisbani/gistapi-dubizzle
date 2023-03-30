import styled from "styled-components";
import React from "react";
import Gist from "./Gist";

const GistList = ({ gists }) => {
  return (
    <Wrapper>
      {Array.isArray(gists) &&
        gists.length > 0 &&
        gists.map((gist) => <Gist gist={gist} key={gist.id} />)}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-self: center;

  @media (max-width: 960px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export default React.memo(GistList);
