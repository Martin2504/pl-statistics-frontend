import React, {useEffect} from 'react';
import logging from "./config/logging";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LayoutComponent from "./pages/LayoutComponent";
import HomePage from "./pages/HomePage";
import LeagueTable from "./pages/LeagueTable";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const Application: React.FunctionComponent<{}> = props => {

    useEffect(() => {
        logging.info('Loading Application');
    }, [props])

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayoutComponent/>}>
                        <Route index element={<HomePage name={'Home Page'} />} />
                        <Route path="league-table" >
                            <Route index element={<LeagueTable name={'League Table'} />} />
                            {/*<Route path=":teamId" element={<TeamPage name={'League Table'} />} />*/}
                        </Route>
                    </Route>
                    <Route path="/sign-in" element={<SignIn name={"sign-in"} />} />
                    <Route path="/sign-up" element={<SignUp name={"sign-up"} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Application;
