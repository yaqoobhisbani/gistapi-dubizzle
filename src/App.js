import { useEffect, useState, useCallback, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import GistList from "./components/GistList";
import Header from "./components/Header";
import Loading from "./components/Loading";
import GlobalStyles from "./GlobalStyle";
import { getPublicGists, getGistForUser } from "./services/gistService";
import { colors } from "./theme/colors";
import Error from "./components/Error";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [search, setSearch] = useState("");
  const [gists, setGists] = useState([]);
  const [userGists, setUserGists] = useState([]);

  // Get and display public gists when app starts
  useEffect(() => {
    fetchPublicGists();
  }, []);

  useEffect(() => {
    // Reset search gists if input is empty & show public gists
    if (search.length === 0) {
      setError(false);
      setErrorMessage("");
      setUserGists([]);
    }

    // Delay API Call by 800ms
    const timeout = setTimeout(() => {
      if (search.length > 0) {
        fetchUserGists(search);
      }
    }, 800);

    return () => {
      clearTimeout(timeout);
    };
  }, [search]);

  // Get Public Gists
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

  // Get gists of a single user
  const fetchUserGists = useCallback((username) => {
    setLoading(true);
    getGistForUser(username)
      .then((response) => {
        if (response.data.length > 0) {
          setUserGists(response.data);
          setLoading(false);
          setError(false);
        }

        if (response.data.length === 0) {
          setUserGists(response.data);
          setLoading(false);
          setError(true);
          setErrorMessage(`${username} doesn't have any gists available!`);
        }
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const onChangeSearch = (event) => setSearch(event.target.value);

  const renderContent = () => {
    if (loading) return <Loading />;
    if (error) return <Error message={errorMessage} />;

    if (userGists.length > 0) {
      return <GistList gists={userGists} />;
    }

    return <GistList gists={gists} />;
  };

  return (
    <ThemeProvider theme={colors}>
      <Wrapper className="App" data-testid="app">
        <Header search={search} onChange={onChangeSearch} />
        <GlobalStyles />
        {renderContent()}
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
