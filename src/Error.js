import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <div>Error Handling</div>
      <span>
        {err.status}: {err.statusText}
      </span>
    </div>
  );
};

export default Error;
