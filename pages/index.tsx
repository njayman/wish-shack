import type { NextPage } from "next";
import { Fragment, useState } from "react";
import Header from "../component/Header";
// import styles from "../styles/Home.module.css";

const msg = "hello world";

const Home: NextPage = () => {
  const [messages] = useState(msg.split(" "));
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState("");

  const handleOnKeyPress = () => {
    if (count < messages.length) {
      setDisplay((pd) => pd + " " + messages[count]);
      setCount((pc) => pc + 1);
    }
  };

  return (
    <Fragment>
      <Header
        title="Home"
        description="Welcome to Wish Shack! Send surprise messages to your loved ones with a visual flare!"
      />
      <h1>Hello world</h1>
      <textarea
        rows={4}
        onChange={() => {}}
        onKeyPress={handleOnKeyPress}
        value={display}
      />
    </Fragment>
  );
};

export default Home;
