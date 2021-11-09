import React, {useEffect, useState} from 'react';
import IPage from "../interfaces/page";
import logging from "../config/logging";
import {RouteComponentProps, withRouter, Link} from "react-router-dom";
import axios from "axios";
import FootballTeam from "../interfaces/FootballTeam";
import "../assets/style/TeamTable.css"

const TeamsTable: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {

    const [teamsList, setTeamsList] = useState([])

    const fetchFootballTeams = () => {
        axios.get('http://localhost:8080/api/football-team')
            .then(res => {
                console.log(res.data);
                setTeamsList(res.data);
            })
            .catch(err => logging.error(err));
    }

    useEffect(() => {
        logging.info(`Loading ${props.name}`);
        fetchFootballTeams();
    }, [props]);

    const teamsListElements = teamsList.map((footballTeam: FootballTeam) =>
        <li>
            <Link to={`/team/${footballTeam.id}`} >
                <span>{footballTeam.id}</span>
                <span>{footballTeam.teamName}</span>
                <span>{footballTeam.address}</span>
            </Link>
        </li>
    )

    return (
        <ul>
            {teamsListElements}
        </ul>
    )
}

export default withRouter(TeamsTable);