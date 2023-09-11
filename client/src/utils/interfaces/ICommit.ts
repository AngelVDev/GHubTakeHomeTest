import { ICommitInfo } from "./ICommitInfo";
import { IGitHubUser } from "./IGitHubUser";

export interface ICommit {
    sha: string;
    node_id: string;
    commit: ICommitInfo;
    url: string;
    html_url: string;
    comments_url: string;
    author: IGitHubUser;
    committer: IGitHubUser;
  }

  