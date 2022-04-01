import React, {FunctionComponent, useEffect, useState} from 'react';
import {createTheme, styled, ThemeProvider} from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import {Box, Container, Grid} from "@mui/material";
import Header from "./components/Header";
import {Outlet} from "react-router-dom";
import logging from "../config/logging";

interface ILayoutProps {
}

const LayoutComponent: FunctionComponent<ILayoutProps> = (props) => {

  const plTheme = createTheme();

  const [title, setTitle] = useState('Premier League Statistics');

  useEffect(() => {
    logging.info('The Layout has been loaded!');

  });



  return (
    <ThemeProvider theme={plTheme}>
      <Container sx={{display: 'flex'}} style={{
        backgroundColor: '#EEE',
        flexDirection: 'column'
      }}>
        <CssBaseline/>
        <Grid item xs={12} className={'header-wrapper'} style={{
          height: '150px',
        }}>
          <Header />
        </Grid>
        <br />
        <Grid item xs={12} className={'content'} style={{
          height: '100%',
          padding: '20px'
        }} >
          <Outlet/>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default LayoutComponent;
