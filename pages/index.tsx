import type { NextPage } from "next";
import { Fragment } from "react";
import Header from "../component/Header";
import Textarea from "../component/TextArea";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Header
        title="Home"
        description="Welcome to Wish Shack! Send surprise messages to your loved ones with a visual flare!"
      />
      <h1 className={styles.title}>Welcome to Wish Shack</h1>
      <p className={styles.subtitle}>
        Send wishes, messages as surprise text for your loved ones!
      </p>
      <p className={styles.helper}>
        Do not by any means share your personal information/passwords or any
        other sensitive data here. This is a just for fun project and lets try
        to keep it like this.
      </p>
      <Textarea />
    </Fragment>
  );
};

export default Home;
