import React, { Component, useEffect } from "react";

const HomePage = (props:any) => {
  const { history } = props;
  useEffect(() => {
    // const token = localStorage.getItem("user");
    // var decoded = jwt_decode(token);
    // console.log(decoded);
  }, []);
  //const handleOnClick = useCallback(() => history.push("/login"), [history]);
  return (
    <div>
      <h1>this is home page</h1>
    </div>
  );
};

export default HomePage;
