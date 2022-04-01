import React, { FunctionComponent } from 'react';
import Typography from "@mui/material/Typography";

interface OwnProps {
    title: string
}

type Props = OwnProps;

const Title: FunctionComponent<Props> = (props) => {

  return (
    <Typography component="h1" variant="h3" color="primary" style={{textAlign: 'center', margin: '30px 0'}}>
        {props.title}
    </Typography>
  );
};

export default Title;
