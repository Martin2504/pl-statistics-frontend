import React, {FunctionComponent, useEffect, useState} from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import FootballTeam from "../../interfaces/FootballTeam";
import logging from "../../config/logging";
import axios from "axios";

interface OwnProps {
}

type Props = OwnProps;

const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjQ4NTk4MDI1LCJpYXQiOjE2NDg1ODAwMjV9.2--0I0cQ85Qn0w1RuU8kixjgesw1-uU96lOm7vb1AyA5q6W2dbMmTVyq9CxYCpNxU00wmWN46f_anHwqpkZxCA';

const SmallTable: FunctionComponent<Props> = (props) => {

  const [leagueStandings, setLeagueStandings] = useState([]);

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 50
    },
    {
      field: 'teamName',
      headerName: 'Team Name',
      width: 220
    },
    {
      field: 'points',
      headerName: 'Points',
      width: 100
    }
  ]

  const fetchLeagueTable = () => {
    axios.get('http://localhost:8080/api/football-teams', {
      headers: {
        "Authorization": "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log(res.data);
        setLeagueStandings(res.data);
        logging.info('The League Table has been successfully fetched')
      })
      .catch(err => logging.error(err));
  }

  useEffect(()=> {
    logging.info('Loading small table data....');
    fetchLeagueTable();
  }, []) // passing empty array as a second argument to Use Effect prevents the method to call
  // fetchLeagueTable multiple times.

  const rows = leagueStandings.map((team: FootballTeam) => {
      return {
        id: team.tablePosition,
        teamName: team.name,
        points: team.leagueTableRecord.points
      }
    }
  )

  return (
    <DataGrid
      rows={rows}
      columns={columns}
    />
    )


}


export default SmallTable;
