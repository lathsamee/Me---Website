import React from "react";
import Loadable from "react-loadable";

function Loading() {
  return <div>Loading...</div>;
}

/*** COMPONENT ***/
const home = Loadable({
  loader: () => import("../screen/home"),
  loading: Loading
});

export default home;
