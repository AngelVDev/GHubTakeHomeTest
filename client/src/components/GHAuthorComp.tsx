type Props = {
    authorId: number,
    authorHtmlURL: string,
    authorLogin: string,
    authorNodeId: string,
    authorUrl: string
}

const GHAuthorComp = ({props}: {props: Props}) => {
  return (
    <div className="bg-[#3d0e433c] p-2 rounded-md">
    <p className="mb-1">ID:{props.authorId}</p>
    <div className="mb-2">
      <p className="mb-1">Github:</p>
      <a
        className="bg-[#22162bc9] text-white p-1.5 rounded-md"
        href={props.authorHtmlURL}
      >
        {props.authorLogin}
      </a>{' '}
    </div>
    <p className="text-sm mb-1">Node ID: {props.authorNodeId}</p>
    <a className="p-1 bg-[#3d0e4358] rounded-md" href={props.authorUrl}>
      Author Data from API
    </a>
  </div>
  )
}

export default GHAuthorComp