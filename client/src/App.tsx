import React, { Suspense, useState } from 'react';
import { Button } from '@nextui-org/react';
import { fetchData } from './utils/fetchData';
import CommitCard from './components/CommitCard';
import { ICommit } from './utils/interfaces/ICommit';

//Just for this demo, I'm using the same repo
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const backURL = import.meta.env.VITE_BACK_URL ?? 'http://localhost:3000';

const resource = fetchData(backURL + '/AngelVDev/GHubTakeHomeTest ');

function App() {
  const commitDetails = resource.read();

  const [currentIndex, setCurrentIndex] = useState(0);

  const displayCommits = commitDetails.slice(currentIndex, currentIndex + 3);

  const handleNextClick = () => {
    setCurrentIndex(currentIndex + 3);
  };

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex - 3);
  };

  return (
    <main className="bg-slate-700 min-h-screen flex flex-col items-center">
      <Suspense fallback={<p>Loading commits...</p>}>
        {currentIndex >= 3 ? (
          <Button
            onClick={handlePrevClick}
            className="text-slate-50 p-2 m-1 rounded-md h-8  bg-fuchsia-950"
          >
            Newer commits
          </Button>) : <h2 className="text-slate-50 w-1/5 text-center text-lg p-2 m-1 rounded-md bg-fuchsia-950">Scroll down</h2>
        }
        {displayCommits.map((commit: ICommit) => (
          <CommitCard key={commit.node_id} card={commit} />
        ))}
        {currentIndex <= 3 ? (
          <Button
            onClick={handleNextClick}
            className="text-slate-50 p-2 m-1 h-8 rounded-md bg-fuchsia-950"
          >
            Older commits
          </Button>
        )
      : <h2 className="text-slate-50 w-1/5 text-center text-lg p-2 m-1 rounded-md bg-fuchsia-950">Scroll up</h2>
      }
      </Suspense>
    </main>
  );
}

export default App;
