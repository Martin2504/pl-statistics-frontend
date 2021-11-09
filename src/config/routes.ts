import IRoute from '../interfaces/route';
import TeamsTable from '../pages/teamsTable';
import HomePage from '../pages/home';
import TeamPage from "../pages/teamPage";

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true
    },
    {
        path: '/teams-table',
        name: 'Teams Page',
        component: TeamsTable,
        exact: true
    },
    {
        path: '/team/:number',
        name: 'Single team View',
        component: TeamPage,
        exact: true
    },
]

export default routes;
