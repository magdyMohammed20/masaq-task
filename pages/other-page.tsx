import { withCommonGetServerSideProps } from "@/utils/withCommonGetServerSideProps";
import Link from "next/link";

export const getServerSideProps = withCommonGetServerSideProps(["auth", "common"]);
export default function OtherPage() {
  return (
    <main>
      hi from other page
      <br />
      <Link
        className="text-lg font-bold"
        href="/"
      >
        back
      </Link>
    </main>
  );
}
