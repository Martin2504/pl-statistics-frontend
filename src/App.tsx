import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

interface FootballTeam {
    teamName: string;
    address: string;
}

const FootballTeamsList = () => {

    const [teamsList, setTeamsList] = useState([]);

    const fetchFootballTeams = () => {
        axios.get('http://localhost:8080/api/football-team')
            .then(res => {
                // console.log(res.data);
                setTeamsList(res.data)
            })
            .catch( err => console.log(err) )
    }

    useEffect(()=>{
        fetchFootballTeams()
    }, []);

    const teamsListElement = teamsList.map((footballTeam: FootballTeam, key) =>
        <li key={key}>
            <span>{footballTeam.teamName}</span>
            <span>{footballTeam.address}</span>
        </li>
    )

    return (
        <div>
            <h2>This is the list of the teams.</h2>
            <ol>
                {teamsListElement}
            </ol>
        </div>

    )
}

function App() {
  return (
    <div className="App">
      <FootballTeamsList />
    </div>
  );
}

export default App;
