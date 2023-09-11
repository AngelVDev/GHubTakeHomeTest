import React from 'react';

type Props = {
  committerId: number;
  committerLogin: string;
  committerHtmlUrl: string;
};


const GHCommitterComp = ({ props }: { props: Props }) => {
  return (
    <div className="bg-[#3d0e433c] p-2 rounded-md">
      <p>ID: {props.committerId}</p>
      <p className="mb-1">Committer GitHub Profile: </p>
      <a
        className="bg-[#22162bc9] text-white p-1.5 rounded-md"
        href={props.committerHtmlUrl}
      >
        {props.committerLogin}
      </a>
    </div>
  );
};

export default GHCommitterComp;
