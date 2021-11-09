import React, {useEffect} from 'react';
import logging from "./config/logging";
import {BrowserRouter, Route, RouteComponentProps, Switch} from "react-router-dom";
import routes from "./config/routes";

const Application: React.FunctionComponent<{}> = props => {

    useEffect(() => {
        logging.info('Loading Application');
    }, [props])

    return(
        <div>
            <BrowserRouter>
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                render={(props: RouteComponentProps<any>) => (
                                    <route.component
                                        name={route.name}
                                        {...props}
                                        {...route.props}
                                    />
                                )}
                            />
                        )
                    })}
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Application;