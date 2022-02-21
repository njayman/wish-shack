import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, FormEventHandler, FC, useState } from "react";
import styles from "../styles/Textarea.module.css";
const Textarea: FC = () => {
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const response = await res.json();
      console.log(response);
      router.push(`/w/${response.id}`);
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.textareaContainer}>
      <textarea className={styles.textarea} rows={6} onChange={handleChange} />
      <button className={styles.generate} type="submit" disabled={loading}>
        Generate
      </button>
      {/*<Link href={`/`}>Visit</Link>*/}
    </form>
  );
};

export default Textarea;
