import axios, {AxiosResponse} from 'axios';
import authHeader from './AuthHeader'
import FootballTeam from "../interfaces/FootballTeam";

const API_URL: string = 'http://localhost:8080/api/';

class TeamsService {

  async getFootballTeams(): Promise<FootballTeam[]> {
    const {data} = await axios.get<FootballTeam[], AxiosResponse>(API_URL + 'football-teams', {headers: authHeader()});
    return data;
  }

  async fetchSingleTeam(id: string): Promise<FootballTeam> {
    const {data} = await axios.get<FootballTeam, AxiosResponse>(API_URL + 'football-teams/' + id, {headers: authHeader()});
    return data;
  }

}

export default new TeamsService();
