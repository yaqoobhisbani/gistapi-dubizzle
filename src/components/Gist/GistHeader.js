import React from "react";
import styled from "styled-components";
import IconLink from "./IconLink";

const getFilesLabel = (count) => {
  if (count == 0) return count + " " + "Files";
  if (count == 1) return count + " " + "File";
  if (count > 1) return count + " " + "Files";
};

const GistHeader = ({
  avatarURL,
  login,
  loginURL,
  commentsURL,
  forksURL,
  fileCount,
}) => {
  return (
    <Header>
      <Person>
        <Photo src={avatarURL} />
        <NameLink href={loginURL}>{login}</NameLink>
      </Person>

      <Row>
        <IconLink
          label={getFilesLabel(fileCount)}
          icon="code"
          style={iconLink}
        />
        <IconLink
          label="Forks"
          icon="repo-forked"
          link={forksURL}
          style={iconLink}
        />
        <IconLink
          label="Comments"
          icon="comment"
          link={commentsURL}
          style={iconLink}
        />
        <IconLink label="Stars" icon="star" />
      </Row>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
`;

const Person = styled.div`
  display: flex;
  align-items: center;
`;

const Photo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 500px;
`;

const NameLink = styled.a`
  font-size: 16px;
  color: ${(props) => props.theme.primary};
  text-decoration: none;
  cursor: pointer;
  margin-left: 8px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const iconLink = { marginRight: 16 };

export default GistHeader;
