import React from "react";

import { ThemeProvider } from "@mui/material";

import {
  Header,
  SliderBlog,
  RegularBlog,
  BigPostBlog,
  MetroBlog,
  SubFooter,
  Footer,
} from "src/containers";

import { theme } from "src/utils/constants/ui";

import "./App.css";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <SliderBlog />
        <RegularBlog />
        <BigPostBlog />
        <MetroBlog />
        <SubFooter />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
