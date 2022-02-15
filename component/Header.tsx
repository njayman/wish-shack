import Head from "next/head";
import { FC, Fragment } from "react";

type Props = {
  title: string;
  description: string;
};

const Header: FC<Props> = ({ title, description }) => {
  return (
    <Fragment>
      <Head>
        <title>Wish Shack | {title}</title>
        <meta name="description" content={description} />
      </Head>
    </Fragment>
  );
};

export default Header;
