import React from 'react';
import { formattedDate } from '../utils/dateFormatter';

type Props = {
  authorName: string;
  authorEmail: string;
  authorDate: string;
};

const CommitAuthorComp = ({ props }: { props: Props }) => {
  return (
    <React.Fragment>
      <p>Name: {props.authorName}</p>
      <p>e-mail: {props.authorEmail}</p>
      <p>Date:</p>
      <p> {formattedDate(props.authorDate)}</p>
    </React.Fragment>
  );
};

export default CommitAuthorComp;
