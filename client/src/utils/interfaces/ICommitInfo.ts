import { ICommitterInfo } from "./ICommitterInfo";
import { ITree } from "./ITree";

export interface ICommitInfo {
    author: ICommitterInfo;
    committer: ICommitterInfo;
    message: string;
    tree: ITree;
    url: string;
    comment_count: number;
  }