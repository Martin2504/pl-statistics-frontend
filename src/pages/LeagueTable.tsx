import React, {useEffect, useState} from 'react';
import IPage from "../interfaces/page";
import logging from "../config/logging";
import {Link} from "react-router-dom";
import axios from "axios";
import FootballTeam from "../interfaces/FootballTeam";
import "../assets/style/TeamTable.css"
import LeagueTableComponent from "./components/LeagueTableComponent";

const LeagueTable: React.FunctionComponent<IPage> = props => {

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
        // fetchFootballTeams();
    }, [props]);

    return (
        <LeagueTableComponent name={'league-table'} />
    )
}

export default LeagueTable;
