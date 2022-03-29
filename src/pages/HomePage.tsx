import React, {useEffect} from 'react';
import IPage from "../interfaces/page";
import logging from "../config/logging";
import {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import {Paper} from "@mui/material";
import SmallTable from "./components/SmallTable";

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

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const HomePage: React.FunctionComponent<IPage> = props => {

    useEffect(() => {
        logging.info(`Loading ${props.name}`);
    }, [props.name])

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
      <Grid item xs={12} display={'flex'} style={{
          height: '100vh',
      }}>
          <Grid item xs={4} style={{
            paddingRight: '20px'
          }}>
            <SmallTable />
          </Grid>
          <Grid item xs={8} style={{
            paddingLeft: '20px'
          }}>
            <h3>Content</h3>
          </Grid>
      </Grid>

    )
}

export default HomePage;
