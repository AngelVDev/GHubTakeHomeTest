import { Injectable } from '@nestjs/common';
import { ICommit } from './icommit.interface';
import fetch from 'node-fetch';

@Injectable()
export class AppService {
  async getCommitHistory(owner: string, repo: string): Promise<ICommit[]> {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits`,
    );
    const data = await response.json();

    const justRelevantData = data.map((commit: ICommit) => ({
      sha: commit.sha,
      node_id: commit.node_id,
      commit: {
        author: {
          name: commit.commit.author.name,
          email: commit.commit.author.email,
          date: commit.commit.author.date,
        },
        committer: {
          name: commit.commit.committer.name,
          email: commit.commit.committer.email,
          date: commit.commit.committer.date,
        },
        message: commit.commit.message,
        tree: {
          sha: commit.commit.tree.sha,
          url: commit.commit.tree.url,
        },
        url: commit.commit.url,
        comment_count: commit.commit.comment_count,
      },
      url: commit.url,
      html_url: commit.html_url,
      comments_url: commit.comments_url,
      author: {
        login: commit.author.login,
        id: commit.author.id,
        node_id: commit.author.node_id,
        avatar_url: commit.author.avatar_url,
        gravatar_id: commit.author.gravatar_id,
        url: commit.author.url,
        html_url: commit.author.html_url,
      },
      committer: {
        login: commit.committer.login,
        id: commit.committer.id,
        node_id: commit.committer.node_id,
        avatar_url: commit.committer.avatar_url,
        gravatar_id: commit.committer.gravatar_id,
        url: commit.committer.url,
        html_url: commit.committer.html_url,
      },
    }));
    return justRelevantData;
  }
}
