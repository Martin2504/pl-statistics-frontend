import React, {useEffect, useMemo, useState} from 'react';
import IPage from "../interfaces/page";
import logging from "../config/logging";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import SmallTable from "./components/SmallTable";
import TeamComponent from "./components/TeamComponent";
import {Context} from "../config/Context";

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://localhost:3000/">
        MPetrovProductions
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const HomePage: React.FunctionComponent<IPage> = props => {
  const [selectedTeamId, setSelectedTeamId] = useState("");
  const toggleSelectedTeamId = (teamId: string) => setSelectedTeamId(teamId);


  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name])

  return (
    <Context.Provider value={{
      selectedTeamId,
      toggleSelectedTeamId
    }}>
      <Grid item xs={12} display={'flex'} style={{
        height: '100%',
        paddingTop: '30px'
      }}>
        <Grid item xs={4} style={{
          paddingRight: '20px'
        }}>
          <SmallTable />
        </Grid>
        <Grid container xs={8} display={'flex'}>
          <TeamComponent />
        </Grid>
      </Grid>
    </Context.Provider>
  )
}

export default HomePage;
