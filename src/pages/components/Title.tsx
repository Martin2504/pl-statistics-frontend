import React, { FunctionComponent } from 'react';
import Typography from "@mui/material/Typography";

interface OwnProps {
    title: string
}

type Props = OwnProps;

const Title: FunctionComponent<Props> = (props) => {

  return (
    <Typography component="h2" variant="h6" color="primary" style={{textAlign: 'center'}}>
        {props.title}
    </Typography>
  );
};

export default Title;
