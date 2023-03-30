import { useEffect, useState, useCallback } from "react";
import styled, { ThemeProvider } from "styled-components";
import GistList from "./components/GistList";
import Header from "./components/Header";
import Loading from "./components/Loading";
import GlobalStyles from "./GlobalStyle";
import { getPublicGists } from "./services/gistService";
import { colors } from "./theme/colors";
import Error from "./components/Error";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [gists, setGists] = useState([]);

  useEffect(() => {
    fetchPublicGists();
  }, []);

  const fetchPublicGists = useCallback(() => {
    getPublicGists()
      .then((response) => {
        if (response.status == 200) {
          setGists(response.data);
          setLoading(false);
          setError(false);
        }
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <ThemeProvider theme={colors}>
      <Wrapper className="App" data-testid="app">
        <Header />
        <GlobalStyles />
        {loading ? <Loading /> : error ? <Error /> : <GistList gists={gists} />}
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
`;

export default App;
