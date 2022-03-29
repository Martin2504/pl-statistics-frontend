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
    <div>
      <Grid item xs={12} className={'title-wrapper'}>
        <Title title="Premier League Statistics"/>
      </Grid>
      <Grid item xs={12} display={'flex'} style={{
        justifyContent: 'center'
      }}>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/league-table')}>Table</button>
      </Grid>
    </div>
  );
};

export default Header;
