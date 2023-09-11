import React from 'react';
import { formattedDate } from '../utils/dateFormatter';

type Props = {
  committerName: string;
  committerEmail: string;
  committerDate: string;
};

const CommitCommitterComp = ({ props }: { props: Props }) => {
  return (
    <React.Fragment>
          <p>Committer:</p>
          <p>
            {props.committerName} / {props.committerEmail}
          </p>
          <p>Committer Date:</p>
          <p>{formattedDate(props.committerDate)}</p>
    </React.Fragment>
  );
};

export default CommitCommitterComp;
