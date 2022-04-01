import React, {FunctionComponent} from 'react';
import {Grid} from "@mui/material";
import Title from "./Title";
import {useNavigate} from "react-router-dom";

interface OwnProps {
}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {

  const navigate = useNavigate();

  return (
    <Grid container style={{ borderBottom: 'solid thin #888', paddingBottom: '30px', marginBottom: '30px' }} >
      <Grid item xs={12} className={'title-wrapper'}>
        <Title title="Premier League Statistics"/>
      </Grid>
      <Grid item xs={12} display={'flex'} style={{
        justifyContent: 'center'
      }}>
        <button onClick={() => navigate('/')} style={{ margin: ' 0 20px ' }} >Home</button>
        <button onClick={() => navigate('/league-table')} style={{ margin: ' 0 20px ' }}>Table</button>
      </Grid>
    </Grid>
  );
};

export default Header;
