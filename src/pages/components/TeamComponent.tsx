import React, {FunctionComponent, useContext, useEffect, useState} from 'react';
import {CardMedia, Grid} from "@mui/material";
import {Context} from "../../config/Context";
import TeamsService from "../../services/TeamsService";
import FootballTeam from "../../interfaces/FootballTeam";

interface OwnProps {}

type Props = OwnProps;

const TeamComponent: FunctionComponent<Props> = (props) => {

  const [team, setTeam] = useState<FootballTeam | null>(null);
  const {selectedTeamId} = useContext(Context);


  useEffect(() => {
    if(selectedTeamId !== ""){
      TeamsService.fetchSingleTeam(selectedTeamId).then(res => setTeam(res))
    }
  }, [selectedTeamId]);


   if (!team) {
     return (<p>Nothing to show, please select a team. </p>)
   } else {
    return (
      <Grid container xs={12} direction={'column'} textAlign={'center'}>
      <img
    src={team.image}
    width={'150px'}
    style={{
      display: "block",
        margin: "0 auto"
    }}
    />

    <h1> {team.name}</h1>
    <h5>Founded: {team.founded}</h5>

    <Grid container display={'flex'} direction={'row'} textAlign={'left'}>
      <Grid item xs={5} className={'key'}><h2 style={{fontWeight: '300'}}>Alternative Name</h2></Grid>
      <Grid item xs={7} className={'value'}><h2 style={{fontWeight: '100', color: '#777', fontStyle: 'italic'}}>{team.altNames}</h2></Grid>
    </Grid>
    <Grid container display={'flex'} direction={'row'} textAlign={'left'}>
      <Grid item xs={5} className={'key'}><h2 style={{fontWeight: '300'}}>Country</h2></Grid>
      <Grid item xs={7} className={'value'}><h2 style={{fontWeight: '100', color: '#777', fontStyle: 'italic'}}>{team.country}</h2></Grid>
    </Grid>
    <Grid container display={'flex'} direction={'row'} textAlign={'left'}>
      <Grid item xs={5} className={'key'}><h2 style={{fontWeight: '300'}}>Current League Rank</h2></Grid>
      <Grid item xs={7} className={'value'}><h2 style={{fontWeight: '100', color: '#777', fontStyle: 'italic'}}>{team.tablePosition}</h2></Grid>
    </Grid>
    <Grid container display={'flex'} direction={'row'} textAlign={'left'}>
      <Grid item xs={5} className={'key'}><h2 style={{fontWeight: '300'}}>Points</h2></Grid>
      <Grid item xs={7} className={'value'}><h2 style={{fontWeight: '100', color: '#777', fontStyle: 'italic'}}>{team.leagueTableRecord.points}</h2></Grid>
    </Grid>
    <Grid container display={'flex'} direction={'row'} textAlign={'left'}>
      <Grid item xs={5} className={'key'}><h2 style={{fontWeight: '300'}}>Official Site</h2></Grid>
      <Grid item xs={7} className={'value'}><h3 style={{fontWeight: '100', color: '#777', fontStyle: 'italic'}}><a href={team.officialSites} target="_blank">{team.officialSites}</a></h3></Grid>
    </Grid>


  </Grid>
  )
   }


};

export default TeamComponent;
