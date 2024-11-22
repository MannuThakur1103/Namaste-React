import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const err = useRouteError();
  console.log(err)
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong</h2>
      <h3>
        {err.status} : {err.statusText}
      </h3>
    </div>
  );
};

export default ErrorBoundary;

//Now ErrorBoundary keyword is used in latest version of react-router-dom instead of Error.
