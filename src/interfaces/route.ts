import React, {FunctionComponent} from "react";

export default interface IRoute {
    path: string;
    name: string;
    component: any;
    props?: any;
}
