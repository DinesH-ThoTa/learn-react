import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-page">
      <h1>Oops!!!</h1>
      <h4>{err.status + " : " + err.statusText}</h4>
    </div>
  );
};

export default Error;
