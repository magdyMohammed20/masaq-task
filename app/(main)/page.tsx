import HomePage from "@/components/home/Home";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* qs qs
      <code>
        auth user:
        <pre>email</pre>
      </code>
      {false ? (
        <button
          // onClick={() => logout()}
          className="group relative w-full p-2"
        >
          logout
        </button>
      ) : (
        <Link href="/login">login</Link>
      )}
      <br />
      <Link href="/comments">comments</Link> */}
      <HomePage />
    </main>
  );
}
