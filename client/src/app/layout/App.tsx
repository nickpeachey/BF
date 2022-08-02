import React from "react";
import "./App.css";
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import HomePage from "./Homepage";

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#eaeaea",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
