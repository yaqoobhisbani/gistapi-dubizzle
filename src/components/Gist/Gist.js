import React from "react";
import styled from "styled-components";
import Date from "./Date/Date";
import GistHeader from "./GistHeader/GistHeader";
import IconLink from "./IconLink/IconLink";

const Gist = ({ gist }) => {
  return (
    <Wrapper>
      <GistHeader
        avatarURL={gist?.owner?.avatar_url}
        login={gist?.owner?.login}
        commentsURL={gist?.comments_url}
        forksURL={gist?.forks_url}
        loginURL={gist?.owner?.html_url}
        fileCount={Object.keys(gist.files).length}
      />

      <Row>
        <Date label="Created at: " date={gist?.created_at} />
        <Date
          label="Last updated: "
          date={gist?.updated_at}
          style={styles.date}
        />
      </Row>

      <Description>{gist?.description}</Description>

      <FilesRow>
        {Object.values(gist.files).map((file, index) => (
          <IconLink
            label={file.filename}
            icon="file-text"
            link={file.raw_url}
            key={`${file.filename}_${index}`}
            style={styles.file}
          />
        ))}
      </FilesRow>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border-bottom: 1px solid ${(props) => props.theme.border};
  padding: 16px 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const FilesRow = styled(Row)`
  flex-wrap: wrap;
`;

const Description = styled.p`
  color: ${(props) => props.theme.darkgray};
  font-size: 16px;
  padding: 16px 0;
`;

const styles = {
  file: { marginRight: 16 },
  date: { marginLeft: 16 },
};

export default React.memo(Gist);
