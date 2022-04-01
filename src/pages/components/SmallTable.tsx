import React, {FunctionComponent, useContext, useEffect, useState} from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import FootballTeam from "../../interfaces/FootballTeam";
import logging from "../../config/logging";
import SmallTableRecord from "../../interfaces/SmallTableRecord";
import {useNavigate} from "react-router-dom";
import AuthService from "../../services/AuthService";
import TeamsService from "../../services/TeamsService";
import {Context} from "../../config/Context";

interface OwnProps {
}

type Props = OwnProps;

const SmallTable: FunctionComponent<Props> = (props) => {

  const navigate = useNavigate();

  const [leagueStandings, setLeagueStandings] = useState<FootballTeam[]>([]);
  const {toggleSelectedTeamId} = useContext(Context);

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

  const fetchLeagueTable = (token: string | null) => {
    TeamsService.getFootballTeams()
      .then(teams => {
        // console.log(res.data);
        setLeagueStandings(teams);
        logging.info('The League Table has been successfully fetched')
      })
      .catch(err => {
        err.request.status === 401 ? navigate('/sign-in'): logging.error(err);
      });
  }

  useEffect(()=> {
    logging.info('Loading small table data....');
    fetchLeagueTable(AuthService.getCurrentUser());
  }, []) // passing empty array as a second argument to Use Effect prevents the method to call
  // fetchLeagueTable multiple times.



  const rows: SmallTableRecord[] | any = leagueStandings.map((team: FootballTeam) => {
      return {
        id: team.tablePosition,
        teamName: team.name,
        points: team.leagueTableRecord.points,
        internalId: team.id
      }
    }
  )

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
          onRowClick={(param, event) => {
            toggleSelectedTeamId(param.row.internalId);
          } }
        />
  )
}


export default SmallTable;
