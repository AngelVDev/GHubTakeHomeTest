import { ICommit } from "./interfaces/ICommit";

function wrapPromise(promise : Promise<object>) {
  let status = 'pending';
  let response: Array<ICommit>;
  
  const suspender = promise.then(
    (res) => {
      status = 'success';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
      response = res;
    },
    (err) => {
      status = 'error';
      response = err;
    },
  );
  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw response;
      default:
        return response;
    }
  };
  return { read };
}

export function fetchData(url: string) {
  const promise = fetch(url)
    .then((res) => 
    res.json())
  return wrapPromise(promise);
}
