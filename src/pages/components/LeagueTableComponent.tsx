import React, {FunctionComponent, useEffect, useState} from 'react';
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import LeagueTableRecord from "../../interfaces/LeagueTableRecord";
import FootballTeam from "../../interfaces/FootballTeam";
import logging from "../../config/logging";
import axios from "axios";
import TeamsService from "../../services/TeamsService";

interface OwnProps {
  name: string
}

type Props = OwnProps;

const LeagueTableComponent: FunctionComponent<Props> = (props) => {

  const [teamArray, setTeamArray] = useState<FootballTeam[]>([]);

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
      width: 130
    },
    {
      field: 'totalGames',
      headerName: 'Games Played',
      width: 130
    },
    {
      field: 'totalWins',
      headerName: 'Total Wins',
      width: 130
    },
    {
      field: 'totalDraws',
      headerName: 'Total Draws',
      width: 130
    },
    {
      field: 'totalLosses',
      headerName: 'Total Losses',
      width: 130
    }
  ]

  const rows: LeagueTableRecord[] = teamArray.map((team: FootballTeam) => {
    const tableRecord: LeagueTableRecord = {
      id: team.tablePosition,
      teamName: team.name,
      points: team.leagueTableRecord.points,
      totalGames: team.leagueTableRecord.matchesPlayed,
      totalWins: team.leagueTableRecord.seasonWinsOverall,
      totalDraws: team.leagueTableRecord.seasonDrawsOverall,
      totalLosses: team.leagueTableRecord.seasonLosses_overall
    }
    return tableRecord;
  });

  const fetchLeagueTable = () => {
    TeamsService.getFootballTeams()
      .then(teams => {
        setTeamArray(teams);
        logging.info('The League Table has been successfully fetched')
      })
      .catch(err => logging.error(err));
  }

  useEffect(() => {
    logging.info('Loading small table data....');
    fetchLeagueTable();
  }, []);


  return (
    <DataGrid
      rows={rows}
      columns={columns}
      autoHeight={true}
      disableExtendRowFullWidth={true}
      hideFooterSelectedRowCount={true}
      initialState={{
        sorting: {
          sortModel: [{field: 'points', sort: 'desc'}]
        }
      }}
    />
  );
};

export default LeagueTableComponent;
