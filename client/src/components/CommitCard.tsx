import { Avatar, Accordion, AccordionItem } from '@nextui-org/react';
import { ICommit } from '../utils/interfaces/ICommit';
import Header from './Header';
import GHAuthorComp from './GHAuthorComp';
import GHCommitterComp from './GHCommitterComp';
import TreeComp from './TreeComp';
import CommitAuthorComp from './CommitAuthorComp';
import CommitCommitterComp from './CommitCommitterComp';

type Props = {
  card: ICommit;
};

const CommitCard = (props: Props) => {
  const {
    card: {
      sha,
      node_id,
      commit: {
        author: { name: authorName, email: authorEmail, date: authorDate },
        committer: {
          name: committerName,
          email: committerEmail,
          date: committerDate,
        },
        message,
        tree: { sha: treeSha, url: treeUrl },
        url: commitUrl,
      },
      html_url: htmlUrl,
      comments_url: commentsUrl,
      author: {
        login: authorLogin,
        id: authorId,
        node_id: authorNodeId,
        avatar_url: authorAvatar,
        url: authorUrl,
        html_url: authorHtmlURL,
      },
      committer: {
        login: committerLogin,
        id: committerId,
        avatar_url: committerAvatarUrl,
        html_url: committerHtmlUrl,
      },
    },
  } = props;

  const headerProps = { sha, node_id, message, htmlUrl, commentsUrl };

  const authorProps = {
    authorId,
    authorHtmlURL,
    authorLogin,
    authorNodeId,
    authorUrl,
  };

  const committerProps = { committerId, committerLogin, committerHtmlUrl };

  const commitCommiterProps = {
    committerName,
    committerEmail,
    committerDate
  };

  const treeProps = { treeSha,treeUrl,commitUrl};

  const commitAuthorProps = { authorEmail, authorName, authorDate};

  return (
    <article className="border flex flex-col items-center radius-lg p-2 max-w-xs bg-[#6a06ff49]  border-slate-100 h-1/6 mx-4 my-3 rounded-lg">
      <Header props={headerProps} />
      <Accordion variant="bordered">
        <AccordionItem
          className="bg-[#401c7f92] my-1 text-zinc-50 p-3 w-full rounded-md"
          key="1"
          aria-label="Accordion 1"
          subtitle="Author info"
          title="Accordion Author"
        >
          <CommitAuthorComp props={commitAuthorProps}/>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          subtitle="Committer info"
          title="Accordion Committer"
          className="bg-[#401c7f92] text-zinc-50 p-3 w-full rounded-md my-1"
        >
          <CommitCommitterComp props={commitCommiterProps}/>
        </AccordionItem>
        <AccordionItem
          className="bg-[#401c7f92] text-zinc-50 p-3 w-full rounded-md my-1"
          key="3"
          aria-label="Accordion 3"
          subtitle="Tree info"
          title="Accordion Tree"
        >
          <TreeComp props={treeProps}/>
        </AccordionItem>
        <AccordionItem
          className="bg-[#401c7f92] text-zinc-50 p-3 w-full rounded-md my-1"
          key="4"
          startContent={
            <Avatar
            className="rounded-md"
            size="md"
            src={authorAvatar}
              alt={`${authorLogin}'s avatar`}
            />
          }
          aria-label="Accordion 4"
          subtitle="GitHub Author info"
          title="Accordion GitHub Author"
        >
          <GHAuthorComp props={authorProps} />
        </AccordionItem>
        <AccordionItem
          className="bg-[#401c7f92] text-zinc-50 p-3 w-full rounded-md my-1"
          startContent={
            <Avatar
              className="rounded-md"
              size="md"
              src={committerAvatarUrl}
              alt={`${committerLogin}'s avatar`}
            />
          }
          key="5"
          aria-label="Accordion 5"
          subtitle="Github Committer info"
          title="Accordion Github Committer"
        >
        <GHCommitterComp props={committerProps} />
        </AccordionItem>
      </Accordion>
    </article>
  );
};

export default CommitCard;
