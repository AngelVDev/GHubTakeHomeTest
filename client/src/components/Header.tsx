type Props = {
  props: {
    sha: string;
    node_id: string;
    message: string;
    htmlUrl: string;
    commentsUrl: string;
  };
};

const Header = ({ props }: Props) => {
  return (
    <header className="max-w-full flex flex-col items-center p-2 text-slate-50 bg-[#401c7f92] space-y-1 rounded-xl">
      <p className="text-lg text-center">Commit message: </p>
      <h2 className="text-lg text-center">'{props.message}'</h2>
      <p className="opacity-60 p-0.5 text-[0.45rem] text-center">
        Node ID: {props.node_id}
      </p>
      <p className="opacity-60 p-0.5 text-xs">SHA: {props.sha}</p>
      <a
        className="pointer rounded-md hover:opacity-75 transition-opacity p-1 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        href={props.htmlUrl}
      >
        See on repo
      </a>
      <a
        className="pointer rounded-md hover:opacity-75 transition-opacity p-1 bg-gradient-to-br from-pink-500 to-purple-900 text-white shadow-lg"
        href={props.commentsUrl}
      >
        Comment's data
      </a>
    </header>
  );
};

export default Header;
