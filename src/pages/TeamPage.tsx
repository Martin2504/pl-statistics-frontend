import React, {useEffect, useState} from 'react';
import IPage from "../interfaces/page";
import logging from "../config/logging";
import axios from "axios";
import {Link} from "react-router-dom";

const TeamPage: React.FunctionComponent<IPage> = props => {

    const [team, setTeam] = useState({id: '', teamName: '', address: ''});

    const fetchFootballTeamById = (id: number) => {
        axios.get('http://localhost:8080/api/football-team/' + id)
            .then(res => {
                console.log(res.data);
                setTeam(res.data);
            })
    }

    useEffect(() => {
        // const id = props.match.params.number;
        const id = 0 // temporary ... router 6 passes props differently.
        logging.info(`Loading ${props.name}`);
        fetchFootballTeamById(id);
    }, [props]);

    return (
        <div className="team-page">
            <p>Team ID: {team.id}</p> <br />
            <p>Team Name: {team.teamName}</p> <br />
            <p>Team Address: {team.address}</p> <br />
            <Link to="/teams-table" >Go Back to Team Table</Link>
            <br />
            <Link to="/" >Go Back to Home Page</Link>
        </div>
    )
}

export default TeamPage;
