import { ICommit } from "./interfaces/ICommit";

function wrapPromise(promise) {
  let status = 'pending';
  let response : Array<ICommit>;

  const suspender = promise.then(
    (res: any) => {
      status = 'success';
      response = res;
    },
    (err: any) => {
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
