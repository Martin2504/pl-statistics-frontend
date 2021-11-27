import IRoute from '../interfaces/route';
import TeamsTable from '../pages/teamsTable';
import HomePage from '../pages/home';
import TeamPage from "../pages/teamPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

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

    {
        path: '/sign-in',
        name: 'Sign In Page',
        component: SignIn,
        exact: true
    },

    {
        path: '/sign-up',
        name: 'Sign Up Page',
        component: SignUp,
        exact: true
    },
]

export default routes;
