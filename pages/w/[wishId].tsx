import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import { Fragment, useCallback, useEffect, useState } from "react";

const WishPage: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [message] = useState<string[]>(data.message.split(" "));
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState("");

  const handleOnKeyPress = () => {
    if (count < message.length) {
      setDisplay((pd) => pd + " " + message[count]);
      setCount((pc) => pc + 1);
    }
  };

  return (
    <Fragment>
      <textarea
        rows={4}
        onChange={() => {}}
        onKeyPress={handleOnKeyPress}
        value={display}
      />
    </Fragment>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.params);
  const wishId = context.params?.wishId as string;
  const hostName = context.req.headers.host as string;
  const protocolName = hostName.includes("localhost") ? "http" : "https";
  const fetchUrl = `${protocolName}://${hostName}/api/wish/${wishId}`;
  const res = await fetch(fetchUrl);

  const data = await res.json();
  //console.log(context.req.headers);
  if (!data) {
    return {
      notFound: true,
    };
  }
  //const data = { message: "" };
  return { props: { data } };
};

export default WishPage;
