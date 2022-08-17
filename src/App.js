import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { VedioData } from "./redux/Actions/vedioAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(VedioData());
  }, []);
  return <div className="App">vedio Application</div>;
}

export default App;
