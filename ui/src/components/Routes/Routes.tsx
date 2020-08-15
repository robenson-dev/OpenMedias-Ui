import React, { FC } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Details, Studio, Home } from "../../views/pages";


const Routes: FC = (): React.ReactElement => {

    return (
        <BrowserRouter>

            <Switch>

                <Redirect
                    exact
                    from="/"
                    to="/home"
                />

                <Route
                    component={Home}
                    exact
                    path="/home"
                />

                <Route
                    component={Details}
                    exact
                    path="/watch"
                />

                <Route
                    component={Studio}
                    exact
                    path="/studio"
                />

            </Switch>

        </BrowserRouter>
    )
}

export default Routes;
