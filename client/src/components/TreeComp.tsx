import React from 'react'

type Props = {
    treeSha: string;
    treeUrl: string;
    commitUrl: string;
}

const TreeComp = ({ props }: { props: Props }) => {
  return (
    <React.Fragment>
    <p className="opacity-60 p-0.5 text-[0.7rem] text-center">
    Tree SHA: {props.treeSha}
  </p>
  <p className="p-1 bg-[#401c7f92] my-1 rounded-md text-center">
    <a href={props.treeUrl}>Tree URL in API</a>
  </p>
  <p className="p-1 bg-[#401c7f92] rounded-md text-center">
    <a href={props.commitUrl}>Commit URL in API</a>
  </p>
    </React.Fragment>
  )
}

export default TreeComp