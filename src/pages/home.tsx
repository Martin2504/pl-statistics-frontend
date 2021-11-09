import React, {useEffect} from 'react';
import IPage from "../interfaces/page";
import logging from "../config/logging";
import {Link} from "react-router-dom";

const HomePage: React.FunctionComponent<IPage> = props => {

    useEffect(() => {
        logging.info(`Loading ${props.name}`);
    }, [props.name])

    return (
        <div>
            <p>Hi form home</p>
            <Link to="/teams-table">go to Teams Table</Link>
        </div>
    )
}

export default HomePage;