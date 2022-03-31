import React, { FunctionComponent } from 'react';

interface OwnProps {
  name: string
}

type Props = OwnProps;

const TeamComponent: FunctionComponent<Props> = (props) => {

  return (
    <h1>
      This is the single team component.
    </h1>
  );
};

export default TeamComponent;
